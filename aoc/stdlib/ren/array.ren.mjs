// CREATING ARRAYS -------------------------------------------------------------
// singleton : a -> Array a
export function singleton(a) {
    return [a]
}

// repeat : Number -> a -> Array a
export function repeat(length) {
    return (a) => {
        return Array.from({ length }, _ => a)
    }
}

// range : Number -> Number -> Array Number
export function range(start) {
    return (length) => {
        return Array.from({ length }, (_, i) => i + start)
    }
}

// cons : a -> Array a -> Array a
export function cons(head) {
    return (tail) => {
        return [head, ...tail]
    }
}

// join : Array a -> Array a -> Array a
export function join(xs) {
    return (ys) => {
        return [...xs, ...ys]
    }
}

// TRANSFORMING ARRAYS ---------------------------------------------------------
// map : (a -> b) -> Array a -> Array b
export function map(f) {
    return (arr) => {
        return arr.map(f)
    }
}

// map2 : (a -> b -> c) -> Array a -> Array b -> Array c
export function map2(f) {
    return (xs) => (ys) => {
        const shortestLength = [xs.length, ys.length].sort((a, b) => a - b)[0]
        const arr = []

        for (let i = 0; i < shortestLength; i++) {
            arr.push(f(xs[i])(ys[i]))
        }

        return arr
    }
}

// map3 : (a -> b -> c -> d) -> Array a -> Array b -> Array c -> Array d
export function map3(f) {
    return (xs) => (ys) => (zs) => {
        const shortestLength = [xs.length, ys.length, zs.length].sort((a, b) => a - b)[0]
        const arr = []

        for (let i = 0; i < shortestLength; i++) {
            arr.push(f(xs[i])(ys[i])(zs[i]))
        }

        return arr
    }

}

// indexedMap : (Number -> a -> b) -> Array a -> Array b
export function indexedMap(f) {
    return (arr) => {
        return arr.map((x, i) => f(i)(x))
    }
}

// foldl : (b -> a -> b) -> b -> Array a -> b
export function foldl(f) {
    return (x) => (arr) => {
        return arr.reduce((b, a) => f(b)(a), x)
    }
}

// foldr : (b -> a -> b) -> b -> Array a -> b
export function foldr(f) {
    return (a) => (arr) => {
        return arr.reduceRight(f, a)
    }
}

export function $continue(a) {
    return ['#continue', a]
}

export function $stop(a) {
    return ['#stop', a]
}

export function foldlUntil(f) {
    return (a) => (arr) => {
        for (let i = 0; i < arr.length; i++) {
            const [$, b] = f(a)(arr[i])

            if ($ == '#stop') {
                return b
            } else {
                a = b
            }
        }
    }
}

export function foldrUntil(f) {
    return (a) => (arr) => {
        for (let i = arr.length - 1; i >= 0; i--) {
            const [$, b] = f(a)(arr[i])

            if ($ == '#stop') {
                return b
            } else {
                a = b
            }
        }
    }
}

// filter : (a -> Boolean) -> Array a -> Array a
export function filter(f) {
    return (arr) => {
        arr.filter(f)
    }
}

// filterMap : (a -> Maybe b) -> Array a -> Array b
export function filterMap(f) {
    return (arr) => {
        return arr.reduceRight((xs, x) => {
            const y = f(x)
            if (Array.isArray(y) && y.length === 1 && y[0] === '#nothing') {
                return xs
            }

            if (Array.isArray(y) && y.length === 2 && y[0] === '#just') {
                return [y[1], ...xs]
            }
        }, [])
    }
}

// forEach : (a -> ()) -> Array a -> ()
export function forEach(f) {
    return (arr) => {
        arr.forEach(a => f(a))
    }
}

//
// head : Array a -> Maybe a
export function head(arr) {
    return arr.length >= 1
        ? ['#just', arr[0]]
        : ['#nothing']
}

export function unsafeHead(arr) {
    return arr[0]
}

export function tail(arr) {
    const [, ...tail] = arr
    return tail
}

export function drop(n) {
    return (arr) => {
        return arr.filter((_, i) => i >= n)
    }
}

export function take(n) {
    return (arr) => {
        return arr.filter((_, i) => i < n)
    }
}

// UTILS -----------------------------------------------------------------------
// length : Array a -> Number
export function length(arr) {
    return arr.length
}

// reverse : Array a -> Array a
export function reverse(arr) {
    return [...arr].reverse()
}

// member : a -> Array a
export function member(a) {
    return (arr) => {
        return arr.includes(a)
    }
}

// any : (a -> Boolean) -> Array a -> Boolean
export function any(f) {
    return (arr) => {
        return arr.some(f)
    }
}

// all : (a -> Boolean) -> Array a -> Boolean
export function all(f) {
    return (arr) => {
        return arr.every(f)
    }
}

//
export function isArray(a) {
    return Array.isArray(a)
}

//
export function sum(arr) {
    return arr.reduce((x, y) => x + y, 0)
}

export function product(arr) {
    return arr.reduce((x, y) => x * y, 1)
}