import { $just, $nothing } from './maybe.ren.mjs'

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

export function append(a) {
    return (b) => {
        return `${a}${b}`
    }
}

// toNumber : String -> Maybe Number
export function toNumber(string) {
    const number = Number(string)

    return isNaN(number)
        ? ['#nothing']
        : ['#just', number]
}

//
export function isEmpty(string) {
    return string === ''
}

//
export function length(string) {
    return string.length
}

export function startsWith(leading) {
    return (string) => {
        return string.startsWith(leading)
    }
}

export function drop(n) {
    return (string) => {
        return string.substring(n)
    }
}

export function take(n) {
    return (string) => {
        return string === ''
            ? $nothing
            : $just(string.substring(0, n))
    }
}