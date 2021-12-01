export function $just (a) {
    return ['#just', a]
}

export var $nothing = ['#nothing']

export function map (f) {
    return (m) => {
        if (Array.isArray(m) && m.length >= 2 && m[0] == '#just') {
            var a = m[1]
            return $just (f (a))
        }

        if (Array.isArray(m) && m.length >= 1 && m[0] == '#nothing') {
            
            return $nothing
        }
    }
}

export function andThen (f) {
    return (m) => {
        if (Array.isArray(m) && m.length >= 2 && m[0] == '#just') {
            var a = m[1]
            return f (a)
        }

        if (Array.isArray(m) && m.length >= 1 && m[0] == '#nothing') {
            
            return $nothing
        }
    }
}

export function withDefault (b) {
    return (m) => {
        if (Array.isArray(m) && m.length >= 2 && m[0] == '#just') {
            var a = m[1]
            return a
        }

        if (Array.isArray(m) && m.length >= 1 && m[0] == '#nothing') {
            
            return b
        }
    }
}

export var unwrap = withDefault ()
