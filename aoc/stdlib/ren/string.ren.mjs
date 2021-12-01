// split : String -> String -> Array String
export function split(separator) {
    return (string) => {
        return string.split(separator)
    }
}


// join : String -> Array String -> String
export function join(separator) {
    return (strings) => {
        return strings.join(separator)
    }
}

// toNumber : String -> Maybe Number
export function toNumber(string) {
    const number = Number(string)

    return isNaN(number)
        ? ['#nothing']
        : ['#just', number]
}
