port module Main exposing (main)

-- IMPORTS ---------------------------------------------------------------------

import Data.IO exposing (IO)
import Data.Project
import Dict exposing (Dict)
import Json.Decode
import Json.Encode
import Ren.Compiler
import Ren.Language



-- MAIN ------------------------------------------------------------------------


main : Program Flags Model Msg
main =
    Platform.worker
        { init = init
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL -----------------------------------------------------------------------


type alias Model =
    { stdlib : String
    }


type alias Flags =
    { stdlib : String
    , argv : List String
    }


init : Flags -> IO Msg Model
init flags =
    Data.IO.pure { stdlib = flags.stdlib }



-- UPDATE ----------------------------------------------------------------------


type Msg
    = GotProject (Dict String String)
    | None


update : Msg -> Model -> IO Msg Model
update msg { stdlib } =
    case msg of
        GotProject project ->
            Data.IO.pure { stdlib = stdlib }
                |> Data.IO.with
                    (project
                        |> Data.Project.fromFiles
                        |> Data.Project.map
                            (Ren.Compiler.parse
                                >> Result.map addStdlib
                                >> Result.map Ren.Compiler.optimise
                                >> Result.map (resolveImports stdlib)
                            )
                        |> Data.Project.toFiles
                        |> writeFiles
                    )

        None ->
            Data.IO.pure { stdlib = stdlib }


port toFs : Json.Encode.Value -> Cmd msg


addStdlib : Ren.Language.Module -> Ren.Language.Module
addStdlib { imports, declarations } =
    let
        stdlib =
            [ Ren.Language.Import "ren/array" [ "Array" ] []
            , Ren.Language.Import "ren/compare" [ "Compare" ] []
            , Ren.Language.Import "ren/function" [ "Function" ] []
            , Ren.Language.Import "ren/logic" [ "Logic" ] []
            , Ren.Language.Import "ren/math" [ "Math" ] []
            , Ren.Language.Import "ren/maybe" [ "Maybe" ] []
            , Ren.Language.Import "ren/object" [ "Object" ] []
            , Ren.Language.Import "ren/promise" [ "Promise" ] []
            , Ren.Language.Import "ren/string" [ "String" ] []
            ]
    in
    { imports = stdlib |> List.filter (\imprt -> Basics.not (List.member imprt imports)) |> (++) imports
    , declarations = declarations
    }


resolveImports : String -> Ren.Language.Module -> Ren.Language.Module
resolveImports stdlib { imports, declarations } =
    { imports =
        List.map
            (\{ path, name, bindings } ->
                { path =
                    if String.startsWith "." path then
                        path ++ ".ren.mjs"

                    else
                        stdlib ++ "/" ++ path ++ ".ren.mjs"
                , name = name
                , bindings = bindings
                }
            )
            imports
    , declarations = declarations
    }


writeFiles : Dict String (Result String String) -> Cmd msg
writeFiles files =
    let
        encodeFile file =
            case file of
                Ok src ->
                    Json.Encode.object
                        [ ( "$", Json.Encode.string "Ok" )
                        , ( "src", Json.Encode.string src )
                        ]

                Err err ->
                    Json.Encode.object
                        [ ( "$", Json.Encode.string "Err" )
                        , ( "err", Json.Encode.string err )
                        ]
    in
    toFs <|
        Json.Encode.object
            [ ( "$", Json.Encode.string "WriteFiles" )
            , ( "files", Json.Encode.dict identity encodeFile files )
            ]



-- SUBSCRIPTIONS ---------------------------------------------------------------


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ fromFs (Json.Decode.decodeValue fromFsDecoder >> Result.withDefault None)
        ]


port fromFs : (Json.Decode.Value -> msg) -> Sub msg


fromFsDecoder : Json.Decode.Decoder Msg
fromFsDecoder =
    Json.Decode.field "$" Json.Decode.string
        |> Json.Decode.andThen
            (\tag ->
                case tag of
                    "GotProject" ->
                        Json.Decode.map GotProject
                            (Json.Decode.field "0" (Json.Decode.dict Json.Decode.string))

                    _ ->
                        Json.Decode.fail ""
            )
