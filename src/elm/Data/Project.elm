module Data.Project exposing (..)

import Dict exposing (Dict)
import Parser
import Parser.Extra
import Ren.Compiler exposing (Target(..))
import Ren.Language


type alias Project a =
    { files : Dict String a
    }


fromFiles : Dict String a -> Project a
fromFiles files =
    { files = files
    }


toFiles : Project (Result (List Parser.DeadEnd) Ren.Language.Module) -> Dict String (Result String String)
toFiles project =
    project.files
        |> Dict.map (\_ -> Result.map (Ren.Compiler.emit ESModule) >> Result.mapError Parser.Extra.deadEndsToString)


map : (a -> b) -> Project a -> Project b
map f project =
    { files = Dict.map (always f) project.files
    }


filter : (a -> Bool) -> Project a -> Project a
filter f project =
    { files = Dict.filter (always f) project.files
    }


filterMap : (a -> Maybe b) -> Project a -> Project b
filterMap f project =
    { files =
        Dict.foldl
            (\k v acc ->
                case f v of
                    Just newVal ->
                        Dict.insert k newVal acc

                    Nothing ->
                        acc
            )
            Dict.empty
            project.files
    }
