import * as Maybe from './maybe.ren.mjs'

export function $ok (a) {
    return ['#ok', a]
}

export function $err (a) {
    return ['#err', a]
}

export function fromMaybe (e) {
    return (m) => {
        return Maybe.withDefault ($err (e)) (Maybe.map ($ok) (m))
    }
}

export function map (f) {
    return (r) => {
        if (Array.isArray(r) && r.length >= 2 && r[0] == '#ok') {
            var a = r[1]
            return $ok (f (a))
        }

        if (Array.isArray(r) && r.length >= 2 && r[0] == '#err') {
            var e = r[1]
            return $err (e)
        }
    }
}

export function andThen (f) {
    return (r) => {
        if (Array.isArray(r) && r.length >= 2 && r[0] == '#ok') {
            var a = r[1]
            return f (a)
        }

        if (Array.isArray(r) && r.length >= 2 && r[0] == '#err') {
            var e = r[1]
            return $err (e)
        }
    }
}

export function withDefault (b) {
    return (r) => {
        if (Array.isArray(r) && r.length >= 2 && r[0] == '#ok') {
            var a = r[1]
            return a
        }

        if (Array.isArray(r) && r.length >= 2 && r[0] == '#err') {
            
            return b
        }
    }
}

export var unwrap = withDefault ()
