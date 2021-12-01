module Parser.Extra exposing (..)

import Parser exposing (Problem(..))


deadEndsToString : List Parser.DeadEnd -> String
deadEndsToString =
    List.map deadEndToString >> String.join "\n"


deadEndToString : Parser.DeadEnd -> String
deadEndToString deadEnd =
    let
        position : String
        position =
            "row:" ++ String.fromInt deadEnd.row ++ " col:" ++ String.fromInt deadEnd.col
    in
    case deadEnd.problem of
        Expecting str ->
            "Expecting `" ++ str ++ "` at " ++ position

        ExpectingInt ->
            "ExpectingInt at " ++ position

        ExpectingHex ->
            "ExpectingHex at " ++ position

        ExpectingOctal ->
            "ExpectingOctal at " ++ position

        ExpectingBinary ->
            "ExpectingBinary at " ++ position

        ExpectingFloat ->
            "ExpectingFloat at " ++ position

        ExpectingNumber ->
            "ExpectingNumber at " ++ position

        ExpectingVariable ->
            "ExpectingVariable at " ++ position

        ExpectingSymbol str ->
            "ExpectingSymbol `" ++ str ++ "` at " ++ position

        ExpectingKeyword str ->
            "ExpectingKeyword `" ++ str ++ "` at " ++ position

        ExpectingEnd ->
            "ExpectingEnd at " ++ position

        UnexpectedChar ->
            "UnexpectedChar at " ++ position

        Problem str ->
            "ProblemString `" ++ str ++ "` at " ++ position

        BadRepeat ->
            "BadRepeat at " ++ position
