var $9DIyH$fs = require("fs");
var $9DIyH$path = require("path");
var $9DIyH$process = require("process");

var $f04ffd8da6057e40$exports = {};
(function(scope) {
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    function F2(fun) {
        return F(2, fun, function(a) {
            return function(b) {
                return fun(a, b);
            };
        });
    }
    function F3(fun) {
        return F(3, fun, function(a) {
            return function(b) {
                return function(c) {
                    return fun(a, b, c);
                };
            };
        });
    }
    function F4(fun) {
        return F(4, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return fun(a, b, c, d);
                    };
                };
            };
        });
    }
    function F5(fun) {
        return F(5, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return fun(a, b, c, d, e);
                        };
                    };
                };
            };
        });
    }
    function F6(fun) {
        return F(6, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        });
    }
    function F7(fun) {
        return F(7, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return fun(a, b, c, d, e, f, g);
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F8(fun) {
        return F(8, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return function(h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function F9(fun) {
        return F(9, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return function(h) {
                                        return function(i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        });
    }
    function A2(fun, a, b) {
        return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
    console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [
            value
        ];
    }
    function _JsArray_length(array) {
        return array.length;
    }
    var _JsArray_initialize = F3(function(size, offset, func) {
        var result = new Array(size);
        for(var i = 0; i < size; i++)result[i] = func(offset + i);
        return result;
    });
    var _JsArray_initializeFromList = F2(function(max, ls) {
        var result = new Array(max);
        for(var i = 0; i < max && ls.b; i++){
            result[i] = ls.a;
            ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
    });
    var _JsArray_unsafeGet = F2(function(index, array) {
        return array[index];
    });
    var _JsArray_unsafeSet = F3(function(index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = array[i];
        result[index] = value;
        return result;
    });
    var _JsArray_push = F2(function(value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for(var i = 0; i < length; i++)result[i] = array[i];
        result[length] = value;
        return result;
    });
    var _JsArray_foldl = F3(function(func, acc, array) {
        var length = array.length;
        for(var i = 0; i < length; i++)acc = A2(func, array[i], acc);
        return acc;
    });
    var _JsArray_foldr = F3(function(func, acc, array) {
        for(var i = array.length - 1; i >= 0; i--)acc = A2(func, array[i], acc);
        return acc;
    });
    var _JsArray_map = F2(function(func, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = func(array[i]);
        return result;
    });
    var _JsArray_indexedMap = F3(function(func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for(var i = 0; i < length; i++)result[i] = A2(func, offset + i, array[i]);
        return result;
    });
    var _JsArray_slice = F3(function(from, to, array) {
        return array.slice(from, to);
    });
    var _JsArray_appendN = F3(function(n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) itemsToCopy = source.length;
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for(var i = 0; i < destLen; i++)result[i] = dest[i];
        for(var i = 0; i < itemsToCopy; i++)result[i + destLen] = source[i];
        return result;
    });
    // LOG
    var _Debug_log_UNUSED = F2(function(tag, value) {
        return value;
    });
    var _Debug_log = F2(function(tag, value) {
        console.log(tag + ': ' + _Debug_toString(value));
        return value;
    });
    // TODOS
    function _Debug_todo(moduleName, region) {
        return function(message) {
            _Debug_crash(8, moduleName, region, message);
        };
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function(message) {
            _Debug_crash(9, moduleName, region, value, message);
        };
    }
    // TO STRING
    function _Debug_toString_UNUSED(value) {
        return '<internals>';
    }
    function _Debug_toString(value) {
        return _Debug_toAnsiString(false, value);
    }
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === 'function') return _Debug_internalColor(ansi, '<function>');
        if (typeof value === 'boolean') return _Debug_ctorColor(ansi, value ? 'True' : 'False');
        if (typeof value === 'number') return _Debug_numberColor(ansi, value + '');
        if (value instanceof String) return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        if (typeof value === 'string') return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
        if (typeof value === 'object' && '$' in value) {
            var tag = value.$;
            if (typeof tag === 'number') return _Debug_internalColor(ansi, '<internals>');
            if (tag[0] === '#') {
                var output = [];
                for(var k in value){
                    if (k === '$') continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]));
                }
                return '(' + output.join(',') + ')';
            }
            if (tag === 'Set_elm_builtin') return _Debug_ctorColor(ansi, 'Set') + _Debug_fadeColor(ansi, '.fromList') + ' ' + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin') return _Debug_ctorColor(ansi, 'Dict') + _Debug_fadeColor(ansi, '.fromList') + ' ' + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            if (tag === 'Array_elm_builtin') return _Debug_ctorColor(ansi, 'Array') + _Debug_fadeColor(ansi, '.fromList') + ' ' + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            if (tag === '::' || tag === '[]') {
                var output = '[';
                value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
                for(; value.b; value = value.b)output += ',' + _Debug_toAnsiString(ansi, value.a);
                return output + ']';
            }
            var output = '';
            for(var i in value){
                if (i === '$') continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
                output += ' ' + (parenless ? str : '(' + str + ')');
            }
            return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === 'function' && value instanceof DataView) return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
        if (typeof File !== 'undefined' && value instanceof File) return _Debug_internalColor(ansi, '<' + value.name + '>');
        if (typeof value === 'object') {
            var output = [];
            for(var key in value){
                var field = key[0] === '_' ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) return '{}';
            return '{ ' + output.join(', ') + ' }';
        }
        return _Debug_internalColor(ansi, '<internals>');
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
        if (isChar) return s.replace(/\'/g, '\\\'');
        else return s.replace(/\"/g, '\\"');
    }
    function _Debug_ctorColor(ansi, string) {
        return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    }
    // CRASH
    function _Debug_crash_UNUSED(identifier) {
        throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
    }
    function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
        switch(identifier){
            case 0:
                throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');
            case 1:
                throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');
            case 2:
                var jsonErrorString = fact1;
                throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);
            case 3:
                var portName = fact1;
                throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');
            case 4:
                var portName = fact1;
                var problem = fact2;
                throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);
            case 5:
                throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
            case 6:
                var moduleName = fact1;
                throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');
            case 8:
                var moduleName = fact1;
                var region = fact2;
                var message = fact3;
                throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);
            case 9:
                var moduleName = fact1;
                var region = fact2;
                var value = fact3;
                var message = fact4;
                throw new Error('TODO in module `' + moduleName + '` from the `case` expression ' + _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    ' + _Debug_toString(value).replace('\n', '\n    ') + '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    '));
            case 10:
                throw new Error('Bug in https://github.com/elm/virtual-dom/issues');
            case 11:
                throw new Error('Cannot perform mod 0. Division by zero error.');
        }
    }
    function _Debug_regionToString(region) {
        if (region.start.line === region.end.line) return 'on line ' + region.start.line;
        return 'on lines ' + region.start.line + ' through ' + region.end.line;
    }
    // EQUALITY
    function _Utils_eq(x, y) {
        for(var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack));
        return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) return true;
        if (typeof x !== 'object' || x === null || y === null) {
            typeof x === 'function' && _Debug_crash(5);
            return false;
        }
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true;
        }
        /**/ if (x.$ === 'Set_elm_builtin') {
            x = $elm$core$Set$toList(x);
            y = $elm$core$Set$toList(y);
        }
        if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin') {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        //*/
        /**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/ for(var key in x){
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) return false;
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual = F2(function(a, b) {
        return !_Utils_eq(a, b);
    });
    // COMPARISONS
    // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
    // the particular integer values assigned to LT, EQ, and GT.
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== 'object') return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
        /**/ if (x instanceof String) {
            var a = x.valueOf();
            var b = y.valueOf();
            return a === b ? 0 : a < b ? -1 : 1;
        }
        //*/
        /**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/ /**/ if (x.$[0] === '#') return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
        // traverse conses until end of a list or a mismatch
        for(; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b); // WHILE_CONSES
        return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
    }
    var _Utils_lt = F2(function(a, b) {
        return _Utils_cmp(a, b) < 0;
    });
    var _Utils_le = F2(function(a, b) {
        return _Utils_cmp(a, b) < 1;
    });
    var _Utils_gt = F2(function(a, b) {
        return _Utils_cmp(a, b) > 0;
    });
    var _Utils_ge = F2(function(a, b) {
        return _Utils_cmp(a, b) >= 0;
    });
    var _Utils_compare = F2(function(x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    });
    // COMMON VALUES
    var _Utils_Tuple0_UNUSED = 0;
    var _Utils_Tuple0 = {
        $: '#0'
    };
    function _Utils_Tuple2_UNUSED(a, b) {
        return {
            a: a,
            b: b
        };
    }
    function _Utils_Tuple2(a, b) {
        return {
            $: '#2',
            a: a,
            b: b
        };
    }
    function _Utils_Tuple3_UNUSED(a, b, c) {
        return {
            a: a,
            b: b,
            c: c
        };
    }
    function _Utils_Tuple3(a, b, c) {
        return {
            $: '#3',
            a: a,
            b: b,
            c: c
        };
    }
    function _Utils_chr_UNUSED(c) {
        return c;
    }
    function _Utils_chr(c) {
        return new String(c);
    }
    // RECORDS
    function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {
        };
        for(var key in oldRecord)newRecord[key] = oldRecord[key];
        for(var key in updatedFields)newRecord[key] = updatedFields[key];
        return newRecord;
    }
    // APPEND
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        // append Strings
        if (typeof xs === 'string') return xs + ys;
        // append Lists
        if (!xs.b) return ys;
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for(var curr = root; xs.b; xs = xs.b)curr = curr.b = _List_Cons(xs.a, ys);
        return root;
    }
    var _List_Nil_UNUSED = {
        $: 0
    };
    var _List_Nil = {
        $: '[]'
    };
    function _List_Cons_UNUSED(hd, tl) {
        return {
            $: 1,
            a: hd,
            b: tl
        };
    }
    function _List_Cons(hd, tl) {
        return {
            $: '::',
            a: hd,
            b: tl
        };
    }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for(var i = arr.length; i--;)out = _List_Cons(arr[i], out);
        return out;
    }
    function _List_toArray(xs) {
        for(var out = []; xs.b; xs = xs.b)out.push(xs.a);
        return out;
    }
    var _List_map2 = F3(function(f, xs, ys) {
        for(var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b)arr.push(A2(f, xs.a, ys.a));
        return _List_fromArray(arr);
    });
    var _List_map3 = F4(function(f, xs, ys, zs) {
        for(var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A3(f, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_map4 = F5(function(f, ws, xs, ys, zs) {
        for(var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
        for(var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b)arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        return _List_fromArray(arr);
    });
    var _List_sortBy = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            return _Utils_cmp(f(a), f(b));
        }));
    });
    var _List_sortWith = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    });
    // MATH
    var _Basics_add = F2(function(a, b) {
        return a + b;
    });
    var _Basics_sub = F2(function(a, b) {
        return a - b;
    });
    var _Basics_mul = F2(function(a, b) {
        return a * b;
    });
    var _Basics_fdiv = F2(function(a, b) {
        return a / b;
    });
    var _Basics_idiv = F2(function(a, b) {
        return a / b | 0;
    });
    var _Basics_pow = F2(Math.pow);
    var _Basics_remainderBy = F2(function(b, a) {
        return a % b;
    });
    // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
    var _Basics_modBy = F2(function(modulus, x) {
        var answer = x % modulus;
        return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
    });
    // TRIGONOMETRY
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2 = F2(Math.atan2);
    // MORE MATH
    function _Basics_toFloat(x) {
        return x;
    }
    function _Basics_truncate(n) {
        return n | 0;
    }
    function _Basics_isInfinite(n) {
        return n === Infinity || n === -Infinity;
    }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    // BOOLEANS
    function _Basics_not(bool) {
        return !bool;
    }
    var _Basics_and = F2(function(a, b) {
        return a && b;
    });
    var _Basics_or = F2(function(a, b) {
        return a || b;
    });
    var _Basics_xor = F2(function(a, b) {
        return a !== b;
    });
    var _String_cons = F2(function(chr, str) {
        return chr + str;
    });
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word) ? $elm$core$Maybe$Just(55296 <= word && word <= 56319 ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))) : $elm$core$Maybe$Nothing;
    }
    var _String_append = F2(function(a, b) {
        return a + b;
    });
    function _String_length(str) {
        return str.length;
    }
    var _String_map = F2(function(func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while(i < len){
            var word = string.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
        }
        return array.join('');
    });
    var _String_filter = F2(function(isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while(i < len){
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += str[i];
                i++;
            }
            if (isGood(_Utils_chr(char))) arr.push(char);
        }
        return arr.join('');
    });
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while(i < len){
            var word = str.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++;
            } else {
                arr[len - i] = str[i];
                i++;
            }
        }
        return arr.join('');
    }
    var _String_foldl = F3(function(func, state, string) {
        var len = string.length;
        var i = 0;
        while(i < len){
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    });
    var _String_foldr = F3(function(func, state, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    });
    var _String_split = F2(function(sep, str) {
        return str.split(sep);
    });
    var _String_join = F2(function(sep, strs) {
        return strs.join(sep);
    });
    var _String_slice = F3(function(start, end, str) {
        return str.slice(start, end);
    });
    function _String_trim(str) {
        return str.trim();
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, '');
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, '');
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str) {
        return str.toUpperCase();
    }
    function _String_toLower(str) {
        return str.toLowerCase();
    }
    var _String_any = F2(function(isGood, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) return true;
        }
        return false;
    });
    var _String_all = F2(function(isGood, string) {
        var i = string.length;
        while(i--){
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) return false;
        }
        return true;
    });
    var _String_contains = F2(function(sub, str) {
        return str.indexOf(sub) > -1;
    });
    var _String_startsWith = F2(function(sub, str) {
        return str.indexOf(sub) === 0;
    });
    var _String_endsWith = F2(function(sub, str) {
        return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
    });
    var _String_indexes = F2(function(sub, str) {
        var subLen = sub.length;
        if (subLen < 1) return _List_Nil;
        var i = 0;
        var is = [];
        while((i = str.indexOf(sub, i)) > -1){
            is.push(i);
            i = i + subLen;
        }
        return _List_fromArray(is);
    });
    // TO STRING
    function _String_fromNumber(number) {
        return number + '';
    }
    // INT CONVERSIONS
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 /* + */  || code0 == 45 /* - */  ? 1 : 0;
        for(var i = start; i < str.length; ++i){
            var code = str.charCodeAt(i);
            if (code < 48 || 57 < code) return $elm$core$Maybe$Nothing;
            total = 10 * total + code - 48;
        }
        return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
    }
    // FLOAT CONVERSIONS
    function _String_toFloat(s) {
        // check if it is a hex, octal, or binary number
        if (s.length === 0 || /[\sxbo]/.test(s)) return $elm$core$Maybe$Nothing;
        var n = +s;
        // faster isNaN check
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
    }
    function _String_fromList(chars) {
        return _List_toArray(chars).join('');
    }
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        return code;
    }
    function _Char_fromCode(code) {
        return _Utils_chr(code < 0 || 1114111 < code ? '\uFFFD' : code <= 65535 ? String.fromCharCode(code) : (code -= 65536, String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
    }
    /**/ function _Json_errorToString(error) {
        return $elm$json$Json$Decode$errorToString(error);
    }
    //*/
    // CORE DECODERS
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        };
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        };
    }
    function _Json_decodePrim(decoder) {
        return {
            $: 2,
            b: decoder
        };
    }
    var _Json_decodeInt = _Json_decodePrim(function(value) {
        return typeof value !== 'number' ? _Json_expecting('an INT', value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting('an INT', value);
    });
    var _Json_decodeBool = _Json_decodePrim(function(value) {
        return typeof value === 'boolean' ? $elm$core$Result$Ok(value) : _Json_expecting('a BOOL', value);
    });
    var _Json_decodeFloat = _Json_decodePrim(function(value) {
        return typeof value === 'number' ? $elm$core$Result$Ok(value) : _Json_expecting('a FLOAT', value);
    });
    var _Json_decodeValue = _Json_decodePrim(function(value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
    });
    var _Json_decodeString = _Json_decodePrim(function(value) {
        return typeof value === 'string' ? $elm$core$Result$Ok(value) : value instanceof String ? $elm$core$Result$Ok(value + '') : _Json_expecting('a STRING', value);
    });
    function _Json_decodeList(decoder) {
        return {
            $: 3,
            b: decoder
        };
    }
    function _Json_decodeArray(decoder) {
        return {
            $: 4,
            b: decoder
        };
    }
    function _Json_decodeNull(value) {
        return {
            $: 5,
            c: value
        };
    }
    var _Json_decodeField = F2(function(field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        };
    });
    var _Json_decodeIndex = F2(function(index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        };
    });
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        };
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        };
    }
    var _Json_andThen = F2(function(callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        };
    });
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        };
    }
    // DECODING OBJECTS
    var _Json_map1 = F2(function(f, d1) {
        return _Json_mapMany(f, [
            d1
        ]);
    });
    var _Json_map2 = F3(function(f, d1, d2) {
        return _Json_mapMany(f, [
            d1,
            d2
        ]);
    });
    var _Json_map3 = F4(function(f, d1, d2, d3) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3
        ]);
    });
    var _Json_map4 = F5(function(f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4
        ]);
    });
    var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5
        ]);
    });
    var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6
        ]);
    });
    var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6,
            d7
        ]);
    });
    var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [
            d1,
            d2,
            d3,
            d4,
            d5,
            d6,
            d7,
            d8
        ]);
    });
    // DECODE
    var _Json_runOnString = F2(function(decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
        } catch (e) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
        }
    });
    var _Json_run = F2(function(decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
    });
    function _Json_runHelp(decoder, value) {
        switch(decoder.$){
            case 2:
                return decoder.b(value);
            case 5:
                return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting('null', value);
            case 3:
                if (!_Json_isArray(value)) return _Json_expecting('a LIST', value);
                return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
                if (!_Json_isArray(value)) return _Json_expecting('an ARRAY', value);
                return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
                var field = decoder.d;
                if (typeof value !== 'object' || value === null || !(field in value)) return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
                var result = _Json_runHelp(decoder.b, value[field]);
                return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
            case 7:
                var index = decoder.e;
                if (!_Json_isArray(value)) return _Json_expecting('an ARRAY', value);
                if (index >= value.length) return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
                var result = _Json_runHelp(decoder.b, value[index]);
                return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
            case 8:
                if (typeof value !== 'object' || value === null || _Json_isArray(value)) return _Json_expecting('an OBJECT', value);
                var keyValuePairs = _List_Nil;
                // TODO test perf of Object.keys and switch when support is good enough
                for(var key in value)if (value.hasOwnProperty(key)) {
                    var result = _Json_runHelp(decoder.b, value[key]);
                    if (!$elm$core$Result$isOk(result)) return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
                    keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
                var answer = decoder.f;
                var decoders = decoder.g;
                for(var i = 0; i < decoders.length; i++){
                    var result = _Json_runHelp(decoders[i], value);
                    if (!$elm$core$Result$isOk(result)) return result;
                    answer = answer(result.a);
                }
                return $elm$core$Result$Ok(answer);
            case 10:
                var result = _Json_runHelp(decoder.b, value);
                return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
            case 11:
                var errors = _List_Nil;
                for(var temp = decoder.g; temp.b; temp = temp.b){
                    var result = _Json_runHelp(temp.a, value);
                    if ($elm$core$Result$isOk(result)) return result;
                    errors = _List_Cons(result.a, errors);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
                return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
            case 0:
                return $elm$core$Result$Ok(decoder.a);
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for(var i = 0; i < len; i++){
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
            array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
    }
    function _Json_isArray(value) {
        return Array.isArray(value) || typeof FileList !== 'undefined' && value instanceof FileList;
    }
    function _Json_toElmArray(array) {
        return A2($elm$core$Array$initialize, array.length, function(i) {
            return array[i];
        });
    }
    function _Json_expecting(type, value) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
    }
    // EQUALITY
    function _Json_equality(x, y) {
        if (x === y) return true;
        if (x.$ !== y.$) return false;
        switch(x.$){
            case 0:
            case 1:
                return x.a === y.a;
            case 2:
                return x.b === y.b;
            case 5:
                return x.c === y.c;
            case 3:
            case 4:
            case 8:
                return _Json_equality(x.b, y.b);
            case 6:
                return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
                return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
                return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
                return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
                return _Json_listEquality(x.g, y.g);
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) return false;
        for(var i = 0; i < len; i++){
            if (!_Json_equality(aDecoders[i], bDecoders[i])) return false;
        }
        return true;
    }
    // ENCODE
    var _Json_encode = F2(function(indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
    });
    function _Json_wrap(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Json_unwrap(value) {
        return value.a;
    }
    function _Json_wrap_UNUSED(value) {
        return value;
    }
    function _Json_unwrap_UNUSED(value) {
        return value;
    }
    function _Json_emptyArray() {
        return [];
    }
    function _Json_emptyObject() {
        return {
        };
    }
    var _Json_addField = F3(function(key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    });
    function _Json_addEntry(func) {
        return F2(function(entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    // TASKS
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        };
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        };
    }
    var _Scheduler_andThen = F2(function(callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        };
    });
    var _Scheduler_onError = F2(function(callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        };
    });
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        };
    }
    // PROCESSES
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
    }
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send = F2(function(proc, msg) {
        return _Scheduler_binding(function(callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function(callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) task.c();
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    /* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/ var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) return;
        _Scheduler_working = true;
        while(proc = _Scheduler_queue.shift())_Scheduler_step(proc);
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
        while(proc.f){
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
                while(proc.g && proc.g.$ !== rootTag)proc.g = proc.g.i;
                if (!proc.g) return;
                proc.f = proc.g.b(proc.f.a);
                proc.g = proc.g.i;
            } else if (rootTag === 2) {
                proc.f.c = proc.f.b(function(newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc);
                });
                return;
            } else if (rootTag === 5) {
                if (proc.h.length === 0) return;
                proc.f = proc.f.b(proc.h.shift());
            } else {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d;
            }
        }
    }
    function _Process_sleep(time) {
        return _Scheduler_binding(function(callback) {
            var id = setTimeout(function() {
                callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function() {
                clearTimeout(id);
            };
        });
    }
    // PROGRAMS
    var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.init, impl.update, impl.subscriptions, function() {
            return function() {
            };
        });
    });
    // INITIALIZE A PROGRAM
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2 /**/ , _Json_errorToString(result.a));
        var managers = {
        };
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            var pair = A2(update, msg, model);
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? {
            ports: ports
        } : {
        };
    }
    // TRACK PRELOADS
    //
    // This is used by code in elm/browser and elm/http
    // to register any HTTP requests that are triggered by init.
    //
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
    }
    // EFFECT MANAGERS
    var _Platform_effectManagers = {
    };
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        // setup all necessary effect managers
        for(var key in _Platform_effectManagers){
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {
                };
                ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
        };
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
                var value = msg.a;
                if (msg.$ === 0) return A3(onSelfMsg, router, value, state);
                return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
        }
        return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
    }
    // ROUTING
    var _Platform_sendToApp = F2(function(router, msg) {
        return _Scheduler_binding(function(callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    });
    var _Platform_sendToSelf = F2(function(router, msg) {
        return A2(_Scheduler_send, router.h, {
            $: 0,
            a: msg
        });
    });
    // BAGS
    function _Platform_leaf(home) {
        return function(value) {
            return {
                $: 1,
                k: home,
                l: value
            };
        };
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        };
    }
    var _Platform_map = F2(function(tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        };
    });
    // PIPE BAGS INTO EFFECT MANAGERS
    //
    // Effects must be queued!
    //
    // Say your init contains a synchronous command, like Time.now or Time.here
    //
    //   - This will produce a batch of effects (FX_1)
    //   - The synchronous task triggers the subsequent `update` call
    //   - This will produce a batch of effects (FX_2)
    //
    // If we just start dispatching FX_2, subscriptions from FX_2 can be processed
    // before subscriptions from FX_1. No good! Earlier versions of this code had
    // this problem, leading to these reports:
    //
    //   https://github.com/elm/core/issues/980
    //   https://github.com/elm/core/pull/981
    //   https://github.com/elm/compiler/issues/1776
    //
    // The queue is necessary to avoid ordering issues for synchronous commands.
    // Why use true/false here? Why not just check the length of the queue?
    // The goal is to detect "are we currently dispatching effects?" If we
    // are, we need to bail and let the ongoing while loop handle things.
    //
    // Now say the queue has 1 element. When we dequeue the final element,
    // the queue will be empty, but we are still actively dispatching effects.
    // So you could get queue jumping in a really tricky category of cases.
    //
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({
            p: managers,
            q: cmdBag,
            r: subBag
        });
        if (_Platform_effectsActive) return;
        _Platform_effectsActive = true;
        for(var fx; fx = _Platform_effectsQueue.shift();)_Platform_dispatchEffects(fx.p, fx.q, fx.r);
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {
        };
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for(var home in managers)_Scheduler_rawSend(managers[home], {
            $: 'fx',
            a: effectsDict[home] || {
                i: _List_Nil,
                j: _List_Nil
            }
        });
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch(bag.$){
            case 1:
                var home = bag.k;
                var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
                effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
                return;
            case 2:
                for(var list = bag.m; list.b; list = list.b)_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
                return;
            case 3:
                _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                    s: bag.n,
                    t: taggers
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for(var temp = taggers; temp; temp = temp.t)x = temp.s(x);
            return x;
        }
        var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || {
            i: _List_Nil,
            j: _List_Nil
        };
        isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
        return effects;
    }
    // PORTS
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) _Debug_crash(3, name);
    }
    // OUTGOING PORTS
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            u: converter,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap = F2(function(tagger, value) {
        return value;
    });
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
            for(; cmdList.b; cmdList = cmdList.b){
                // grab a separate reference to subs in case unsubscribe is called
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for(var i = 0; i < currentSubs.length; i++)currentSubs[i](value);
            }
            return init;
        });
        // PUBLIC API
        function subscribe(callback) {
            subs.push(callback);
        }
        function unsubscribe(callback) {
            // copy subs into a new array in case unsubscribe is called within a
            // subscribed callback
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) subs.splice(index, 1);
        }
        return {
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };
    }
    // INCOMING PORTS
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            u: converter,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
        return function(value) {
            return tagger(finalTagger(value));
        };
    });
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        // CREATE MANAGER
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, subList, state) {
            subs = subList;
            return init;
        });
        // PUBLIC API
        function send(incomingValue) {
            var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for(var temp = subs; temp.b; temp = temp.b)sendToApp(temp.a(value));
        }
        return {
            send: send
        };
    }
    // EXPORT ELM MODULES
    //
    // Have DEBUG and PROD versions so that we can (1) give nicer errors in
    // debug mode and (2) not pay for the bits needed for that in prod mode.
    //
    function _Platform_export_UNUSED(exports) {
        scope['Elm'] ? _Platform_mergeExportsProd(scope['Elm'], exports) : scope['Elm'] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for(var name in exports)name in obj ? name == 'init' ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports[name]) : obj[name] = exports[name];
    }
    function _Platform_export(exports) {
        scope['Elm'] ? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports) : scope['Elm'] = exports;
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for(var name in exports)name in obj ? name == 'init' ? _Debug_crash(6, moduleName) : _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name]) : obj[name] = exports[name];
    }
    // STRINGS
    var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString) {
        var smallLength = smallString.length;
        var isGood = offset + smallLength <= bigString.length;
        for(var i = 0; isGood && i < smallLength;){
            var code = bigString.charCodeAt(offset);
            isGood = smallString[i++] === bigString[offset++] && (code === 10 /* \n */  ? (row++, col = 1) : (col++, (code & 63488) === 55296 ? smallString[i++] === bigString[offset++] : 1));
        }
        return _Utils_Tuple3(isGood ? offset : -1, row, col);
    });
    // CHARS
    var _Parser_isSubChar = F3(function(predicate, offset, string) {
        return string.length <= offset ? -1 : (string.charCodeAt(offset) & 63488) === 55296 ? predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1 : predicate(_Utils_chr(string[offset])) ? string[offset] === '\n' ? -2 : offset + 1 : -1;
    });
    var _Parser_isAsciiCode = F3(function(code, offset, string) {
        return string.charCodeAt(offset) === code;
    });
    // NUMBERS
    var _Parser_chompBase10 = F2(function(offset, string) {
        for(; offset < string.length; offset++){
            var code = string.charCodeAt(offset);
            if (code < 48 || 57 < code) return offset;
        }
        return offset;
    });
    var _Parser_consumeBase = F3(function(base, offset, string) {
        for(var total = 0; offset < string.length; offset++){
            var digit = string.charCodeAt(offset) - 48;
            if (digit < 0 || base <= digit) break;
            total = base * total + digit;
        }
        return _Utils_Tuple2(offset, total);
    });
    var _Parser_consumeBase16 = F2(function(offset, string) {
        for(var total = 0; offset < string.length; offset++){
            var code = string.charCodeAt(offset);
            if (48 <= code && code <= 57) total = 16 * total + code - 48;
            else if (65 <= code && code <= 70) total = 16 * total + code - 55;
            else if (97 <= code && code <= 102) total = 16 * total + code - 87;
            else break;
        }
        return _Utils_Tuple2(offset, total);
    });
    // FIND STRING
    var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString) {
        var newOffset = bigString.indexOf(smallString, offset);
        var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;
        while(offset < target){
            var code = bigString.charCodeAt(offset++);
            code === 10 /* \n */  ? (col = 1, row++) : (col++, (code & 63488) === 55296 && offset++);
        }
        return _Utils_Tuple3(newOffset, row, col);
    });
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr = F3(function(func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function(node, acc) {
            if (node.$ === 'SubTree') {
                var subTree = node.a;
                return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
            } else {
                var values = node.a;
                return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
            }
        });
        return A3($elm$core$Elm$JsArray$foldr, helper, A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree);
    });
    var $elm$core$Array$toList = function(array) {
        return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Dict$foldr = F3(function(func, acc, t) {
        foldr: while(true){
            if (t.$ === 'RBEmpty_elm_builtin') return acc;
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldr, func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    });
    var $elm$core$Dict$toList = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, list) {
            return A2($elm$core$List$cons, _Utils_Tuple2(key, value), list);
        }), _List_Nil, dict);
    };
    var $elm$core$Dict$keys = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, keyList) {
            return A2($elm$core$List$cons, key, keyList);
        }), _List_Nil, dict);
    };
    var $elm$core$Set$toList = function(_v0) {
        var dict = _v0.a;
        return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Basics$EQ = {
        $: 'EQ'
    };
    var $elm$core$Basics$GT = {
        $: 'GT'
    };
    var $elm$core$Basics$LT = {
        $: 'LT'
    };
    var $elm$core$Result$Err = function(a) {
        return {
            $: 'Err',
            a: a
        };
    };
    var $elm$json$Json$Decode$Failure = F2(function(a, b) {
        return {
            $: 'Failure',
            a: a,
            b: b
        };
    });
    var $elm$json$Json$Decode$Field = F2(function(a, b) {
        return {
            $: 'Field',
            a: a,
            b: b
        };
    });
    var $elm$json$Json$Decode$Index = F2(function(a, b) {
        return {
            $: 'Index',
            a: a,
            b: b
        };
    });
    var $elm$core$Result$Ok = function(a) {
        return {
            $: 'Ok',
            a: a
        };
    };
    var $elm$json$Json$Decode$OneOf = function(a) {
        return {
            $: 'OneOf',
            a: a
        };
    };
    var $elm$core$Basics$False = {
        $: 'False'
    };
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = function(a) {
        return {
            $: 'Just',
            a: a
        };
    };
    var $elm$core$Maybe$Nothing = {
        $: 'Nothing'
    };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join = F2(function(sep, chunks) {
        return A2(_String_join, sep, _List_toArray(chunks));
    });
    var $elm$core$String$split = F2(function(sep, string) {
        return _List_fromArray(A2(_String_split, sep, string));
    });
    var $elm$json$Json$Decode$indent = function(str) {
        return A2($elm$core$String$join, '\n    ', A2($elm$core$String$split, '\n', str));
    };
    var $elm$core$List$foldl = F3(function(func, acc, list) {
        foldl: while(true){
            if (!list.b) return acc;
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    });
    var $elm$core$List$length = function(xs) {
        return A3($elm$core$List$foldl, F2(function(_v0, i) {
            return i + 1;
        }), 0, xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$List$rangeHelp = F3(function(lo, hi, list) {
        rangeHelp: while(true){
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
            } else return list;
        }
    });
    var $elm$core$List$range = F2(function(lo, hi) {
        return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
    });
    var $elm$core$List$indexedMap = F2(function(f, xs) {
        return A3($elm$core$List$map2, f, A2($elm$core$List$range, 0, $elm$core$List$length(xs) - 1), xs);
    });
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return 97 <= code && code <= 122;
    };
    var $elm$core$Char$isUpper = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 90 && 65 <= code;
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 57 && 48 <= code;
    };
    var $elm$core$Char$isAlphaNum = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char);
    };
    var $elm$core$List$reverse = function(list) {
        return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf = F2(function(i, error) {
        return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    });
    var $elm$json$Json$Decode$errorToString = function(error) {
        return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp = F2(function(error, context) {
        errorToStringHelp: while(true)switch(error.$){
            case 'Field':
                var f = error.a;
                var err = error.b;
                var isSimple = function() {
                    var _v1 = $elm$core$String$uncons(f);
                    if (_v1.$ === 'Nothing') return false;
                    else {
                        var _v2 = _v1.a;
                        var _char = _v2.a;
                        var rest = _v2.b;
                        return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
                    }
                }();
                var fieldName = isSimple ? '.' + f : '[\'' + (f + '\']');
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
            case 'Index':
                var i = error.a;
                var err = error.b;
                var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
                var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
            case 'OneOf':
                var errors = error.a;
                if (!errors.b) return 'Ran into a Json.Decode.oneOf with no possibilities' + (function() {
                    if (!context.b) return '!';
                    else return ' at json' + A2($elm$core$String$join, '', $elm$core$List$reverse(context));
                })();
                else if (!errors.b.b) {
                    var err = errors.a;
                    var $temp$error = err, $temp$context = context;
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                } else {
                    var starter = function() {
                        if (!context.b) return 'Json.Decode.oneOf';
                        else return 'The Json.Decode.oneOf at json' + A2($elm$core$String$join, '', $elm$core$List$reverse(context));
                    }();
                    var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt($elm$core$List$length(errors)) + ' ways:'));
                    return A2($elm$core$String$join, '\n\n', A2($elm$core$List$cons, introduction, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
                }
            default:
                var msg = error.a;
                var json = error.b;
                var introduction = function() {
                    if (!context.b) return 'Problem with the given value:\n\n';
                    else return 'Problem with the value at json' + (A2($elm$core$String$join, '', $elm$core$List$reverse(context)) + ':\n\n    ');
                }();
                return introduction + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
        }
    });
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin = F4(function(a, b, c, d) {
        return {
            $: 'Array_elm_builtin',
            a: a,
            b: b,
            c: c,
            d: d
        };
    });
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase = F2(function(base, number) {
        return _Basics_log(number) / _Basics_log(base);
    });
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function(a) {
        return {
            $: 'Leaf',
            a: a
        };
    };
    var $elm$core$Basics$apL = F2(function(f, x) {
        return f(x);
    });
    var $elm$core$Basics$apR = F2(function(x, f) {
        return f(x);
    });
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max = F2(function(x, y) {
        return _Utils_cmp(x, y) > 0 ? x : y;
    });
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = function(a) {
        return {
            $: 'SubTree',
            a: a
        };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes = F2(function(nodes, acc) {
        compressNodes: while(true){
            var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = A2($elm$core$List$cons, $elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) return $elm$core$List$reverse(newAcc);
            else {
                var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes;
            }
        }
    });
    var $elm$core$Tuple$first = function(_v0) {
        var x = _v0.a;
        return x;
    };
    var $elm$core$Array$treeFromBuilder = F2(function(nodeList, nodeListSize) {
        treeFromBuilder: while(true){
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
            else {
                var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
            }
        }
    });
    var $elm$core$Array$builderToArray = F2(function(reverseNodeList, builder) {
        if (!builder.nodeListSize) return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.tail);
        else {
            var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
            var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
            return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.tail) + treeLen, A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep), tree, builder.tail);
        }
    });
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp = F5(function(fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while(true){
            if (fromIndex < 0) return A2($elm$core$Array$builderToArray, false, {
                nodeList: nodeList,
                nodeListSize: len / $elm$core$Array$branchFactor | 0,
                tail: tail
            });
            else {
                var leaf = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
            }
        }
    });
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize = F2(function(len, fn) {
        if (len <= 0) return $elm$core$Array$empty;
        else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
            var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
            return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
        }
    });
    var $elm$core$Basics$True = {
        $: 'True'
    };
    var $elm$core$Result$isOk = function(result) {
        if (result.$ === 'Ok') return true;
        else return false;
    };
    var $elm$json$Json$Decode$andThen = _Json_andThen;
    var $elm$json$Json$Decode$field = _Json_decodeField;
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $author$project$Data$IO$pure = function(model) {
        return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
    };
    var $author$project$Main$init = function(flags) {
        return $author$project$Data$IO$pure({
            stdlib: flags.stdlib
        });
    };
    var $elm$json$Json$Decode$list = _Json_decodeList;
    var $elm$json$Json$Decode$string = _Json_decodeString;
    var $author$project$Main$None = {
        $: 'None'
    };
    var $elm$core$Platform$Sub$batch = _Platform_batch;
    var $elm$core$Basics$composeR = F3(function(f, g, x) {
        return g(f(x));
    });
    var $elm$json$Json$Decode$decodeValue = _Json_run;
    var $elm$json$Json$Decode$value = _Json_decodeValue;
    var $author$project$Main$fromFs = _Platform_incomingPort('fromFs', $elm$json$Json$Decode$value);
    var $author$project$Main$GotProject = function(a) {
        return {
            $: 'GotProject',
            a: a
        };
    };
    var $elm$core$Dict$RBEmpty_elm_builtin = {
        $: 'RBEmpty_elm_builtin'
    };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm$core$Dict$Black = {
        $: 'Black'
    };
    var $elm$core$Dict$RBNode_elm_builtin = F5(function(a, b, c, d, e) {
        return {
            $: 'RBNode_elm_builtin',
            a: a,
            b: b,
            c: c,
            d: d,
            e: e
        };
    });
    var $elm$core$Dict$Red = {
        $: 'Red'
    };
    var $elm$core$Dict$balance = F5(function(color, key, value, left, right) {
        if (right.$ === 'RBNode_elm_builtin' && right.a.$ === 'Red') {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if (left.$ === 'RBNode_elm_builtin' && left.a.$ === 'Red') {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color, rK, rV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft), rRight);
        } else {
            if (left.$ === 'RBNode_elm_builtin' && left.a.$ === 'Red' && left.d.$ === 'RBNode_elm_builtin' && left.d.a.$ === 'Red') {
                var _v5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _v6 = left.d;
                var _v7 = _v6.a;
                var llK = _v6.b;
                var llV = _v6.c;
                var llLeft = _v6.d;
                var llRight = _v6.e;
                var lRight = left.e;
                return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight), A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
            } else return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
        }
    });
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$insertHelp = F3(function(key, value, dict) {
        if (dict.$ === 'RBEmpty_elm_builtin') return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = A2($elm$core$Basics$compare, key, nKey);
            switch(_v1.$){
                case 'LT':
                    return A5($elm$core$Dict$balance, nColor, nKey, nValue, A3($elm$core$Dict$insertHelp, key, value, nLeft), nRight);
                case 'EQ':
                    return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
                default:
                    return A5($elm$core$Dict$balance, nColor, nKey, nValue, nLeft, A3($elm$core$Dict$insertHelp, key, value, nRight));
            }
        }
    });
    var $elm$core$Dict$insert = F3(function(key, value, dict) {
        var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
        if (_v0.$ === 'RBNode_elm_builtin' && _v0.a.$ === 'Red') {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
        } else {
            var x = _v0;
            return x;
        }
    });
    var $elm$core$Dict$fromList = function(assocs) {
        return A3($elm$core$List$foldl, F2(function(_v0, dict) {
            var key = _v0.a;
            var value = _v0.b;
            return A3($elm$core$Dict$insert, key, value, dict);
        }), $elm$core$Dict$empty, assocs);
    };
    var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$json$Json$Decode$dict = function(decoder) {
        return A2($elm$json$Json$Decode$map, $elm$core$Dict$fromList, $elm$json$Json$Decode$keyValuePairs(decoder));
    };
    var $elm$json$Json$Decode$fail = _Json_fail;
    var $author$project$Main$fromFsDecoder = A2($elm$json$Json$Decode$andThen, function(tag) {
        if (tag === 'GotProject') return A2($elm$json$Json$Decode$map, $author$project$Main$GotProject, A2($elm$json$Json$Decode$field, '0', $elm$json$Json$Decode$dict($elm$json$Json$Decode$string)));
        else return $elm$json$Json$Decode$fail('');
    }, A2($elm$json$Json$Decode$field, '$', $elm$json$Json$Decode$string));
    var $elm$core$Result$withDefault = F2(function(def, result) {
        if (result.$ === 'Ok') {
            var a = result.a;
            return a;
        } else return def;
    });
    var $author$project$Main$subscriptions = function(_v0) {
        return $elm$core$Platform$Sub$batch(_List_fromArray([
            $author$project$Main$fromFs(A2($elm$core$Basics$composeR, $elm$json$Json$Decode$decodeValue($author$project$Main$fromFsDecoder), $elm$core$Result$withDefault($author$project$Main$None)))
        ]));
    };
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $ren_lang$compiler$Ren$Language$Import = F3(function(path, name, bindings) {
        return {
            bindings: bindings,
            name: name,
            path: path
        };
    });
    var $elm$core$List$any = F2(function(isOkay, list) {
        any: while(true){
            if (!list.b) return false;
            else {
                var x = list.a;
                var xs = list.b;
                if (isOkay(x)) return true;
                else {
                    var $temp$isOkay = isOkay, $temp$list = xs;
                    isOkay = $temp$isOkay;
                    list = $temp$list;
                    continue any;
                }
            }
        }
    });
    var $elm$core$List$foldrHelper = F4(function(fn, acc, ctr, ls) {
        if (!ls.b) return acc;
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) return A2(fn, a, acc);
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) return A2(fn, a, A2(fn, b, acc));
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = ctr > 500 ? A3($elm$core$List$foldl, fn, acc, $elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
                    }
                }
            }
        }
    });
    var $elm$core$List$foldr = F3(function(fn, acc, ls) {
        return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
    });
    var $elm$core$List$filter = F2(function(isGood, list) {
        return A3($elm$core$List$foldr, F2(function(x, xs) {
            return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
        }), _List_Nil, list);
    });
    var $elm$core$Basics$not = _Basics_not;
    var $author$project$Main$addStdlib = function(_v0) {
        var imports = _v0.imports;
        var declarations = _v0.declarations;
        var stdlib = _List_fromArray([
            A3($ren_lang$compiler$Ren$Language$Import, 'ren/array', _List_fromArray([
                'Array'
            ]), _List_Nil),
            A3($ren_lang$compiler$Ren$Language$Import, 'ren/compare', _List_fromArray([
                'Compare'
            ]), _List_Nil),
            A3($ren_lang$compiler$Ren$Language$Import, 'ren/function', _List_fromArray([
                'Function'
            ]), _List_Nil),
            A3($ren_lang$compiler$Ren$Language$Import, 'ren/logic', _List_fromArray([
                'Logic'
            ]), _List_Nil),
            A3($ren_lang$compiler$Ren$Language$Import, 'ren/math', _List_fromArray([
                'Math'
            ]), _List_Nil),
            A3($ren_lang$compiler$Ren$Language$Import, 'ren/maybe', _List_fromArray([
                'Maybe'
            ]), _List_Nil),
            A3($ren_lang$compiler$Ren$Language$Import, 'ren/object', _List_fromArray([
                'Object'
            ]), _List_Nil),
            A3($ren_lang$compiler$Ren$Language$Import, 'ren/promise', _List_fromArray([
                'Promise'
            ]), _List_Nil),
            A3($ren_lang$compiler$Ren$Language$Import, 'ren/string', _List_fromArray([
                'String'
            ]), _List_Nil)
        ]);
        return {
            declarations: declarations,
            imports: _Utils_ap(imports, A2($elm$core$List$filter, function(_v1) {
                var name = _v1.name;
                return !A2($elm$core$List$any, A2($elm$core$Basics$composeR, function($) {
                    return $.name;
                }, $elm$core$Basics$eq(name)), imports);
            }, stdlib))
        };
    };
    var $author$project$Data$Project$fromFiles = function(files) {
        return {
            files: files
        };
    };
    var $elm$core$Basics$always = F2(function(a, _v0) {
        return a;
    });
    var $elm$core$Dict$map = F2(function(func, dict) {
        if (dict.$ === 'RBEmpty_elm_builtin') return $elm$core$Dict$RBEmpty_elm_builtin;
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, color, key, A2(func, key, value), A2($elm$core$Dict$map, func, left), A2($elm$core$Dict$map, func, right));
        }
    });
    var $author$project$Data$Project$map = F2(function(f, project) {
        return {
            files: A2($elm$core$Dict$map, $elm$core$Basics$always(f), project.files)
        };
    });
    var $elm$core$Result$map = F2(function(func, ra) {
        if (ra.$ === 'Ok') {
            var a = ra.a;
            return $elm$core$Result$Ok(func(a));
        } else {
            var e = ra.a;
            return $elm$core$Result$Err(e);
        }
    });
    var $ren_lang$compiler$Ren$Language$Public = {
        $: 'Public'
    };
    var $ren_lang$compiler$Ren$Language$ArrayDestructure = function(a) {
        return {
            $: 'ArrayDestructure',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Name = function(a) {
        return {
            $: 'Name',
            a: a
        };
    };
    var $elm$core$List$map = F2(function(f, xs) {
        return A3($elm$core$List$foldr, F2(function(x, acc) {
            return A2($elm$core$List$cons, f(x), acc);
        }), _List_Nil, xs);
    });
    var $ren_lang$compiler$Ren$Language$Declaration$nameAsPattern = function(declaration) {
        switch(declaration.$){
            case 'Function':
                var name = declaration.a;
                return $ren_lang$compiler$Ren$Language$Name(name);
            case 'Variable':
                var name = declaration.a;
                return name;
            default:
                var variants = declaration.b;
                return $ren_lang$compiler$Ren$Language$ArrayDestructure(A2($elm$core$List$map, function(_v1) {
                    var tag = _v1.a;
                    return $ren_lang$compiler$Ren$Language$Name(tag);
                }, variants));
        }
    };
    var $elm$core$List$append = F2(function(xs, ys) {
        if (!ys.b) return xs;
        else return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
    });
    var $elm$core$List$concat = function(lists) {
        return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
    };
    var $elm$core$List$concatMap = F2(function(f, list) {
        return $elm$core$List$concat(A2($elm$core$List$map, f, list));
    });
    var $elm$core$Maybe$map = F2(function(f, maybe) {
        if (maybe.$ === 'Just') {
            var value = maybe.a;
            return $elm$core$Maybe$Just(f(value));
        } else return $elm$core$Maybe$Nothing;
    });
    var $elm$core$Maybe$withDefault = F2(function(_default, maybe) {
        if (maybe.$ === 'Just') {
            var value = maybe.a;
            return value;
        } else return _default;
    });
    var $ren_lang$compiler$Ren$Language$Pattern$names = function(pattern) {
        switch(pattern.$){
            case 'ArrayDestructure':
                var elements = pattern.a;
                return A2($elm$core$List$concatMap, $ren_lang$compiler$Ren$Language$Pattern$names, elements);
            case 'Name':
                var name = pattern.a;
                return _List_fromArray([
                    name
                ]);
            case 'ObjectDestructure':
                var entries = pattern.a;
                return A2($elm$core$List$concatMap, function(_v1) {
                    var k = _v1.a;
                    var p = _v1.b;
                    return A2($elm$core$Maybe$withDefault, _List_fromArray([
                        k
                    ]), A2($elm$core$Maybe$map, $ren_lang$compiler$Ren$Language$Pattern$names, p));
                }, entries);
            case 'Value':
                return _List_Nil;
            case 'VariantDestructure':
                var tag = pattern.a;
                var patterns = pattern.b;
                return A2($elm$core$List$cons, tag, A2($elm$core$List$concatMap, $ren_lang$compiler$Ren$Language$Pattern$names, patterns));
            case 'Typeof':
                var name = pattern.b;
                return _List_fromArray([
                    name
                ]);
            default:
                return _List_Nil;
        }
    };
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $elm$core$Dict$values = function(dict) {
        return A3($elm$core$Dict$foldr, F3(function(key, value, valueList) {
            return A2($elm$core$List$cons, value, valueList);
        }), _List_Nil, dict);
    };
    var $ren_lang$compiler$Ren$Language$Expression$references = F2(function(name, expression) {
        references: while(true)switch(expression.$){
            case 'Access':
                var expr = expression.a;
                var accessors = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr) || A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesInAccessor(name), accessors);
            case 'Application':
                var expr = expression.a;
                var args = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr) || A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$references(name), args);
            case 'Block':
                var bindings = expression.a;
                var expr = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr) || A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesInBinding(name), bindings);
            case 'Conditional':
                var condition = expression.a;
                var _true = expression.b;
                var _false = expression.c;
                return A2($ren_lang$compiler$Ren$Language$Expression$references, name, condition) || A2($ren_lang$compiler$Ren$Language$Expression$references, name, _true) || A2($ren_lang$compiler$Ren$Language$Expression$references, name, _false);
            case 'Identifier':
                switch(expression.a.$){
                    case 'Local':
                        var n = expression.a.a;
                        return _Utils_eq(name, n);
                    case 'Constructor':
                        var n = expression.a.a;
                        return _Utils_eq(name, n);
                    default:
                        return false;
                }
            case 'Infix':
                var lhs = expression.b;
                var rhs = expression.c;
                return A2($ren_lang$compiler$Ren$Language$Expression$references, name, lhs) || A2($ren_lang$compiler$Ren$Language$Expression$references, name, rhs);
            case 'Lambda':
                var expr = expression.b;
                var $temp$name = name, $temp$expression = expr;
                name = $temp$name;
                expression = $temp$expression;
                continue references;
            case 'Literal':
                switch(expression.a.$){
                    case 'Array':
                        var elements = expression.a.a;
                        return A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$references(name), elements);
                    case 'Object':
                        var entries = expression.a.a;
                        return A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$references(name), $elm$core$Dict$values(entries));
                    case 'Template':
                        var segments = expression.a.a;
                        return A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesInTemplate(name), segments);
                    default:
                        return false;
                }
            default:
                var expr = expression.a;
                var cases = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr) || A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesInCase(name), cases);
        }
    });
    var $ren_lang$compiler$Ren$Language$Expression$referencesInAccessor = F2(function(name, accessor) {
        if (accessor.$ === 'Computed') {
            var expr = accessor.a;
            return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr);
        } else return false;
    });
    var $ren_lang$compiler$Ren$Language$Expression$referencesInBinding = F2(function(name, binding) {
        switch(binding.$){
            case 'Function':
                var expr = binding.c;
                return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr);
            case 'Variable':
                var expr = binding.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr);
            default:
                return false;
        }
    });
    var $ren_lang$compiler$Ren$Language$Expression$referencesInCase = F2(function(name, _v1) {
        var guard = _v1.b;
        var expr = _v1.c;
        return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr) || A2($elm$core$Maybe$withDefault, false, A2($elm$core$Maybe$map, $ren_lang$compiler$Ren$Language$Expression$references(name), guard));
    });
    var $ren_lang$compiler$Ren$Language$Expression$referencesInTemplate = F2(function(name, segment) {
        if (segment.$ === 'Text') return false;
        else {
            var expr = segment.a;
            return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr);
        }
    });
    var $ren_lang$compiler$Ren$Language$Declaration$references = F2(function(name, declaration) {
        switch(declaration.$){
            case 'Function':
                var expr = declaration.c;
                return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr);
            case 'Variable':
                var expr = declaration.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$references, name, expr);
            default:
                return false;
        }
    });
    var $elm$core$Tuple$second = function(_v0) {
        var y = _v0.b;
        return y;
    };
    var $ren_lang$compiler$Ren$Compiler$Optimise$isDeclarationUsed = F2(function(declarations, _v0) {
        var visibility = _v0.a;
        var declaration = _v0.b;
        if (_Utils_eq(visibility, $ren_lang$compiler$Ren$Language$Public)) return true;
        else {
            var name = $ren_lang$compiler$Ren$Language$Declaration$nameAsPattern(declaration);
            var names = $ren_lang$compiler$Ren$Language$Pattern$names(name);
            var referencesAny = function(d) {
                return A2($elm$core$List$any, function(n) {
                    return A2($ren_lang$compiler$Ren$Language$Declaration$references, n, d);
                }, names);
            };
            return A2($elm$core$List$any, A2($elm$core$Basics$composeR, $elm$core$Tuple$second, referencesAny), A2($elm$core$List$filter, A2($elm$core$Basics$composeR, $elm$core$Tuple$second, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Declaration$nameAsPattern, $elm$core$Basics$neq(name))), declarations));
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Optimise$removeUnusedDeclarations = function(m) {
        return (function(declarations) {
            return _Utils_eq(declarations, m.declarations) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(_Utils_update(m, {
                declarations: declarations
            }));
        })(A2($elm$core$List$filter, $ren_lang$compiler$Ren$Compiler$Optimise$isDeclarationUsed(m.declarations), m.declarations));
    };
    var $ren_lang$compiler$Ren$Compiler$Optimise$removeUnusedBindings = F2(function(declarations, _v0) {
        var path = _v0.path;
        var name = _v0.name;
        var bindings = _v0.bindings;
        return {
            bindings: A2($elm$core$List$filter, function(binding) {
                return A2($elm$core$List$any, function(_v1) {
                    var declaration = _v1.b;
                    return A2($ren_lang$compiler$Ren$Language$Declaration$references, binding, declaration);
                }, declarations);
            }, bindings),
            name: name,
            path: path
        };
    });
    var $ren_lang$compiler$Ren$Compiler$Optimise$removeUnusedImportBindings = function(m) {
        return (function(imports) {
            return _Utils_eq(imports, m.imports) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(_Utils_update(m, {
                imports: imports
            }));
        })(A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Optimise$removeUnusedBindings(m.declarations), m.imports));
    };
    var $ren_lang$compiler$Ren$Language$Expression$referencesNamespace = F2(function(namespace, expression) {
        referencesNamespace: while(true)switch(expression.$){
            case 'Access':
                var expr = expression.a;
                var accessors = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr) || A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesNamespaceInAccessor(namespace), accessors);
            case 'Application':
                var expr = expression.a;
                var args = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr) || A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesNamespace(namespace), args);
            case 'Block':
                var bindings = expression.a;
                var expr = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr) || A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesNamespaceInBinding(namespace), bindings);
            case 'Conditional':
                var condition = expression.a;
                var _true = expression.b;
                var _false = expression.c;
                return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, condition) || A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, _true) || A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, _false);
            case 'Identifier':
                if (expression.a.$ === 'Scoped') {
                    var _v5 = expression.a;
                    var ns = _v5.a;
                    return _Utils_eq(namespace, ns);
                } else return false;
            case 'Infix':
                var lhs = expression.b;
                var rhs = expression.c;
                return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, lhs) || A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, rhs);
            case 'Lambda':
                var expr = expression.b;
                var $temp$namespace = namespace, $temp$expression = expr;
                namespace = $temp$namespace;
                expression = $temp$expression;
                continue referencesNamespace;
            case 'Literal':
                switch(expression.a.$){
                    case 'Array':
                        var elements = expression.a.a;
                        return A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesNamespace(namespace), elements);
                    case 'Object':
                        var entries = expression.a.a;
                        return A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesNamespace(namespace), $elm$core$Dict$values(entries));
                    case 'Template':
                        var segments = expression.a.a;
                        return A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesNamespaceInTemplate(namespace), segments);
                    default:
                        return false;
                }
            default:
                var expr = expression.a;
                var cases = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr) || A2($elm$core$List$any, $ren_lang$compiler$Ren$Language$Expression$referencesNamespaceInCase(namespace), cases);
        }
    });
    var $ren_lang$compiler$Ren$Language$Expression$referencesNamespaceInAccessor = F2(function(namespace, accessor) {
        if (accessor.$ === 'Computed') {
            var expr = accessor.a;
            return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr);
        } else return false;
    });
    var $ren_lang$compiler$Ren$Language$Expression$referencesNamespaceInBinding = F2(function(namespace, binding) {
        switch(binding.$){
            case 'Function':
                var expr = binding.c;
                return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr);
            case 'Variable':
                var expr = binding.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr);
            default:
                return false;
        }
    });
    var $ren_lang$compiler$Ren$Language$Expression$referencesNamespaceInCase = F2(function(namespace, _v1) {
        var guard = _v1.b;
        var expr = _v1.c;
        return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr) || A2($elm$core$Maybe$withDefault, false, A2($elm$core$Maybe$map, $ren_lang$compiler$Ren$Language$Expression$referencesNamespace(namespace), guard));
    });
    var $ren_lang$compiler$Ren$Language$Expression$referencesNamespaceInTemplate = F2(function(namespace, segment) {
        if (segment.$ === 'Text') return false;
        else {
            var expr = segment.a;
            return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr);
        }
    });
    var $ren_lang$compiler$Ren$Language$Declaration$referencesNamespace = F2(function(namespace, declaration) {
        switch(declaration.$){
            case 'Function':
                var expr = declaration.c;
                return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr);
            case 'Variable':
                var expr = declaration.b;
                return A2($ren_lang$compiler$Ren$Language$Expression$referencesNamespace, namespace, expr);
            default:
                return false;
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Optimise$isImportUsed = F2(function(declarations, _v0) {
        var name = _v0.name;
        var bindings = _v0.bindings;
        return A2($elm$core$List$any, function(_v1) {
            var declaration = _v1.b;
            return A2($ren_lang$compiler$Ren$Language$Declaration$referencesNamespace, name, declaration) || A2($elm$core$List$any, function(binding) {
                return A2($ren_lang$compiler$Ren$Language$Declaration$references, binding, declaration);
            }, bindings);
        }, declarations);
    });
    var $ren_lang$compiler$Ren$Compiler$Optimise$removeUnusedImports = function(m) {
        return (function(imports) {
            return _Utils_eq(imports, m.imports) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(_Utils_update(m, {
                imports: imports
            }));
        })(A2($elm$core$List$filter, $ren_lang$compiler$Ren$Compiler$Optimise$isImportUsed(m.declarations), m.imports));
    };
    var $elm$core$Tuple$mapSecond = F2(function(func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(x, func(y));
    });
    var $ren_lang$compiler$Ren$Language$Access = F2(function(a, b) {
        return {
            $: 'Access',
            a: a,
            b: b
        };
    });
    var $ren_lang$compiler$Ren$Language$Application = F2(function(a, b) {
        return {
            $: 'Application',
            a: a,
            b: b
        };
    });
    var $ren_lang$compiler$Ren$Language$Array = function(a) {
        return {
            $: 'Array',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Boolean = function(a) {
        return {
            $: 'Boolean',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Fixed = function(a) {
        return {
            $: 'Fixed',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Identifier = function(a) {
        return {
            $: 'Identifier',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Literal = function(a) {
        return {
            $: 'Literal',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Number = function(a) {
        return {
            $: 'Number',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$String = function(a) {
        return {
            $: 'String',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Template = function(a) {
        return {
            $: 'Template',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Text = function(a) {
        return {
            $: 'Text',
            a: a
        };
    };
    var $elm$core$Maybe$andThen = F2(function(callback, maybeValue) {
        if (maybeValue.$ === 'Just') {
            var value = maybeValue.a;
            return callback(value);
        } else return $elm$core$Maybe$Nothing;
    });
    var $elm$core$List$drop = F2(function(n, list) {
        drop: while(true){
            if (n <= 0) return list;
            else {
                if (!list.b) return list;
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs;
                    n = $temp$n;
                    list = $temp$list;
                    continue drop;
                }
            }
        }
    });
    var $elm$core$List$head = function(list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(x);
        } else return $elm$core$Maybe$Nothing;
    };
    var $ren_lang$compiler$List$Extra$at = F2(function(idx, xs) {
        return idx < 0 ? $elm$core$Maybe$Nothing : $elm$core$List$head(A2($elm$core$List$drop, idx, xs));
    });
    var $ren_lang$compiler$Basics$Extra$toInt = function(x) {
        var y = $elm$core$Basics$floor(x);
        return _Utils_eq(y, x) ? $elm$core$Maybe$Just(y) : $elm$core$Maybe$Nothing;
    };
    var $elm$core$String$toInt = _String_toInt;
    var $ren_lang$compiler$Ren$Language$Expression$coerceToInteger = function(literal) {
        switch(literal.$){
            case 'Array':
                return $elm$core$Maybe$Nothing;
            case 'Boolean':
                if (literal.a) return $elm$core$Maybe$Just(1);
                else return $elm$core$Maybe$Just(0);
            case 'Number':
                var n = literal.a;
                return $ren_lang$compiler$Basics$Extra$toInt(n);
            case 'Object':
                return $elm$core$Maybe$Nothing;
            case 'String':
                var s = literal.a;
                return $elm$core$String$toInt(s);
            case 'Template':
                return $elm$core$Maybe$Nothing;
            default:
                return $elm$core$Maybe$Just(0);
        }
    };
    var $elm$core$String$toFloat = _String_toFloat;
    var $ren_lang$compiler$Ren$Language$Expression$coerceToNumber = function(literal) {
        switch(literal.$){
            case 'Array':
                return $elm$core$Maybe$Nothing;
            case 'Boolean':
                if (literal.a) return $elm$core$Maybe$Just(1);
                else return $elm$core$Maybe$Just(0);
            case 'Number':
                var n = literal.a;
                return $elm$core$Maybe$Just(n);
            case 'Object':
                return $elm$core$Maybe$Nothing;
            case 'String':
                var s = literal.a;
                return $elm$core$String$toFloat(s);
            case 'Template':
                return $elm$core$Maybe$Nothing;
            default:
                return $elm$core$Maybe$Just(0);
        }
    };
    var $elm$core$String$fromFloat = _String_fromNumber;
    var $elm$core$Maybe$map2 = F3(function(func, ma, mb) {
        if (ma.$ === 'Nothing') return $elm$core$Maybe$Nothing;
        else {
            var a = ma.a;
            if (mb.$ === 'Nothing') return $elm$core$Maybe$Nothing;
            else {
                var b = mb.a;
                return $elm$core$Maybe$Just(A2(func, a, b));
            }
        }
    });
    var $ren_lang$compiler$Ren$Language$Expression$coerceToString = function(literal) {
        switch(literal.$){
            case 'Array':
                return $elm$core$Maybe$Nothing;
            case 'Boolean':
                if (literal.a) return $elm$core$Maybe$Just('true');
                else return $elm$core$Maybe$Just('false');
            case 'Number':
                var n = literal.a;
                return $elm$core$Maybe$Just($elm$core$String$fromFloat(n));
            case 'Object':
                return $elm$core$Maybe$Nothing;
            case 'String':
                var s1 = literal.a;
                return $elm$core$Maybe$Just(s1);
            case 'Template':
                var segments = literal.a;
                return A3($elm$core$List$foldr, F2(function(segment, s) {
                    if (segment.$ === 'Expr') {
                        if (segment.a.$ === 'Literal') {
                            var lit = segment.a.a;
                            return A3($elm$core$Maybe$map2, $elm$core$Basics$append, $ren_lang$compiler$Ren$Language$Expression$coerceToString(lit), s);
                        } else return $elm$core$Maybe$Nothing;
                    } else {
                        var text = segment.a;
                        return A2($elm$core$Maybe$map, $elm$core$Basics$append(text), s);
                    }
                }), $elm$core$Maybe$Just(''), segments);
            default:
                return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$core$Basics$ge = _Utils_ge;
    var $elm$core$Dict$get = F2(function(targetKey, dict) {
        get: while(true){
            if (dict.$ === 'RBEmpty_elm_builtin') return $elm$core$Maybe$Nothing;
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = A2($elm$core$Basics$compare, targetKey, key);
                switch(_v1.$){
                    case 'LT':
                        var $temp$targetKey = targetKey, $temp$dict = left;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                    case 'EQ':
                        return $elm$core$Maybe$Just(value);
                    default:
                        var $temp$targetKey = targetKey, $temp$dict = right;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                }
            }
        }
    });
    var $elm$core$Basics$identity = function(x) {
        return x;
    };
    var $ren_lang$compiler$Maybe$Extra$or = F2(function(b, a) {
        return _Utils_eq(a, $elm$core$Maybe$Nothing) ? b : a;
    });
    var $elm$core$Basics$pow = _Basics_pow;
    var $ren_lang$compiler$Ren$Compiler$Optimise$constantFold = function(expression) {
        _v0$14: while(true){
            _v0$18: while(true){
                _v0$39: while(true)switch(expression.$){
                    case 'Access':
                        if (expression.a.$ === 'Literal' && expression.b.b) {
                            if (expression.b.a.$ === 'Fixed') {
                                if (expression.a.a.$ === 'Object') {
                                    if (!expression.b.b.b) {
                                        var fields = expression.a.a.a;
                                        var _v3 = expression.b;
                                        var key = _v3.a.a;
                                        return A2($elm$core$Dict$get, key, fields);
                                    } else {
                                        var fields = expression.a.a.a;
                                        var _v4 = expression.b;
                                        var key = _v4.a.a;
                                        var accessors = _v4.b;
                                        return A2($elm$core$Maybe$map, function(obj) {
                                            return A2($ren_lang$compiler$Ren$Language$Access, obj, accessors);
                                        }, A2($elm$core$Dict$get, key, fields));
                                    }
                                } else break _v0$39;
                            } else {
                                if (expression.b.a.a.$ === 'Literal') switch(expression.a.a.$){
                                    case 'Array':
                                        if (!expression.b.b.b) {
                                            var elements = expression.a.a.a;
                                            var _v1 = expression.b;
                                            var n = _v1.a.a.a;
                                            return A2($elm$core$Maybe$andThen, function(i) {
                                                return A2($ren_lang$compiler$List$Extra$at, i, elements);
                                            }, $ren_lang$compiler$Ren$Language$Expression$coerceToInteger(n));
                                        } else {
                                            var elements = expression.a.a.a;
                                            var _v2 = expression.b;
                                            var n = _v2.a.a.a;
                                            var accessors = _v2.b;
                                            return A2($elm$core$Maybe$map, function(arr) {
                                                return A2($ren_lang$compiler$Ren$Language$Access, arr, accessors);
                                            }, A2($elm$core$Maybe$andThen, function(i) {
                                                return A2($ren_lang$compiler$List$Extra$at, i, elements);
                                            }, $ren_lang$compiler$Ren$Language$Expression$coerceToInteger(n)));
                                        }
                                    case 'Object':
                                        if (!expression.b.b.b) {
                                            var fields = expression.a.a.a;
                                            var _v5 = expression.b;
                                            var s = _v5.a.a.a;
                                            return A2($elm$core$Maybe$andThen, $elm$core$Basics$identity, A3($elm$core$Maybe$map2, $elm$core$Dict$get, $ren_lang$compiler$Ren$Language$Expression$coerceToString(s), $elm$core$Maybe$Just(fields)));
                                        } else {
                                            var fields = expression.a.a.a;
                                            var _v6 = expression.b;
                                            var s = _v6.a.a.a;
                                            var accessors = _v6.b;
                                            return A2($elm$core$Maybe$map, function(obj) {
                                                return A2($ren_lang$compiler$Ren$Language$Access, obj, accessors);
                                            }, A2($elm$core$Maybe$andThen, $elm$core$Basics$identity, A3($elm$core$Maybe$map2, $elm$core$Dict$get, $ren_lang$compiler$Ren$Language$Expression$coerceToString(s), $elm$core$Maybe$Just(fields))));
                                        }
                                    default:
                                        break _v0$39;
                                }
                                else break _v0$39;
                            }
                        } else break _v0$39;
                    case 'Application':
                        if (expression.a.$ === 'Identifier' && expression.a.a.$ === 'Field' && expression.b.b && !expression.b.b.b) switch(expression.b.a.$){
                            case 'Identifier':
                                var key = expression.a.a.a;
                                var _v7 = expression.b;
                                var id = _v7.a.a;
                                return $elm$core$Maybe$Just(A2($ren_lang$compiler$Ren$Language$Access, $ren_lang$compiler$Ren$Language$Identifier(id), _List_fromArray([
                                    $ren_lang$compiler$Ren$Language$Fixed(key)
                                ])));
                            case 'Literal':
                                var key = expression.a.a.a;
                                var _v8 = expression.b;
                                var obj1 = _v8.a.a;
                                return $elm$core$Maybe$Just(A2($ren_lang$compiler$Ren$Language$Access, $ren_lang$compiler$Ren$Language$Literal(obj1), _List_fromArray([
                                    $ren_lang$compiler$Ren$Language$Fixed(key)
                                ])));
                            default:
                                break _v0$39;
                        }
                        else break _v0$39;
                    case 'Block':
                        if (!expression.a.b) {
                            var expr = expression.b;
                            return $elm$core$Maybe$Just(expr);
                        } else break _v0$39;
                    case 'Conditional':
                        if (expression.a.$ === 'Literal' && expression.a.a.$ === 'Boolean') {
                            if (expression.a.a.a) {
                                var _true = expression.b;
                                return $elm$core$Maybe$Just(_true);
                            } else {
                                var _false = expression.c;
                                return $elm$core$Maybe$Just(_false);
                            }
                        } else break _v0$39;
                    case 'Infix':
                        switch(expression.c.$){
                            case 'Application':
                                if (expression.a.$ === 'Pipe') {
                                    var _v9 = expression.a;
                                    var lhs = expression.b;
                                    var _v10 = expression.c;
                                    var f = _v10.a;
                                    var args = _v10.b;
                                    return $elm$core$Maybe$Just(A2($ren_lang$compiler$Ren$Language$Application, f, _Utils_ap(args, _List_fromArray([
                                        lhs
                                    ]))));
                                } else break _v0$39;
                            case 'Identifier':
                                switch(expression.a.$){
                                    case 'Pipe':
                                        var _v11 = expression.a;
                                        var lhs = expression.b;
                                        var id = expression.c.a;
                                        return $elm$core$Maybe$Just(A2($ren_lang$compiler$Ren$Language$Application, $ren_lang$compiler$Ren$Language$Identifier(id), _List_fromArray([
                                            lhs
                                        ])));
                                    case 'Eq':
                                        if (expression.b.$ === 'Identifier') {
                                            var _v23 = expression.a;
                                            var a1 = expression.b.a;
                                            var b1 = expression.c.a;
                                            return _Utils_eq(a1, b1) ? $elm$core$Maybe$Just($ren_lang$compiler$Ren$Language$Literal($ren_lang$compiler$Ren$Language$Boolean(true))) : $elm$core$Maybe$Nothing;
                                        } else break _v0$39;
                                    case 'NotEq':
                                        if (expression.b.$ === 'Identifier') {
                                            var _v25 = expression.a;
                                            var a1 = expression.b.a;
                                            var b1 = expression.c.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(!_Utils_eq(a1, b1)));
                                        } else break _v0$39;
                                    default:
                                        break _v0$39;
                                }
                            case 'Literal':
                                switch(expression.a.$){
                                    case 'Add':
                                        if (expression.b.$ === 'Literal') switch(expression.b.a.$){
                                            case 'Number':
                                                var _v12 = expression.a;
                                                var x = expression.b.a.a;
                                                var y = expression.c.a;
                                                var addStrings = F2(function(a, b) {
                                                    return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$String, $ren_lang$compiler$Ren$Language$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$append, $elm$core$Maybe$Just($elm$core$String$fromFloat(a)), $ren_lang$compiler$Ren$Language$Expression$coerceToString(b)));
                                                });
                                                var addNumbers = F2(function(a, b) {
                                                    return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Number, $ren_lang$compiler$Ren$Language$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$add, $elm$core$Maybe$Just(a), $ren_lang$compiler$Ren$Language$Expression$coerceToNumber(b)));
                                                });
                                                return A2($ren_lang$compiler$Maybe$Extra$or, A2(addStrings, x, y), A2(addNumbers, x, y));
                                            case 'String':
                                                switch(expression.c.a.$){
                                                    case 'Number':
                                                        break _v0$14;
                                                    case 'Template':
                                                        var _v15 = expression.a;
                                                        var x = expression.b.a.a;
                                                        var y = expression.c.a.a;
                                                        return $elm$core$Maybe$Just($ren_lang$compiler$Ren$Language$Literal($ren_lang$compiler$Ren$Language$Template(A2($elm$core$List$cons, $ren_lang$compiler$Ren$Language$Text(x), y))));
                                                    default:
                                                        break _v0$18;
                                                }
                                            case 'Template':
                                                switch(expression.c.a.$){
                                                    case 'Number':
                                                        break _v0$14;
                                                    case 'Template':
                                                        var _v14 = expression.a;
                                                        var x = expression.b.a.a;
                                                        var y = expression.c.a.a;
                                                        return $elm$core$Maybe$Just($ren_lang$compiler$Ren$Language$Literal($ren_lang$compiler$Ren$Language$Template(_Utils_ap(x, y))));
                                                    case 'String':
                                                        var _v16 = expression.a;
                                                        var x = expression.b.a.a;
                                                        var y = expression.c.a.a;
                                                        return $elm$core$Maybe$Just($ren_lang$compiler$Ren$Language$Literal($ren_lang$compiler$Ren$Language$Template(_Utils_ap(x, _List_fromArray([
                                                            $ren_lang$compiler$Ren$Language$Text(y)
                                                        ])))));
                                                    default:
                                                        break _v0$18;
                                                }
                                            default:
                                                if (expression.c.a.$ === 'Number') break _v0$14;
                                                else break _v0$18;
                                        }
                                        else break _v0$39;
                                    case 'Sub':
                                        if (expression.b.$ === 'Literal') {
                                            var _v18 = expression.a;
                                            var x = expression.b.a;
                                            var y = expression.c.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Number, $ren_lang$compiler$Ren$Language$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$sub, $ren_lang$compiler$Ren$Language$Expression$coerceToNumber(x), $ren_lang$compiler$Ren$Language$Expression$coerceToNumber(y)));
                                        } else break _v0$39;
                                    case 'Mul':
                                        if (expression.b.$ === 'Literal') {
                                            var _v19 = expression.a;
                                            var x = expression.b.a;
                                            var y = expression.c.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Number, $ren_lang$compiler$Ren$Language$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$mul, $ren_lang$compiler$Ren$Language$Expression$coerceToNumber(x), $ren_lang$compiler$Ren$Language$Expression$coerceToNumber(y)));
                                        } else break _v0$39;
                                    case 'Div':
                                        if (expression.b.$ === 'Literal') {
                                            var _v20 = expression.a;
                                            var x = expression.b.a;
                                            var y = expression.c.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Number, $ren_lang$compiler$Ren$Language$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$fdiv, $ren_lang$compiler$Ren$Language$Expression$coerceToNumber(x), $ren_lang$compiler$Ren$Language$Expression$coerceToNumber(y)));
                                        } else break _v0$39;
                                    case 'Pow':
                                        if (expression.b.$ === 'Literal') {
                                            var _v21 = expression.a;
                                            var x = expression.b.a;
                                            var y = expression.c.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Number, $ren_lang$compiler$Ren$Language$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$pow, $ren_lang$compiler$Ren$Language$Expression$coerceToNumber(x), $ren_lang$compiler$Ren$Language$Expression$coerceToNumber(y)));
                                        } else break _v0$39;
                                    case 'Eq':
                                        if (expression.b.$ === 'Literal') {
                                            var _v22 = expression.a;
                                            var x = expression.b.a;
                                            var y = expression.c.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(_Utils_eq(x, y)));
                                        } else break _v0$39;
                                    case 'NotEq':
                                        if (expression.b.$ === 'Literal') {
                                            var _v24 = expression.a;
                                            var x = expression.b.a;
                                            var y = expression.c.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(!_Utils_eq(x, y)));
                                        } else break _v0$39;
                                    case 'Lt':
                                        if (expression.b.$ === 'Literal') switch(expression.b.a.$){
                                            case 'Number':
                                                if (expression.c.a.$ === 'Number') {
                                                    var _v26 = expression.a;
                                                    var x = expression.b.a.a;
                                                    var y = expression.c.a.a;
                                                    return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(_Utils_cmp(x, y) < 0));
                                                } else break _v0$39;
                                            case 'String':
                                                if (expression.c.a.$ === 'String') {
                                                    var _v27 = expression.a;
                                                    var a1 = expression.b.a.a;
                                                    var b1 = expression.c.a.a;
                                                    return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(_Utils_cmp(a1, b1) < 0));
                                                } else break _v0$39;
                                            default:
                                                break _v0$39;
                                        }
                                        else break _v0$39;
                                    case 'Lte':
                                        if (expression.b.$ === 'Literal') switch(expression.b.a.$){
                                            case 'Number':
                                                if (expression.c.a.$ === 'Number') {
                                                    var _v28 = expression.a;
                                                    var x = expression.b.a.a;
                                                    var y = expression.c.a.a;
                                                    return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(_Utils_cmp(x, y) < 1));
                                                } else break _v0$39;
                                            case 'String':
                                                if (expression.c.a.$ === 'String') {
                                                    var _v29 = expression.a;
                                                    var a1 = expression.b.a.a;
                                                    var b1 = expression.c.a.a;
                                                    return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(_Utils_cmp(a1, b1) < 1));
                                                } else break _v0$39;
                                            default:
                                                break _v0$39;
                                        }
                                        else break _v0$39;
                                    case 'Gt':
                                        if (expression.b.$ === 'Literal') switch(expression.b.a.$){
                                            case 'Number':
                                                if (expression.c.a.$ === 'Number') {
                                                    var _v30 = expression.a;
                                                    var x = expression.b.a.a;
                                                    var y = expression.c.a.a;
                                                    return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(_Utils_cmp(x, y) > 0));
                                                } else break _v0$39;
                                            case 'String':
                                                if (expression.c.a.$ === 'String') {
                                                    var _v31 = expression.a;
                                                    var a1 = expression.b.a.a;
                                                    var b1 = expression.c.a.a;
                                                    return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(_Utils_cmp(a1, b1) > 0));
                                                } else break _v0$39;
                                            default:
                                                break _v0$39;
                                        }
                                        else break _v0$39;
                                    case 'Gte':
                                        if (expression.b.$ === 'Literal') switch(expression.b.a.$){
                                            case 'Number':
                                                if (expression.c.a.$ === 'Number') {
                                                    var _v32 = expression.a;
                                                    var x = expression.b.a.a;
                                                    var y = expression.c.a.a;
                                                    return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(_Utils_cmp(x, y) > -1));
                                                } else break _v0$39;
                                            case 'String':
                                                if (expression.c.a.$ === 'String') {
                                                    var _v33 = expression.a;
                                                    var a1 = expression.b.a.a;
                                                    var b1 = expression.c.a.a;
                                                    return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(_Utils_cmp(a1, b1) > -1));
                                                } else break _v0$39;
                                            default:
                                                break _v0$39;
                                        }
                                        else break _v0$39;
                                    case 'And':
                                        if (expression.b.$ === 'Literal' && expression.b.a.$ === 'Boolean' && expression.c.a.$ === 'Boolean') {
                                            var _v34 = expression.a;
                                            var a1 = expression.b.a.a;
                                            var b1 = expression.c.a.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(a1 && b1));
                                        } else break _v0$39;
                                    case 'Or':
                                        if (expression.b.$ === 'Literal' && expression.b.a.$ === 'Boolean' && expression.c.a.$ === 'Boolean') {
                                            var _v35 = expression.a;
                                            var a1 = expression.b.a.a;
                                            var b1 = expression.c.a.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Boolean, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(a1 || b1));
                                        } else break _v0$39;
                                    case 'Cons':
                                        if (expression.c.a.$ === 'Array') {
                                            var _v36 = expression.a;
                                            var a1 = expression.b;
                                            var elements = expression.c.a.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Array, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(A2($elm$core$List$cons, a1, elements)));
                                        } else break _v0$39;
                                    case 'Join':
                                        if (expression.b.$ === 'Literal' && expression.b.a.$ === 'Array' && expression.c.a.$ === 'Array') {
                                            var _v37 = expression.a;
                                            var a1 = expression.b.a.a;
                                            var b1 = expression.c.a.a;
                                            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Array, $ren_lang$compiler$Ren$Language$Literal), $elm$core$Maybe$Just(_Utils_ap(a1, b1)));
                                        } else break _v0$39;
                                    default:
                                        break _v0$39;
                                }
                            default:
                                break _v0$39;
                        }
                    default:
                        break _v0$39;
                }
                return $elm$core$Maybe$Nothing;
            }
            var _v17 = expression.a;
            var x = expression.b.a;
            var y = expression.c.a;
            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$String, $ren_lang$compiler$Ren$Language$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$append, $ren_lang$compiler$Ren$Language$Expression$coerceToString(x), $ren_lang$compiler$Ren$Language$Expression$coerceToString(y)));
        }
        var _v13 = expression.a;
        var x = expression.b.a;
        var y = expression.c.a.a;
        var addStrings = F2(function(a, b) {
            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$String, $ren_lang$compiler$Ren$Language$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$append, $ren_lang$compiler$Ren$Language$Expression$coerceToString(a), $elm$core$Maybe$Just($elm$core$String$fromFloat(b))));
        });
        var addNumbers = F2(function(a, b) {
            return A2($elm$core$Maybe$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Language$Number, $ren_lang$compiler$Ren$Language$Literal), A3($elm$core$Maybe$map2, $elm$core$Basics$add, $ren_lang$compiler$Ren$Language$Expression$coerceToNumber(a), $elm$core$Maybe$Just(b)));
        });
        return A2($ren_lang$compiler$Maybe$Extra$or, A2(addStrings, x, y), A2(addNumbers, x, y));
    };
    var $ren_lang$compiler$Ren$Compiler$Optimise$expressionDefaults = _List_fromArray([
        $ren_lang$compiler$Ren$Compiler$Optimise$constantFold
    ]);
    var $ren_lang$compiler$Ren$Language$Enum = F2(function(a, b) {
        return {
            $: 'Enum',
            a: a,
            b: b
        };
    });
    var $ren_lang$compiler$Ren$Language$Function = F3(function(a, b, c) {
        return {
            $: 'Function',
            a: a,
            b: b,
            c: c
        };
    });
    var $ren_lang$compiler$Ren$Language$Variable = F2(function(a, b) {
        return {
            $: 'Variable',
            a: a,
            b: b
        };
    });
    var $Janiczek$transform$Transform$or = F3(function(leftFn, rightFn, value) {
        var left = leftFn(value);
        return _Utils_eq(left, $elm$core$Maybe$Nothing) ? rightFn(value) : left;
    });
    var $Janiczek$transform$Transform$orList = function(fns) {
        return A3($elm$core$List$foldl, $Janiczek$transform$Transform$or, $elm$core$Basics$always($elm$core$Maybe$Nothing), fns);
    };
    var $elm$core$Basics$composeL = F3(function(g, f, x) {
        return g(f(x));
    });
    var $Janiczek$transform$Transform$transformOnce = F3(function(recurse, fn, expr) {
        var helper = function(expr_) {
            return A2($elm$core$Basics$composeL, fn, recurse(helper))(expr_);
        };
        return helper(expr);
    });
    var $Janiczek$transform$Transform$transformAll = F3(function(recurse, fn, expr) {
        var helper = function(expr_) {
            return A3($Janiczek$transform$Transform$transformOnce, recurse, function(x) {
                return A2($elm$core$Maybe$withDefault, x, A2($elm$core$Maybe$map, helper, fn(x)));
            }, expr_);
        };
        return helper(expr);
    });
    var $ren_lang$compiler$Ren$Language$Block = F2(function(a, b) {
        return {
            $: 'Block',
            a: a,
            b: b
        };
    });
    var $ren_lang$compiler$Ren$Language$Conditional = F3(function(a, b, c) {
        return {
            $: 'Conditional',
            a: a,
            b: b,
            c: c
        };
    });
    var $ren_lang$compiler$Ren$Language$Infix = F3(function(a, b, c) {
        return {
            $: 'Infix',
            a: a,
            b: b,
            c: c
        };
    });
    var $ren_lang$compiler$Ren$Language$Lambda = F2(function(a, b) {
        return {
            $: 'Lambda',
            a: a,
            b: b
        };
    });
    var $ren_lang$compiler$Ren$Language$Match = F2(function(a, b) {
        return {
            $: 'Match',
            a: a,
            b: b
        };
    });
    var $ren_lang$compiler$Ren$Language$Computed = function(a) {
        return {
            $: 'Computed',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Compiler$Optimise$transformAccessor = F2(function(transform, accessor) {
        if (accessor.$ === 'Computed') {
            var expr = accessor.a;
            return $ren_lang$compiler$Ren$Language$Computed(transform(expr));
        } else {
            var name = accessor.a;
            return $ren_lang$compiler$Ren$Language$Fixed(name);
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Optimise$transformCase = F2(function(transform, _v0) {
        var pattern = _v0.a;
        var guard = _v0.b;
        var body = _v0.c;
        return _Utils_Tuple3(pattern, A2($elm$core$Maybe$map, transform, guard), body);
    });
    var $ren_lang$compiler$Ren$Language$Object = function(a) {
        return {
            $: 'Object',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Undefined = {
        $: 'Undefined'
    };
    var $ren_lang$compiler$Ren$Language$Expr = function(a) {
        return {
            $: 'Expr',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Compiler$Optimise$transformSegment = F2(function(transform, segment) {
        if (segment.$ === 'Expr') {
            var expr = segment.a;
            return $ren_lang$compiler$Ren$Language$Expr(transform(expr));
        } else {
            var text = segment.a;
            return $ren_lang$compiler$Ren$Language$Text(text);
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Optimise$transformLiteral = F2(function(transform, literal) {
        switch(literal.$){
            case 'Array':
                var elements = literal.a;
                return $ren_lang$compiler$Ren$Language$Array(A2($elm$core$List$map, transform, elements));
            case 'Boolean':
                var b = literal.a;
                return $ren_lang$compiler$Ren$Language$Boolean(b);
            case 'Number':
                var n = literal.a;
                return $ren_lang$compiler$Ren$Language$Number(n);
            case 'Object':
                var entries = literal.a;
                return $ren_lang$compiler$Ren$Language$Object(A2($elm$core$Dict$map, $elm$core$Basics$always(transform), entries));
            case 'String':
                var s = literal.a;
                return $ren_lang$compiler$Ren$Language$String(s);
            case 'Template':
                var segments = literal.a;
                return $ren_lang$compiler$Ren$Language$Template(A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Optimise$transformSegment(transform), segments));
            default:
                return $ren_lang$compiler$Ren$Language$Undefined;
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Optimise$transformExpression = F2(function(transform, expression) {
        switch(expression.$){
            case 'Access':
                var expr = expression.a;
                var accessors = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Access, transform(expr), A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Optimise$transformAccessor(transform), accessors));
            case 'Application':
                var expr = expression.a;
                var args = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Application, transform(expr), A2($elm$core$List$map, transform, args));
            case 'Block':
                var bindings = expression.a;
                var expr = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Block, bindings, transform(expr));
            case 'Conditional':
                var condition = expression.a;
                var _true = expression.b;
                var _false = expression.c;
                return A3($ren_lang$compiler$Ren$Language$Conditional, transform(condition), transform(_true), transform(_false));
            case 'Identifier':
                var name = expression.a;
                return $ren_lang$compiler$Ren$Language$Identifier(name);
            case 'Infix':
                var operator = expression.a;
                var lhs = expression.b;
                var rhs = expression.c;
                return A3($ren_lang$compiler$Ren$Language$Infix, operator, transform(lhs), transform(rhs));
            case 'Lambda':
                var args = expression.a;
                var body = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Lambda, args, transform(body));
            case 'Literal':
                var literal = expression.a;
                return $ren_lang$compiler$Ren$Language$Literal(A2($ren_lang$compiler$Ren$Compiler$Optimise$transformLiteral, transform, literal));
            default:
                var expr = expression.a;
                var cases = expression.b;
                return A2($ren_lang$compiler$Ren$Language$Match, transform(expr), A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Optimise$transformCase(transform), cases));
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Optimise$optimiseExpressionWith = function(optimisations) {
        return A2($Janiczek$transform$Transform$transformAll, $ren_lang$compiler$Ren$Compiler$Optimise$transformExpression, $Janiczek$transform$Transform$orList(optimisations));
    };
    var $ren_lang$compiler$Ren$Compiler$Optimise$optimiseDeclarationWith = F2(function(optimisations, declaration) {
        switch(declaration.$){
            case 'Function':
                var name = declaration.a;
                var args = declaration.b;
                var body = declaration.c;
                return A3($ren_lang$compiler$Ren$Language$Function, name, args, A2($ren_lang$compiler$Ren$Compiler$Optimise$optimiseExpressionWith, optimisations, body));
            case 'Variable':
                var name = declaration.a;
                var body = declaration.b;
                return A2($ren_lang$compiler$Ren$Language$Variable, name, A2($ren_lang$compiler$Ren$Compiler$Optimise$optimiseExpressionWith, optimisations, body));
            default:
                var name = declaration.a;
                var variants = declaration.b;
                return A2($ren_lang$compiler$Ren$Language$Enum, name, variants);
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Optimise$optimiseDeclaration = $ren_lang$compiler$Ren$Compiler$Optimise$optimiseDeclarationWith($ren_lang$compiler$Ren$Compiler$Optimise$expressionDefaults);
    var $ren_lang$compiler$Ren$Compiler$Optimise$simplifyDeclarations = function(m) {
        return (function(declarations) {
            return _Utils_eq(declarations, m.declarations) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(_Utils_update(m, {
                declarations: declarations
            }));
        })(A2($elm$core$List$map, $elm$core$Tuple$mapSecond($ren_lang$compiler$Ren$Compiler$Optimise$optimiseDeclaration), m.declarations));
    };
    var $ren_lang$compiler$Ren$Compiler$Optimise$moduleDefaults = _List_fromArray([
        $ren_lang$compiler$Ren$Compiler$Optimise$simplifyDeclarations,
        $ren_lang$compiler$Ren$Compiler$Optimise$removeUnusedDeclarations,
        $ren_lang$compiler$Ren$Compiler$Optimise$removeUnusedImports,
        $ren_lang$compiler$Ren$Compiler$Optimise$removeUnusedImportBindings
    ]);
    var $ren_lang$compiler$Ren$Compiler$Optimise$optimiseModuleWith = function() {
        var or = F3(function(f, g, m) {
            return A2($elm$core$Maybe$withDefault, g(m), A2($elm$core$Maybe$map, $elm$core$Maybe$Just, f(m)));
        });
        var apply = F2(function(optimisations, module_) {
            if (optimisations.b) return A2($elm$core$Maybe$withDefault, module_, A2($elm$core$Maybe$map, apply(optimisations), A4($elm$core$List$foldl, or, $elm$core$Basics$always($elm$core$Maybe$Nothing), optimisations, module_)));
            else return module_;
        });
        return apply;
    }();
    var $ren_lang$compiler$Ren$Compiler$Optimise$optimiseModule = $ren_lang$compiler$Ren$Compiler$Optimise$optimiseModuleWith($ren_lang$compiler$Ren$Compiler$Optimise$moduleDefaults);
    var $ren_lang$compiler$Ren$Compiler$optimise = $ren_lang$compiler$Ren$Compiler$Optimise$optimiseModule;
    var $elm$parser$Parser$Done = function(a) {
        return {
            $: 'Done',
            a: a
        };
    };
    var $elm$parser$Parser$Loop = function(a) {
        return {
            $: 'Loop',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Module = F2(function(imports, declarations) {
        return {
            declarations: declarations,
            imports: imports
        };
    });
    var $ren_lang$compiler$Ren$Language$Add = {
        $: 'Add'
    };
    var $ren_lang$compiler$Ren$Language$And = {
        $: 'And'
    };
    var $ren_lang$compiler$Ren$Language$Compose = {
        $: 'Compose'
    };
    var $ren_lang$compiler$Ren$Language$Cons = {
        $: 'Cons'
    };
    var $ren_lang$compiler$Ren$Language$Div = {
        $: 'Div'
    };
    var $ren_lang$compiler$Ren$Language$Eq = {
        $: 'Eq'
    };
    var $elm$parser$Parser$Forbidden = {
        $: 'Forbidden'
    };
    var $ren_lang$compiler$Ren$Language$Gt = {
        $: 'Gt'
    };
    var $ren_lang$compiler$Ren$Language$Gte = {
        $: 'Gte'
    };
    var $ren_lang$compiler$Ren$Language$Join = {
        $: 'Join'
    };
    var $ren_lang$compiler$Ren$Language$Local = function(a) {
        return {
            $: 'Local',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$Lt = {
        $: 'Lt'
    };
    var $ren_lang$compiler$Ren$Language$Lte = {
        $: 'Lte'
    };
    var $ren_lang$compiler$Ren$Language$Mod = {
        $: 'Mod'
    };
    var $ren_lang$compiler$Ren$Language$Mul = {
        $: 'Mul'
    };
    var $ren_lang$compiler$Ren$Language$NotEq = {
        $: 'NotEq'
    };
    var $ren_lang$compiler$Ren$Language$Or = {
        $: 'Or'
    };
    var $ren_lang$compiler$Ren$Language$Pipe = {
        $: 'Pipe'
    };
    var $ren_lang$compiler$Ren$Language$Pow = {
        $: 'Pow'
    };
    var $ren_lang$compiler$Ren$Language$Sub = {
        $: 'Sub'
    };
    var $ren_lang$compiler$Ren$Language$Wildcard = function(a) {
        return {
            $: 'Wildcard',
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$Bad = F2(function(a, b) {
        return {
            $: 'Bad',
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$Advanced$Good = F3(function(a, b, c) {
        return {
            $: 'Good',
            a: a,
            b: b,
            c: c
        };
    });
    var $elm$parser$Parser$Advanced$Parser = function(a) {
        return {
            $: 'Parser',
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$andThen = F2(function(callback, _v0) {
        var parseA = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
            var _v1 = parseA(s0);
            if (_v1.$ === 'Bad') {
                var p = _v1.a;
                var x = _v1.b;
                return A2($elm$parser$Parser$Advanced$Bad, p, x);
            } else {
                var p1 = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                var _v2 = callback(a);
                var parseB = _v2.a;
                var _v3 = parseB(s1);
                if (_v3.$ === 'Bad') {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
                } else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
                }
            }
        });
    });
    var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
    var $elm$parser$Parser$Advanced$backtrackable = function(_v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
            var _v1 = parse(s0);
            if (_v1.$ === 'Bad') {
                var x = _v1.b;
                return A2($elm$parser$Parser$Advanced$Bad, false, x);
            } else {
                var a = _v1.b;
                var s1 = _v1.c;
                return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
            }
        });
    };
    var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
    var $elm$parser$Parser$Advanced$map2 = F3(function(func, _v0, _v1) {
        var parseA = _v0.a;
        var parseB = _v1.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
            var _v2 = parseA(s0);
            if (_v2.$ === 'Bad') {
                var p = _v2.a;
                var x = _v2.b;
                return A2($elm$parser$Parser$Advanced$Bad, p, x);
            } else {
                var p1 = _v2.a;
                var a = _v2.b;
                var s1 = _v2.c;
                var _v3 = parseB(s1);
                if (_v3.$ === 'Bad') {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
                } else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return A3($elm$parser$Parser$Advanced$Good, p1 || p2, A2(func, a, b), s2);
                }
            }
        });
    });
    var $elm$parser$Parser$Advanced$ignorer = F2(function(keepParser, ignoreParser) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
    });
    var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
    var $elm$parser$Parser$Advanced$keeper = F2(function(parseFunc, parseArg) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
    });
    var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
    var $elm$parser$Parser$ExpectingKeyword = function(a) {
        return {
            $: 'ExpectingKeyword',
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$Token = F2(function(a, b) {
        return {
            $: 'Token',
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$Advanced$AddRight = F2(function(a, b) {
        return {
            $: 'AddRight',
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$Advanced$DeadEnd = F4(function(row, col, problem, contextStack) {
        return {
            col: col,
            contextStack: contextStack,
            problem: problem,
            row: row
        };
    });
    var $elm$parser$Parser$Advanced$Empty = {
        $: 'Empty'
    };
    var $elm$parser$Parser$Advanced$fromState = F2(function(s, x) {
        return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
    });
    var $elm$core$String$isEmpty = function(string) {
        return string === '';
    };
    var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
    var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
    var $elm$core$Basics$negate = function(n) {
        return -n;
    };
    var $elm$parser$Parser$Advanced$keyword = function(_v0) {
        var kwd = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(kwd);
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return _Utils_eq(newOffset, -1) || 0 <= A3($elm$parser$Parser$Advanced$isSubChar, function(c) {
                return $elm$core$Char$isAlphaNum(c) || _Utils_eq(c, _Utils_chr('_'));
            }, newOffset, s.src) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3($elm$parser$Parser$Advanced$Good, progress, _Utils_Tuple0, {
                col: newCol,
                context: s.context,
                indent: s.indent,
                offset: newOffset,
                row: newRow,
                src: s.src
            });
        });
    };
    var $elm$parser$Parser$keyword = function(kwd) {
        return $elm$parser$Parser$Advanced$keyword(A2($elm$parser$Parser$Advanced$Token, kwd, $elm$parser$Parser$ExpectingKeyword(kwd)));
    };
    var $elm$parser$Parser$Advanced$Append = F2(function(a, b) {
        return {
            $: 'Append',
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$Advanced$oneOfHelp = F3(function(s0, bag, parsers) {
        oneOfHelp: while(true){
            if (!parsers.b) return A2($elm$parser$Parser$Advanced$Bad, false, bag);
            else {
                var parse = parsers.a.a;
                var remainingParsers = parsers.b;
                var _v1 = parse(s0);
                if (_v1.$ === 'Good') {
                    var step = _v1;
                    return step;
                } else {
                    var step = _v1;
                    var p = step.a;
                    var x = step.b;
                    if (p) return step;
                    else {
                        var $temp$s0 = s0, $temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x), $temp$parsers = remainingParsers;
                        s0 = $temp$s0;
                        bag = $temp$bag;
                        parsers = $temp$parsers;
                        continue oneOfHelp;
                    }
                }
            }
        }
    });
    var $elm$parser$Parser$Advanced$oneOf = function(parsers) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
        });
    };
    var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
    var $elm$parser$Parser$Advanced$succeed = function(a) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return A3($elm$parser$Parser$Advanced$Good, false, a, s);
        });
    };
    var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
    var $ren_lang$compiler$Ren$Compiler$Parse$booleanLiteralParser = A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Boolean), $elm$parser$Parser$oneOf(_List_fromArray([
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(true), $elm$parser$Parser$keyword('true')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(false), $elm$parser$Parser$keyword('false'))
    ])));
    var $elm$parser$Parser$Advanced$chompWhileHelp = F5(function(isGood, offset, row, col, s0) {
        chompWhileHelp: while(true){
            var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
            if (_Utils_eq(newOffset, -1)) return A3($elm$parser$Parser$Advanced$Good, _Utils_cmp(s0.offset, offset) < 0, _Utils_Tuple0, {
                col: col,
                context: s0.context,
                indent: s0.indent,
                offset: offset,
                row: row,
                src: s0.src
            });
            else if (_Utils_eq(newOffset, -2)) {
                var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$s0 = s0;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                s0 = $temp$s0;
                continue chompWhileHelp;
            } else {
                var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$s0 = s0;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                s0 = $temp$s0;
                continue chompWhileHelp;
            }
        }
    });
    var $elm$parser$Parser$Advanced$chompWhile = function(isGood) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
        });
    };
    var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
    var $elm$core$String$length = _String_length;
    var $elm$parser$Parser$Advanced$chompUntilEndOr = function(str) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var _v0 = A5(_Parser_findSubString, str, s.offset, s.row, s.col, s.src);
            var newOffset = _v0.a;
            var newRow = _v0.b;
            var newCol = _v0.c;
            var adjustedOffset = newOffset < 0 ? $elm$core$String$length(s.src) : newOffset;
            return A3($elm$parser$Parser$Advanced$Good, _Utils_cmp(s.offset, adjustedOffset) < 0, _Utils_Tuple0, {
                col: newCol,
                context: s.context,
                indent: s.indent,
                offset: adjustedOffset,
                row: newRow,
                src: s.src
            });
        });
    };
    var $elm$parser$Parser$Advanced$token = function(_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(str);
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3($elm$parser$Parser$Advanced$Good, progress, _Utils_Tuple0, {
                col: newCol,
                context: s.context,
                indent: s.indent,
                offset: newOffset,
                row: newRow,
                src: s.src
            });
        });
    };
    var $elm$parser$Parser$Advanced$lineComment = function(start) {
        return A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$token(start), $elm$parser$Parser$Advanced$chompUntilEndOr('\n'));
    };
    var $elm$parser$Parser$Expecting = function(a) {
        return {
            $: 'Expecting',
            a: a
        };
    };
    var $elm$parser$Parser$toToken = function(str) {
        return A2($elm$parser$Parser$Advanced$Token, str, $elm$parser$Parser$Expecting(str));
    };
    var $elm$parser$Parser$lineComment = function(str) {
        return $elm$parser$Parser$Advanced$lineComment($elm$parser$Parser$toToken(str));
    };
    var $elm$parser$Parser$Advanced$loopHelp = F4(function(p, state, callback, s0) {
        loopHelp: while(true){
            var _v0 = callback(state);
            var parse = _v0.a;
            var _v1 = parse(s0);
            if (_v1.$ === 'Good') {
                var p1 = _v1.a;
                var step = _v1.b;
                var s1 = _v1.c;
                if (step.$ === 'Loop') {
                    var newState = step.a;
                    var $temp$p = p || p1, $temp$state = newState, $temp$callback = callback, $temp$s0 = s1;
                    p = $temp$p;
                    state = $temp$state;
                    callback = $temp$callback;
                    s0 = $temp$s0;
                    continue loopHelp;
                } else {
                    var result = step.a;
                    return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
                }
            } else {
                var p1 = _v1.a;
                var x = _v1.b;
                return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
            }
        }
    });
    var $elm$parser$Parser$Advanced$loop = F2(function(state, callback) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
        });
    });
    var $elm$parser$Parser$Advanced$map = F2(function(func, _v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
            var _v1 = parse(s0);
            if (_v1.$ === 'Good') {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return A3($elm$parser$Parser$Advanced$Good, p, func(a), s1);
            } else {
                var p = _v1.a;
                var x = _v1.b;
                return A2($elm$parser$Parser$Advanced$Bad, p, x);
            }
        });
    });
    var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
    var $elm$parser$Parser$Advanced$Done = function(a) {
        return {
            $: 'Done',
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$Loop = function(a) {
        return {
            $: 'Loop',
            a: a
        };
    };
    var $elm$parser$Parser$toAdvancedStep = function(step) {
        if (step.$ === 'Loop') {
            var s = step.a;
            return $elm$parser$Parser$Advanced$Loop(s);
        } else {
            var a = step.a;
            return $elm$parser$Parser$Advanced$Done(a);
        }
    };
    var $elm$parser$Parser$loop = F2(function(state, callback) {
        return A2($elm$parser$Parser$Advanced$loop, state, function(s) {
            return A2($elm$parser$Parser$map, $elm$parser$Parser$toAdvancedStep, callback(s));
        });
    });
    var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(function(c) {
        return _Utils_eq(c, _Utils_chr(' ')) || _Utils_eq(c, _Utils_chr('\n')) || _Utils_eq(c, _Utils_chr('\r'));
    });
    var $elm$parser$Parser$spaces = $elm$parser$Parser$Advanced$spaces;
    var $ren_lang$compiler$Parser$Extra$ignorables = A2($elm$parser$Parser$ignorer, $elm$parser$Parser$spaces, A2($elm$parser$Parser$loop, _Utils_Tuple0, function(_v0) {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$lineComment('//'), $elm$parser$Parser$spaces)),
            A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed(_Utils_Tuple0))
        ]));
    }));
    var $dmy$elm_pratt_parser$Pratt$Advanced$filter = F3(function(_v0, currentPrecedence, leftExpression) {
        var precedence = _v0.a;
        var parser = _v0.b;
        return _Utils_cmp(precedence, currentPrecedence) > 0 ? $elm$core$Maybe$Just(parser(leftExpression)) : $elm$core$Maybe$Nothing;
    });
    var $elm$core$List$maybeCons = F3(function(f, mx, xs) {
        var _v0 = f(mx);
        if (_v0.$ === 'Just') {
            var x = _v0.a;
            return A2($elm$core$List$cons, x, xs);
        } else return xs;
    });
    var $elm$core$List$filterMap = F2(function(f, xs) {
        return A3($elm$core$List$foldr, $elm$core$List$maybeCons(f), _List_Nil, xs);
    });
    var $dmy$elm_pratt_parser$Pratt$Advanced$operation = F3(function(config, precedence, leftExpression) {
        var conf = config.a;
        return $elm$parser$Parser$Advanced$oneOf(A2($elm$core$List$filterMap, function(toOperation) {
            return A3($dmy$elm_pratt_parser$Pratt$Advanced$filter, toOperation(config), precedence, leftExpression);
        }, conf.andThenOneOf));
    });
    var $dmy$elm_pratt_parser$Pratt$Advanced$expressionHelp = function(_v0) {
        var config = _v0.a;
        var conf = config.a;
        var precedence = _v0.b;
        var leftExpression = _v0.c;
        return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), conf.spaces), $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, function(expr) {
                return $elm$parser$Parser$Advanced$Loop(_Utils_Tuple3(config, precedence, expr));
            }, A3($dmy$elm_pratt_parser$Pratt$Advanced$operation, config, precedence, leftExpression)),
            $elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$Done(leftExpression))
        ])));
    };
    var $elm$parser$Parser$Advanced$lazy = function(thunk) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var _v0 = thunk(_Utils_Tuple0);
            var parse = _v0.a;
            return parse(s);
        });
    };
    var $dmy$elm_pratt_parser$Pratt$Advanced$subExpression = F2(function(precedence, config) {
        var conf = config.a;
        return A2($elm$parser$Parser$Advanced$andThen, function(leftExpression) {
            return A2($elm$parser$Parser$Advanced$loop, _Utils_Tuple3(config, precedence, leftExpression), $dmy$elm_pratt_parser$Pratt$Advanced$expressionHelp);
        }, A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity), conf.spaces), $elm$parser$Parser$Advanced$lazy(function(_v0) {
            return $elm$parser$Parser$Advanced$oneOf(A2($elm$core$List$map, $elm$core$Basics$apR(config), conf.oneOf));
        })));
    });
    var $dmy$elm_pratt_parser$Pratt$subExpression = $dmy$elm_pratt_parser$Pratt$Advanced$subExpression;
    var $ren_lang$compiler$Ren$Compiler$Parse$conditionalParser = function(prattConfig) {
        return A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Conditional), $elm$parser$Parser$keyword('if')), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($dmy$elm_pratt_parser$Pratt$subExpression, 0, prattConfig), $elm$parser$Parser$keyword('then')), $ren_lang$compiler$Parser$Extra$ignorables)), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($dmy$elm_pratt_parser$Pratt$subExpression, 0, prattConfig), $elm$parser$Parser$keyword('else')), $ren_lang$compiler$Parser$Extra$ignorables)), A2($dmy$elm_pratt_parser$Pratt$subExpression, 0, prattConfig));
    };
    var $elm$core$Set$Set_elm_builtin = function(a) {
        return {
            $: 'Set_elm_builtin',
            a: a
        };
    };
    var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
    var $elm$parser$Parser$ExpectingSymbol = function(a) {
        return {
            $: 'ExpectingSymbol',
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
    var $elm$parser$Parser$symbol = function(str) {
        return $elm$parser$Parser$Advanced$symbol(A2($elm$parser$Parser$Advanced$Token, str, $elm$parser$Parser$ExpectingSymbol(str)));
    };
    var $elm$parser$Parser$ExpectingVariable = {
        $: 'ExpectingVariable'
    };
    var $elm$core$Dict$member = F2(function(key, dict) {
        var _v0 = A2($elm$core$Dict$get, key, dict);
        if (_v0.$ === 'Just') return true;
        else return false;
    });
    var $elm$core$Set$member = F2(function(key, _v0) {
        var dict = _v0.a;
        return A2($elm$core$Dict$member, key, dict);
    });
    var $elm$core$String$slice = _String_slice;
    var $elm$parser$Parser$Advanced$varHelp = F7(function(isGood, offset, row, col, src, indent, context) {
        varHelp: while(true){
            var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
            if (_Utils_eq(newOffset, -1)) return {
                col: col,
                context: context,
                indent: indent,
                offset: offset,
                row: row,
                src: src
            };
            else if (_Utils_eq(newOffset, -2)) {
                var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$src = src, $temp$indent = indent, $temp$context = context;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                src = $temp$src;
                indent = $temp$indent;
                context = $temp$context;
                continue varHelp;
            } else {
                var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$src = src, $temp$indent = indent, $temp$context = context;
                isGood = $temp$isGood;
                offset = $temp$offset;
                row = $temp$row;
                col = $temp$col;
                src = $temp$src;
                indent = $temp$indent;
                context = $temp$context;
                continue varHelp;
            }
        }
    });
    var $elm$parser$Parser$Advanced$variable = function(i) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
            if (_Utils_eq(firstOffset, -1)) return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
            else {
                var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
                var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
                return A2($elm$core$Set$member, name, i.reserved) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
            }
        });
    };
    var $elm$parser$Parser$variable = function(i) {
        return $elm$parser$Parser$Advanced$variable({
            expecting: $elm$parser$Parser$ExpectingVariable,
            inner: i.inner,
            reserved: i.reserved,
            start: i.start
        });
    };
    var $ren_lang$compiler$Ren$Language$Variant = F2(function(a, b) {
        return {
            $: 'Variant',
            a: a,
            b: b
        };
    });
    var $ren_lang$compiler$Ren$Compiler$Parse$variantParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Variant), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$variable({
        inner: $elm$core$Char$isAlphaNum,
        reserved: $elm$core$Set$empty,
        start: $elm$core$Basics$eq(_Utils_chr('#'))
    }), $elm$parser$Parser$spaces)), A2($elm$parser$Parser$loop, 0, function(slots) {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(slots + 1), $elm$parser$Parser$variable({
                inner: $elm$core$Char$isAlphaNum,
                reserved: $elm$core$Set$empty,
                start: $elm$core$Basics$eq(_Utils_chr('_'))
            })), $ren_lang$compiler$Parser$Extra$ignorables)),
            A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed(slots))
        ]));
    }));
    var $ren_lang$compiler$Ren$Compiler$Parse$enumParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Enum), $elm$parser$Parser$keyword('enum')), $elm$parser$Parser$spaces), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$variable({
        inner: $elm$core$Char$isAlphaNum,
        reserved: $elm$core$Set$empty,
        start: $elm$core$Char$isUpper
    }), $ren_lang$compiler$Parser$Extra$ignorables)), $elm$parser$Parser$oneOf(_List_fromArray([
        A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$List$cons), $elm$parser$Parser$symbol('=')), $elm$parser$Parser$spaces), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$variantParser, $ren_lang$compiler$Parser$Extra$ignorables)), A2($elm$parser$Parser$loop, _List_Nil, function(variants) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(function(variant) {
                    return A2($elm$core$List$cons, variant, variants);
                }), $elm$parser$Parser$symbol('|')), $elm$parser$Parser$spaces), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$variantParser, $ren_lang$compiler$Parser$Extra$ignorables))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed($elm$core$List$reverse(variants)))
            ]));
        })),
        $elm$parser$Parser$succeed(_List_Nil)
    ])));
    var $dmy$elm_pratt_parser$Pratt$Advanced$Config = function(a) {
        return {
            $: 'Config',
            a: a
        };
    };
    var $dmy$elm_pratt_parser$Pratt$Advanced$expression = function(config) {
        return A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, 0, $dmy$elm_pratt_parser$Pratt$Advanced$Config({
            andThenOneOf: config.andThenOneOf,
            oneOf: config.oneOf,
            spaces: config.spaces
        }));
    };
    var $dmy$elm_pratt_parser$Pratt$expression = $dmy$elm_pratt_parser$Pratt$Advanced$expression;
    var $ren_lang$compiler$Ren$Compiler$Parse$fixedAccessorParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Fixed), $elm$parser$Parser$symbol('.')), $elm$parser$Parser$variable({
        inner: $elm$core$Char$isAlphaNum,
        reserved: $elm$core$Set$empty,
        start: $elm$core$Char$isLower
    }));
    var $elm$parser$Parser$Advanced$mapChompedString = F2(function(func, _v0) {
        var parse = _v0.a;
        return $elm$parser$Parser$Advanced$Parser(function(s0) {
            var _v1 = parse(s0);
            if (_v1.$ === 'Bad') {
                var p = _v1.a;
                var x = _v1.b;
                return A2($elm$parser$Parser$Advanced$Bad, p, x);
            } else {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return A3($elm$parser$Parser$Advanced$Good, p, A2(func, A3($elm$core$String$slice, s0.offset, s1.offset, s0.src), a), s1);
            }
        });
    });
    var $elm$parser$Parser$Advanced$getChompedString = function(parser) {
        return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
    };
    var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
    var $ren_lang$compiler$Ren$Language$Constructor = function(a) {
        return {
            $: 'Constructor',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Compiler$Parse$constructorIdentifierParser = A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Constructor), $elm$parser$Parser$variable({
        inner: $elm$core$Char$isAlphaNum,
        reserved: $elm$core$Set$empty,
        start: $elm$core$Basics$eq(_Utils_chr('#'))
    }));
    var $ren_lang$compiler$Ren$Language$Field = function(a) {
        return {
            $: 'Field',
            a: a
        };
    };
    var $elm$core$Set$insert = F2(function(key, _v0) {
        var dict = _v0.a;
        return $elm$core$Set$Set_elm_builtin(A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
    });
    var $elm$core$Set$fromList = function(list) {
        return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
    };
    var $ren_lang$compiler$Ren$Language$keywords = $elm$core$Set$fromList(_List_fromArray([
        'if',
        'then',
        'else',
        'import',
        'as',
        'exposing',
        'pub',
        'fun',
        'let',
        'enum',
        'ret',
        'true',
        'false',
        'when',
        'is'
    ]));
    var $ren_lang$compiler$Ren$Compiler$Parse$fieldIdentifierParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Field), $elm$parser$Parser$symbol('.')), $elm$parser$Parser$variable({
        inner: $elm$core$Char$isAlphaNum,
        reserved: $ren_lang$compiler$Ren$Language$keywords,
        start: $elm$core$Char$isLower
    }));
    var $ren_lang$compiler$Ren$Compiler$Parse$localIdentifierParser = A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Local), $elm$parser$Parser$variable({
        inner: $elm$core$Char$isAlphaNum,
        reserved: $ren_lang$compiler$Ren$Language$keywords,
        start: $elm$core$Char$isLower
    }));
    var $ren_lang$compiler$Ren$Language$Operator = function(a) {
        return {
            $: 'Operator',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Compiler$Parse$operatorIdentifierParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Operator), $elm$parser$Parser$symbol('(')), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(_List_fromArray([
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Pipe), $elm$parser$Parser$symbol('|>')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Compose), $elm$parser$Parser$symbol('>>')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Eq), $elm$parser$Parser$symbol('==')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$NotEq), $elm$parser$Parser$symbol('!=')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Lte), $elm$parser$Parser$symbol('<=')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Gte), $elm$parser$Parser$symbol('>=')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$And), $elm$parser$Parser$symbol('&&')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Or), $elm$parser$Parser$symbol('||')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Cons), $elm$parser$Parser$symbol('::')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Join), $elm$parser$Parser$symbol('++')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Lt), $elm$parser$Parser$symbol('<')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Gt), $elm$parser$Parser$symbol('>')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Add), $elm$parser$Parser$symbol('+')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Sub), $elm$parser$Parser$symbol('-')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Mul), $elm$parser$Parser$symbol('*')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Div), $elm$parser$Parser$symbol('/')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Pow), $elm$parser$Parser$symbol('^')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Mod), $elm$parser$Parser$symbol('%'))
    ])), $elm$parser$Parser$symbol(')')));
    var $elm$parser$Parser$Mandatory = {
        $: 'Mandatory'
    };
    var $ren_lang$compiler$Ren$Language$Scoped = F2(function(a, b) {
        return {
            $: 'Scoped',
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$Advanced$revAlways = F2(function(_v0, b) {
        return b;
    });
    var $elm$parser$Parser$Advanced$skip = F2(function(iParser, kParser) {
        return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
    });
    var $elm$parser$Parser$Advanced$sequenceEndForbidden = F5(function(ender, ws, parseItem, sep, revItems) {
        var chompRest = function(item) {
            return A5($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep, A2($elm$core$List$cons, item, revItems));
        };
        return A2($elm$parser$Parser$Advanced$skip, ws, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$skip, sep, A2($elm$parser$Parser$Advanced$skip, ws, A2($elm$parser$Parser$Advanced$map, function(item) {
                return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, item, revItems));
            }, parseItem))),
            A2($elm$parser$Parser$Advanced$map, function(_v0) {
                return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revItems));
            }, ender)
        ])));
    });
    var $elm$parser$Parser$Advanced$sequenceEndMandatory = F4(function(ws, parseItem, sep, revItems) {
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$map, function(item) {
                return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, item, revItems));
            }, A2($elm$parser$Parser$Advanced$ignorer, parseItem, A2($elm$parser$Parser$Advanced$ignorer, ws, A2($elm$parser$Parser$Advanced$ignorer, sep, ws)))),
            A2($elm$parser$Parser$Advanced$map, function(_v0) {
                return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revItems));
            }, $elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
        ]));
    });
    var $elm$parser$Parser$Advanced$sequenceEndOptional = F5(function(ender, ws, parseItem, sep, revItems) {
        var parseEnd = A2($elm$parser$Parser$Advanced$map, function(_v0) {
            return $elm$parser$Parser$Advanced$Done($elm$core$List$reverse(revItems));
        }, ender);
        return A2($elm$parser$Parser$Advanced$skip, ws, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$skip, sep, A2($elm$parser$Parser$Advanced$skip, ws, $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
                A2($elm$parser$Parser$Advanced$map, function(item) {
                    return $elm$parser$Parser$Advanced$Loop(A2($elm$core$List$cons, item, revItems));
                }, parseItem),
                parseEnd
            ])))),
            parseEnd
        ])));
    });
    var $elm$parser$Parser$Advanced$sequenceEnd = F5(function(ender, ws, parseItem, sep, trailing) {
        var chompRest = function(item) {
            switch(trailing.$){
                case 'Forbidden':
                    return A2($elm$parser$Parser$Advanced$loop, _List_fromArray([
                        item
                    ]), A4($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep));
                case 'Optional':
                    return A2($elm$parser$Parser$Advanced$loop, _List_fromArray([
                        item
                    ]), A4($elm$parser$Parser$Advanced$sequenceEndOptional, ender, ws, parseItem, sep));
                default:
                    return A2($elm$parser$Parser$Advanced$ignorer, A2($elm$parser$Parser$Advanced$skip, ws, A2($elm$parser$Parser$Advanced$skip, sep, A2($elm$parser$Parser$Advanced$skip, ws, A2($elm$parser$Parser$Advanced$loop, _List_fromArray([
                        item
                    ]), A3($elm$parser$Parser$Advanced$sequenceEndMandatory, ws, parseItem, sep))))), ender);
            }
        };
        return $elm$parser$Parser$Advanced$oneOf(_List_fromArray([
            A2($elm$parser$Parser$Advanced$andThen, chompRest, parseItem),
            A2($elm$parser$Parser$Advanced$map, function(_v0) {
                return _List_Nil;
            }, ender)
        ]));
    });
    var $elm$parser$Parser$Advanced$sequence = function(i) {
        return A2($elm$parser$Parser$Advanced$skip, $elm$parser$Parser$Advanced$token(i.start), A2($elm$parser$Parser$Advanced$skip, i.spaces, A5($elm$parser$Parser$Advanced$sequenceEnd, $elm$parser$Parser$Advanced$token(i.end), i.spaces, i.item, $elm$parser$Parser$Advanced$token(i.separator), i.trailing)));
    };
    var $elm$parser$Parser$Advanced$Forbidden = {
        $: 'Forbidden'
    };
    var $elm$parser$Parser$Advanced$Mandatory = {
        $: 'Mandatory'
    };
    var $elm$parser$Parser$Advanced$Optional = {
        $: 'Optional'
    };
    var $elm$parser$Parser$toAdvancedTrailing = function(trailing) {
        switch(trailing.$){
            case 'Forbidden':
                return $elm$parser$Parser$Advanced$Forbidden;
            case 'Optional':
                return $elm$parser$Parser$Advanced$Optional;
            default:
                return $elm$parser$Parser$Advanced$Mandatory;
        }
    };
    var $elm$parser$Parser$sequence = function(i) {
        return $elm$parser$Parser$Advanced$sequence({
            end: $elm$parser$Parser$toToken(i.end),
            item: i.item,
            separator: $elm$parser$Parser$toToken(i.separator),
            spaces: i.spaces,
            start: $elm$parser$Parser$toToken(i.start),
            trailing: $elm$parser$Parser$toAdvancedTrailing(i.trailing)
        });
    };
    var $ren_lang$compiler$Ren$Compiler$Parse$scopedIdentifierParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Scoped), $elm$parser$Parser$sequence({
        end: '',
        item: $elm$parser$Parser$variable({
            inner: $elm$core$Char$isAlphaNum,
            reserved: $elm$core$Set$empty,
            start: $elm$core$Char$isUpper
        }),
        separator: '.',
        spaces: $elm$parser$Parser$succeed(_Utils_Tuple0),
        start: '',
        trailing: $elm$parser$Parser$Mandatory
    })), $elm$parser$Parser$oneOf(_List_fromArray([
        $ren_lang$compiler$Ren$Compiler$Parse$localIdentifierParser,
        $ren_lang$compiler$Ren$Compiler$Parse$constructorIdentifierParser
    ])));
    var $ren_lang$compiler$Ren$Compiler$Parse$identifierParser = A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Identifier), $elm$parser$Parser$oneOf(_List_fromArray([
        $ren_lang$compiler$Ren$Compiler$Parse$localIdentifierParser,
        $ren_lang$compiler$Ren$Compiler$Parse$constructorIdentifierParser,
        $ren_lang$compiler$Ren$Compiler$Parse$scopedIdentifierParser,
        $ren_lang$compiler$Ren$Compiler$Parse$operatorIdentifierParser,
        $ren_lang$compiler$Ren$Compiler$Parse$fieldIdentifierParser
    ])));
    var $dmy$elm_pratt_parser$Pratt$Advanced$infixHelp = F4(function(_v0, operator, apply, config) {
        var leftPrecedence = _v0.a;
        var rightPrecedence = _v0.b;
        return _Utils_Tuple2(leftPrecedence, function(left) {
            return A2($elm$parser$Parser$Advanced$keeper, A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$succeed(apply(left)), operator), A2($dmy$elm_pratt_parser$Pratt$Advanced$subExpression, rightPrecedence, config));
        });
    });
    var $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft = function(precedence) {
        return $dmy$elm_pratt_parser$Pratt$Advanced$infixHelp(_Utils_Tuple2(precedence, precedence));
    };
    var $dmy$elm_pratt_parser$Pratt$infixLeft = $dmy$elm_pratt_parser$Pratt$Advanced$infixLeft;
    var $dmy$elm_pratt_parser$Pratt$Advanced$infixRight = function(precedence) {
        return $dmy$elm_pratt_parser$Pratt$Advanced$infixHelp(_Utils_Tuple2(precedence, precedence - 1));
    };
    var $dmy$elm_pratt_parser$Pratt$infixRight = $dmy$elm_pratt_parser$Pratt$Advanced$infixRight;
    var $elm$parser$Parser$Optional = {
        $: 'Optional'
    };
    var $ren_lang$compiler$Ren$Language$ObjectDestructure = function(a) {
        return {
            $: 'ObjectDestructure',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Language$VariantDestructure = F2(function(a, b) {
        return {
            $: 'VariantDestructure',
            a: a,
            b: b
        };
    });
    var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
    var $ren_lang$compiler$Ren$Compiler$Parse$nameParser = A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Name), $elm$parser$Parser$variable({
        inner: $elm$core$Char$isAlphaNum,
        reserved: $ren_lang$compiler$Ren$Language$keywords,
        start: $elm$core$Char$isLower
    }));
    var $elm$core$Tuple$pair = F2(function(a, b) {
        return _Utils_Tuple2(a, b);
    });
    var $ren_lang$compiler$Ren$Language$BooleanP = {
        $: 'BooleanP'
    };
    var $ren_lang$compiler$Ren$Language$FunctionP = {
        $: 'FunctionP'
    };
    var $ren_lang$compiler$Ren$Language$NumberP = {
        $: 'NumberP'
    };
    var $ren_lang$compiler$Ren$Language$StringP = {
        $: 'StringP'
    };
    var $ren_lang$compiler$Ren$Language$Typeof = F2(function(a, b) {
        return {
            $: 'Typeof',
            a: a,
            b: b
        };
    });
    var $ren_lang$compiler$Ren$Compiler$Parse$typeofParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(_List_fromArray([
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Typeof($ren_lang$compiler$Ren$Language$BooleanP)), $elm$parser$Parser$keyword('@Boolean')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Typeof($ren_lang$compiler$Ren$Language$NumberP)), $elm$parser$Parser$keyword('@Number')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Typeof($ren_lang$compiler$Ren$Language$StringP)), $elm$parser$Parser$keyword('@String')),
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Typeof($ren_lang$compiler$Ren$Language$FunctionP)), $elm$parser$Parser$keyword('@Function'))
    ])), $elm$parser$Parser$spaces), $elm$parser$Parser$variable({
        inner: $elm$core$Char$isAlphaNum,
        reserved: $ren_lang$compiler$Ren$Language$keywords,
        start: $elm$core$Char$isLower
    }));
    var $ren_lang$compiler$Ren$Language$Value = function(a) {
        return {
            $: 'Value',
            a: a
        };
    };
    var $elm$parser$Parser$UnexpectedChar = {
        $: 'UnexpectedChar'
    };
    var $elm$parser$Parser$Advanced$chompIf = F2(function(isGood, expecting) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
            return _Utils_eq(newOffset, -1) ? A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : _Utils_eq(newOffset, -2) ? A3($elm$parser$Parser$Advanced$Good, true, _Utils_Tuple0, {
                col: 1,
                context: s.context,
                indent: s.indent,
                offset: s.offset + 1,
                row: s.row + 1,
                src: s.src
            }) : A3($elm$parser$Parser$Advanced$Good, true, _Utils_Tuple0, {
                col: s.col + 1,
                context: s.context,
                indent: s.indent,
                offset: newOffset,
                row: s.row,
                src: s.src
            });
        });
    });
    var $elm$parser$Parser$chompIf = function(isGood) {
        return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
    };
    var $elm$parser$Parser$ExpectingBinary = {
        $: 'ExpectingBinary'
    };
    var $elm$parser$Parser$ExpectingFloat = {
        $: 'ExpectingFloat'
    };
    var $elm$parser$Parser$ExpectingHex = {
        $: 'ExpectingHex'
    };
    var $elm$parser$Parser$ExpectingInt = {
        $: 'ExpectingInt'
    };
    var $elm$parser$Parser$ExpectingNumber = {
        $: 'ExpectingNumber'
    };
    var $elm$parser$Parser$ExpectingOctal = {
        $: 'ExpectingOctal'
    };
    var $elm$core$Result$fromMaybe = F2(function(err, maybe) {
        if (maybe.$ === 'Just') {
            var v = maybe.a;
            return $elm$core$Result$Ok(v);
        } else return $elm$core$Result$Err(err);
    });
    var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
    var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
    var $elm$parser$Parser$Advanced$bumpOffset = F2(function(newOffset, s) {
        return {
            col: s.col + (newOffset - s.offset),
            context: s.context,
            indent: s.indent,
            offset: newOffset,
            row: s.row,
            src: s.src
        };
    });
    var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
    var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
    var $elm$parser$Parser$Advanced$consumeExp = F2(function(offset, src) {
        if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
            var eOffset = offset + 1;
            var expOffset = A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src) ? eOffset + 1 : eOffset;
            var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
            return _Utils_eq(expOffset, newOffset) ? -newOffset : newOffset;
        } else return offset;
    });
    var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(function(offset, src) {
        return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2($elm$parser$Parser$Advanced$consumeExp, A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src), src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
    });
    var $elm$parser$Parser$Advanced$finalizeInt = F5(function(invalid, handler, startOffset, _v0, s) {
        var endOffset = _v0.a;
        var n = _v0.b;
        if (handler.$ === 'Err') {
            var x = handler.a;
            return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, x));
        } else {
            var toValue = handler.a;
            return _Utils_eq(startOffset, endOffset) ? A2($elm$parser$Parser$Advanced$Bad, _Utils_cmp(s.offset, startOffset) < 0, A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3($elm$parser$Parser$Advanced$Good, true, toValue(n), A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
        }
    });
    var $elm$parser$Parser$Advanced$fromInfo = F4(function(row, col, x, context) {
        return A2($elm$parser$Parser$Advanced$AddRight, $elm$parser$Parser$Advanced$Empty, A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
    });
    var $elm$parser$Parser$Advanced$finalizeFloat = F6(function(invalid, expecting, intSettings, floatSettings, intPair, s) {
        var intOffset = intPair.a;
        var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
        if (floatOffset < 0) return A2($elm$parser$Parser$Advanced$Bad, true, A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
        else {
            if (_Utils_eq(s.offset, floatOffset)) return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, expecting));
            else {
                if (_Utils_eq(intOffset, floatOffset)) return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
                else if (floatSettings.$ === 'Err') {
                    var x = floatSettings.a;
                    return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, invalid));
                } else {
                    var toValue = floatSettings.a;
                    var _v1 = $elm$core$String$toFloat(A3($elm$core$String$slice, s.offset, floatOffset, s.src));
                    if (_v1.$ === 'Nothing') return A2($elm$parser$Parser$Advanced$Bad, true, A2($elm$parser$Parser$Advanced$fromState, s, invalid));
                    else {
                        var n = _v1.a;
                        return A3($elm$parser$Parser$Advanced$Good, true, toValue(n), A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
                    }
                }
            }
        }
    });
    var $elm$parser$Parser$Advanced$number = function(c) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
                var zeroOffset = s.offset + 1;
                var baseOffset = zeroOffset + 1;
                return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.hex, baseOffset, A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src), s) : A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.octal, baseOffset, A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src), s) : A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5($elm$parser$Parser$Advanced$finalizeInt, c.invalid, c.binary, baseOffset, A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src), s) : A6($elm$parser$Parser$Advanced$finalizeFloat, c.invalid, c.expecting, c._int, c._float, _Utils_Tuple2(zeroOffset, 0), s);
            } else return A6($elm$parser$Parser$Advanced$finalizeFloat, c.invalid, c.expecting, c._int, c._float, A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src), s);
        });
    };
    var $elm$parser$Parser$number = function(i) {
        return $elm$parser$Parser$Advanced$number({
            binary: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingBinary, i.binary),
            expecting: $elm$parser$Parser$ExpectingNumber,
            _float: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingFloat, i._float),
            hex: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingHex, i.hex),
            _int: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingInt, i._int),
            invalid: $elm$parser$Parser$ExpectingNumber,
            octal: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingOctal, i.octal)
        });
    };
    var $elm$parser$Parser$Problem = function(a) {
        return {
            $: 'Problem',
            a: a
        };
    };
    var $elm$parser$Parser$Advanced$problem = function(x) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, x));
        });
    };
    var $elm$parser$Parser$problem = function(msg) {
        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem(msg));
    };
    var $ren_lang$compiler$Ren$Compiler$Parse$numberLiteralParser = function() {
        var numberConfig = {
            binary: $elm$core$Maybe$Just($elm$core$Basics$toFloat),
            _float: $elm$core$Maybe$Just($elm$core$Basics$identity),
            hex: $elm$core$Maybe$Just($elm$core$Basics$toFloat),
            _int: $elm$core$Maybe$Just($elm$core$Basics$toFloat),
            octal: $elm$core$Maybe$Just($elm$core$Basics$toFloat)
        };
        return $elm$parser$Parser$backtrackable(A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Number), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(_List_fromArray([
            A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$negate), $elm$parser$Parser$symbol('-')), $elm$parser$Parser$number(numberConfig)),
            $elm$parser$Parser$number(numberConfig)
        ])), $elm$parser$Parser$oneOf(_List_fromArray([
            A2($elm$parser$Parser$andThen, function(_v0) {
                return $elm$parser$Parser$problem('');
            }, $elm$parser$Parser$chompIf($elm$core$Char$isAlpha)),
            $elm$parser$Parser$succeed(_Utils_Tuple0)
        ])))));
    }();
    var $elm$core$String$cons = _String_cons;
    var $elm$core$String$fromChar = function(_char) {
        return A2($elm$core$String$cons, _char, '');
    };
    var $elm$parser$Parser$token = function(str) {
        return $elm$parser$Parser$Advanced$token($elm$parser$Parser$toToken(str));
    };
    var $ren_lang$compiler$Parser$Extra$stringEscape = function(escapeChars) {
        var mapString = function(s) {
            return A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(s), $elm$parser$Parser$token(s));
        };
        return A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$token('\\')), $elm$parser$Parser$oneOf(_Utils_ap(A2($elm$core$List$map, mapString, escapeChars), _List_fromArray([
            A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed('\n'), $elm$parser$Parser$token('n')),
            A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed('\t'), $elm$parser$Parser$token('t')),
            A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed('\u000D'), $elm$parser$Parser$token('r')),
            A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed('\\'), $elm$parser$Parser$token('\\'))
        ]))));
    };
    var $ren_lang$compiler$Parser$Extra$string = function(quoteChar) {
        var quoteString = $elm$core$String$fromChar(quoteChar);
        var isNotEndOrEscape = function(c) {
            return !_Utils_eq(c, quoteChar) && !_Utils_eq(c, _Utils_chr('\\'));
        };
        return A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol(quoteString)), A2($elm$parser$Parser$loop, _List_Nil, function(chunks) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(chunk) {
                    return A2($elm$core$List$cons, chunk, chunks);
                }), $ren_lang$compiler$Parser$Extra$stringEscape(_List_fromArray([
                    quoteString
                ])))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Done, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(A2($elm$core$String$join, '', $elm$core$List$reverse(chunks))), $elm$parser$Parser$token(quoteString))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$andThen, function(s) {
                    return s === '' ? $elm$parser$Parser$problem('') : $elm$parser$Parser$succeed(A2($elm$core$List$cons, s, chunks));
                }, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(isNotEndOrEscape))))
            ]));
        }));
    };
    var $ren_lang$compiler$Ren$Compiler$Parse$stringLiteralParser = A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$String), $elm$parser$Parser$oneOf(_List_fromArray([
        $ren_lang$compiler$Parser$Extra$string(_Utils_chr('\"')),
        $ren_lang$compiler$Parser$Extra$string(_Utils_chr('\''))
    ])));
    var $ren_lang$compiler$Ren$Compiler$Parse$valueParser = A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Value), $elm$parser$Parser$oneOf(_List_fromArray([
        $ren_lang$compiler$Ren$Compiler$Parse$booleanLiteralParser,
        $ren_lang$compiler$Ren$Compiler$Parse$numberLiteralParser,
        $ren_lang$compiler$Ren$Compiler$Parse$stringLiteralParser
    ])));
    var $ren_lang$compiler$Ren$Compiler$Parse$wildcardParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Wildcard), $elm$parser$Parser$symbol('_')), $elm$parser$Parser$oneOf(_List_fromArray([
        A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($elm$core$Maybe$Just), $elm$parser$Parser$variable({
            inner: $elm$core$Char$isAlphaNum,
            reserved: $ren_lang$compiler$Ren$Language$keywords,
            start: $elm$core$Char$isLower
        })),
        $elm$parser$Parser$succeed($elm$core$Maybe$Nothing)
    ])));
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$patternParser() {
        var patternParsers = _List_fromArray([
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayDestructureParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$nameParser,
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$objectDestructureParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$valueParser,
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variantDestructureParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$typeofParser,
            $ren_lang$compiler$Ren$Compiler$Parse$wildcardParser
        ]);
        return $elm$parser$Parser$oneOf(_List_fromArray([
            $elm$parser$Parser$backtrackable(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol('(')), $elm$parser$Parser$spaces), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(patternParsers), $elm$parser$Parser$spaces), $elm$parser$Parser$symbol(')')))),
            $elm$parser$Parser$oneOf(patternParsers)
        ]));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayDestructureParser() {
        return A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$ArrayDestructure), $elm$parser$Parser$sequence({
            end: ']',
            item: $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyPatternParser(),
            separator: ',',
            spaces: $elm$parser$Parser$spaces,
            start: '[',
            trailing: $elm$parser$Parser$Forbidden
        }));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$objectDestructureParser() {
        return A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$ObjectDestructure), $elm$parser$Parser$sequence({
            end: '}',
            item: A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($elm$core$Tuple$pair), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$variable({
                inner: $elm$core$Char$isAlphaNum,
                reserved: $ren_lang$compiler$Ren$Language$keywords,
                start: $elm$core$Char$isLower
            }), $elm$parser$Parser$spaces)), $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Maybe$Just), $elm$parser$Parser$symbol(':')), $elm$parser$Parser$spaces), $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyPatternParser()),
                $elm$parser$Parser$succeed($elm$core$Maybe$Nothing)
            ]))),
            separator: ',',
            spaces: $elm$parser$Parser$spaces,
            start: '{',
            trailing: $elm$parser$Parser$Forbidden
        }));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyPatternParser() {
        return $elm$parser$Parser$lazy(function(_v0) {
            return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$patternParser();
        });
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variantDestructureParser() {
        return A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$VariantDestructure), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$variable({
            inner: $elm$core$Char$isAlphaNum,
            reserved: $elm$core$Set$empty,
            start: $elm$core$Basics$eq(_Utils_chr('#'))
        }), $elm$parser$Parser$spaces)), A2($elm$parser$Parser$loop, _List_Nil, function(patterns) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(pattern) {
                    return A2($elm$core$List$cons, pattern, patterns);
                }), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$patternParser(), $elm$parser$Parser$spaces))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed($elm$core$List$reverse(patterns)))
            ]));
        }));
    }
    try {
        var $ren_lang$compiler$Ren$Compiler$Parse$patternParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$patternParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$patternParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$patternParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$arrayDestructureParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayDestructureParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayDestructureParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$arrayDestructureParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$objectDestructureParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$objectDestructureParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$objectDestructureParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$objectDestructureParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$lazyPatternParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyPatternParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyPatternParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$lazyPatternParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$variantDestructureParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variantDestructureParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variantDestructureParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$variantDestructureParser;
        };
    } catch ($) {
        throw 'Some top-level definitions from `Ren.Compiler.Parse` are causing infinite recursion:\n\n  ┌─────┐\n  │    patternParser\n  │     ↓\n  │    arrayDestructureParser\n  │     ↓\n  │    objectDestructureParser\n  │     ↓\n  │    lazyPatternParser\n  │     ↓\n  │    variantDestructureParser\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';
    }
    var $ren_lang$compiler$Ren$Compiler$Parse$lambdaParser = function(prattConfig) {
        return A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Lambda), $elm$parser$Parser$keyword('fun')), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$sequence({
            end: '',
            item: A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $ren_lang$compiler$Parser$Extra$ignorables), $ren_lang$compiler$Ren$Compiler$Parse$patternParser),
            separator: ' ',
            spaces: $elm$parser$Parser$succeed(_Utils_Tuple0),
            start: '',
            trailing: $elm$parser$Parser$Optional
        }), $ren_lang$compiler$Parser$Extra$ignorables), $elm$parser$Parser$symbol('=>')), $ren_lang$compiler$Parser$Extra$ignorables)), A2($dmy$elm_pratt_parser$Pratt$subExpression, 0, prattConfig));
    };
    var $dmy$elm_pratt_parser$Pratt$Advanced$literal = $elm$core$Basics$always;
    var $dmy$elm_pratt_parser$Pratt$literal = $dmy$elm_pratt_parser$Pratt$Advanced$literal;
    var $ren_lang$compiler$Ren$Compiler$Parse$parenthesisedExpressionParser = function(prattConfig) {
        return $elm$parser$Parser$backtrackable(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol('(')), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($dmy$elm_pratt_parser$Pratt$subExpression, 0, prattConfig), $ren_lang$compiler$Parser$Extra$ignorables), $elm$parser$Parser$symbol(')'))));
    };
    var $ren_lang$compiler$Parser$Extra$spaces = $elm$parser$Parser$chompWhile(function(c) {
        return _Utils_eq(c, _Utils_chr(' '));
    });
    var $ren_lang$compiler$Ren$Compiler$Parse$undefinedLiteralParser = $elm$parser$Parser$backtrackable(A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Undefined), $elm$parser$Parser$symbol('()')));
    var $ren_lang$compiler$Ren$Compiler$Parse$accessParser = function(prattConfig) {
        return $elm$parser$Parser$backtrackable(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(F3(function(expr, accessor, accessors) {
            return A2($ren_lang$compiler$Ren$Language$Access, expr, A2($elm$core$List$cons, accessor, accessors));
        })), $elm$parser$Parser$oneOf(_List_fromArray([
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$literalParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$parenthesisedExpressionParser(prattConfig),
            $ren_lang$compiler$Ren$Compiler$Parse$identifierParser
        ]))), $ren_lang$compiler$Ren$Compiler$Parse$cyclic$accessorParser()), A2($elm$parser$Parser$loop, _List_Nil, function(accessors) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(accessor) {
                    return A2($elm$core$List$cons, accessor, accessors);
                }), $ren_lang$compiler$Ren$Compiler$Parse$cyclic$accessorParser())),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed($elm$core$List$reverse(accessors)))
            ]));
        })));
    };
    var $ren_lang$compiler$Ren$Compiler$Parse$applicationArgumentParser = function(prattConfig) {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            $ren_lang$compiler$Ren$Compiler$Parse$parenthesisedExpressionParser(prattConfig),
            $ren_lang$compiler$Ren$Compiler$Parse$accessParser(prattConfig),
            $ren_lang$compiler$Ren$Compiler$Parse$lambdaParser(prattConfig),
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$literalParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$identifierParser
        ]));
    };
    var $ren_lang$compiler$Ren$Compiler$Parse$applicationParser = function(prattConfig) {
        return $elm$parser$Parser$backtrackable(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(F3(function(_function, arg, args) {
            return A2($ren_lang$compiler$Ren$Language$Application, _function, A2($elm$core$List$cons, arg, args));
        })), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(_List_fromArray([
            $ren_lang$compiler$Ren$Compiler$Parse$accessParser(prattConfig),
            $ren_lang$compiler$Ren$Compiler$Parse$parenthesisedExpressionParser(prattConfig),
            $ren_lang$compiler$Ren$Compiler$Parse$identifierParser
        ])), $ren_lang$compiler$Parser$Extra$ignorables)), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$applicationArgumentParser(prattConfig), $ren_lang$compiler$Parser$Extra$ignorables)), A2($elm$parser$Parser$loop, _List_Nil, function(args) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(arg) {
                    return A2($elm$core$List$cons, arg, args);
                }), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$applicationArgumentParser(prattConfig), $ren_lang$compiler$Parser$Extra$ignorables))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed($elm$core$List$reverse(args)))
            ]));
        })));
    };
    var $ren_lang$compiler$Ren$Compiler$Parse$matchParser = function(prattConfig) {
        return A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Match), $elm$parser$Parser$keyword('when')), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyExpressionParser(), $ren_lang$compiler$Parser$Extra$ignorables)), A2($elm$parser$Parser$loop, _List_Nil, function(cases) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(F3(function(pattern, guard, expr) {
                    return A2($elm$core$List$cons, _Utils_Tuple3(pattern, guard, expr), cases);
                })), $elm$parser$Parser$keyword('is')), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$patternParser, $ren_lang$compiler$Parser$Extra$ignorables)), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(_List_fromArray([
                    A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Maybe$Just), $elm$parser$Parser$keyword('if')), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, A2($dmy$elm_pratt_parser$Pratt$subExpression, 0, prattConfig), $ren_lang$compiler$Parser$Extra$ignorables)),
                    $elm$parser$Parser$succeed($elm$core$Maybe$Nothing)
                ])), $elm$parser$Parser$symbol('=>')), $ren_lang$compiler$Parser$Extra$ignorables)), A2($dmy$elm_pratt_parser$Pratt$subExpression, 0, prattConfig))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(function(expr) {
                    return A2($elm$core$List$cons, _Utils_Tuple3($ren_lang$compiler$Ren$Language$Wildcard($elm$core$Maybe$Nothing), $elm$core$Maybe$Nothing, expr), cases);
                }), $elm$parser$Parser$keyword('else')), $ren_lang$compiler$Parser$Extra$ignorables), $elm$parser$Parser$symbol('=>')), $ren_lang$compiler$Parser$Extra$ignorables), A2($dmy$elm_pratt_parser$Pratt$subExpression, 0, prattConfig))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed($elm$core$List$reverse(cases)))
            ]));
        }));
    };
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$declarationParser() {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$functionParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variableParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$enumParser
        ]));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variableParser() {
        return $elm$parser$Parser$backtrackable(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Variable), $elm$parser$Parser$keyword('let')), $ren_lang$compiler$Parser$Extra$spaces), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$patternParser, $ren_lang$compiler$Parser$Extra$spaces), $elm$parser$Parser$symbol('=')), $ren_lang$compiler$Parser$Extra$ignorables)), $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expressionParser()));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$functionParser() {
        return $elm$parser$Parser$backtrackable(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Function), $elm$parser$Parser$keyword('fun')), $ren_lang$compiler$Parser$Extra$spaces), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$variable({
            inner: $elm$core$Char$isAlphaNum,
            reserved: $ren_lang$compiler$Ren$Language$keywords,
            start: $elm$core$Char$isLower
        }), $ren_lang$compiler$Parser$Extra$spaces), $elm$parser$Parser$symbol('=')), $ren_lang$compiler$Parser$Extra$spaces)), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$loop, _List_Nil, function(args) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(arg) {
                    return A2($elm$core$List$cons, arg, args);
                }), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$patternParser, $ren_lang$compiler$Parser$Extra$spaces))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed($elm$core$List$reverse(args)))
            ]));
        }), $ren_lang$compiler$Parser$Extra$spaces), $elm$parser$Parser$symbol('=>')), $ren_lang$compiler$Parser$Extra$ignorables)), $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expressionParser()));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expressionParser() {
        return A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $ren_lang$compiler$Parser$Extra$ignorables), $dmy$elm_pratt_parser$Pratt$expression({
            andThenOneOf: _List_fromArray([
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 1, $elm$parser$Parser$symbol('|>'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Pipe)),
                A3($dmy$elm_pratt_parser$Pratt$infixRight, 9, $elm$parser$Parser$symbol('>>'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Compose)),
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 4, $elm$parser$Parser$symbol('=='), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Eq)),
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 4, $elm$parser$Parser$symbol('!='), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$NotEq)),
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 4, $elm$parser$Parser$symbol('<='), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Lte)),
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 4, $elm$parser$Parser$symbol('>='), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Gte)),
                A3($dmy$elm_pratt_parser$Pratt$infixRight, 3, $elm$parser$Parser$symbol('&&'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$And)),
                A3($dmy$elm_pratt_parser$Pratt$infixRight, 2, $elm$parser$Parser$symbol('||'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Or)),
                A3($dmy$elm_pratt_parser$Pratt$infixRight, 5, $elm$parser$Parser$symbol('::'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Cons)),
                A3($dmy$elm_pratt_parser$Pratt$infixRight, 5, $elm$parser$Parser$symbol('++'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Join)),
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 4, $elm$parser$Parser$symbol('<'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Lt)),
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 4, $elm$parser$Parser$symbol('>'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Gt)),
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 6, $elm$parser$Parser$symbol('+'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Add)),
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 6, $elm$parser$Parser$symbol('-'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Sub)),
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 7, $elm$parser$Parser$symbol('*'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Mul)),
                A3($dmy$elm_pratt_parser$Pratt$infixLeft, 7, $elm$parser$Parser$symbol('/'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Div)),
                A3($dmy$elm_pratt_parser$Pratt$infixRight, 8, $elm$parser$Parser$symbol('^'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Pow)),
                A3($dmy$elm_pratt_parser$Pratt$infixRight, 8, $elm$parser$Parser$symbol('%'), $ren_lang$compiler$Ren$Language$Infix($ren_lang$compiler$Ren$Language$Mod))
            ]),
            oneOf: _List_fromArray([
                $dmy$elm_pratt_parser$Pratt$literal($ren_lang$compiler$Ren$Compiler$Parse$cyclic$blockParser()),
                $ren_lang$compiler$Ren$Compiler$Parse$conditionalParser,
                $ren_lang$compiler$Ren$Compiler$Parse$applicationParser,
                $ren_lang$compiler$Ren$Compiler$Parse$accessParser,
                $ren_lang$compiler$Ren$Compiler$Parse$lambdaParser,
                $ren_lang$compiler$Ren$Compiler$Parse$matchParser,
                $dmy$elm_pratt_parser$Pratt$literal($ren_lang$compiler$Ren$Compiler$Parse$cyclic$literalParser()),
                $ren_lang$compiler$Ren$Compiler$Parse$parenthesisedExpressionParser,
                $dmy$elm_pratt_parser$Pratt$literal($ren_lang$compiler$Ren$Compiler$Parse$identifierParser)
            ]),
            spaces: $ren_lang$compiler$Parser$Extra$ignorables
        }));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$accessorParser() {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$computedAccessorParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$fixedAccessorParser
        ]));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$literalParser() {
        return A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Literal), $elm$parser$Parser$oneOf(_List_fromArray([
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayLiteralParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$booleanLiteralParser,
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$objectLiteralParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$numberLiteralParser,
            $ren_lang$compiler$Ren$Compiler$Parse$stringLiteralParser,
            $ren_lang$compiler$Ren$Compiler$Parse$cyclic$templateLiteralParser(),
            $ren_lang$compiler$Ren$Compiler$Parse$undefinedLiteralParser
        ])));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayLiteralParser() {
        return A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Array), $elm$parser$Parser$sequence({
            end: ']',
            item: $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyExpressionParser(),
            separator: ',',
            spaces: $ren_lang$compiler$Parser$Extra$ignorables,
            start: '[',
            trailing: $elm$parser$Parser$Forbidden
        }));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$blockParser() {
        return $elm$parser$Parser$backtrackable(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Block), $elm$parser$Parser$symbol('{')), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$loop, _List_Nil, function(declarations) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(declaration) {
                    return A2($elm$core$List$cons, declaration, declarations);
                }), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$declarationParser(), $ren_lang$compiler$Parser$Extra$ignorables))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed($elm$core$List$reverse(declarations)))
            ]));
        }), $ren_lang$compiler$Parser$Extra$ignorables), $elm$parser$Parser$keyword('ret')), $ren_lang$compiler$Parser$Extra$ignorables)), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyExpressionParser(), $ren_lang$compiler$Parser$Extra$ignorables), $elm$parser$Parser$symbol('}'))));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$computedAccessorParser() {
        return A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Computed), $elm$parser$Parser$symbol('[')), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyExpressionParser(), $ren_lang$compiler$Parser$Extra$ignorables), $elm$parser$Parser$symbol(']')));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$objectLiteralParser() {
        return A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(A2($elm$core$Basics$composeR, $elm$core$Dict$fromList, $ren_lang$compiler$Ren$Language$Object)), $elm$parser$Parser$sequence({
            end: '}',
            item: $elm$parser$Parser$oneOf(_List_fromArray([
                $elm$parser$Parser$backtrackable(A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($elm$core$Tuple$pair), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$variable({
                    inner: $elm$core$Char$isAlphaNum,
                    reserved: $ren_lang$compiler$Ren$Language$keywords,
                    start: $elm$core$Char$isLower
                }), $ren_lang$compiler$Parser$Extra$ignorables), $elm$parser$Parser$symbol(':')), $ren_lang$compiler$Parser$Extra$ignorables)), $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyExpressionParser())),
                A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(name) {
                    return _Utils_Tuple2(name, $ren_lang$compiler$Ren$Language$Identifier($ren_lang$compiler$Ren$Language$Local(name)));
                }), $elm$parser$Parser$variable({
                    inner: $elm$core$Char$isAlphaNum,
                    reserved: $ren_lang$compiler$Ren$Language$keywords,
                    start: $elm$core$Char$isLower
                }))
            ])),
            separator: ',',
            spaces: $ren_lang$compiler$Parser$Extra$ignorables,
            start: '{',
            trailing: $elm$parser$Parser$Forbidden
        }));
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyExpressionParser() {
        return $elm$parser$Parser$lazy(function(_v0) {
            return $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expressionParser();
        });
    }
    function $ren_lang$compiler$Ren$Compiler$Parse$cyclic$templateLiteralParser() {
        var isRawText = function(c) {
            return !_Utils_eq(c, _Utils_chr('`')) && !_Utils_eq(c, _Utils_chr('\\')) && !_Utils_eq(c, _Utils_chr('$'));
        };
        return A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Template), $elm$parser$Parser$symbol('`')), A2($elm$parser$Parser$loop, _List_Nil, function(chunks) {
            return $elm$parser$Parser$oneOf(_List_fromArray([
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed(function(s) {
                    return A2($elm$core$List$cons, $ren_lang$compiler$Ren$Language$Text(s), chunks);
                }), $ren_lang$compiler$Parser$Extra$stringEscape(_List_fromArray([
                    '`',
                    '$'
                ])))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(function(expr) {
                    return A2($elm$core$List$cons, $ren_lang$compiler$Ren$Language$Expr(expr), chunks);
                }), $elm$parser$Parser$token('${')), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyExpressionParser(), $elm$parser$Parser$token('}')))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Done, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$List$reverse(chunks)), $elm$parser$Parser$token('`'))),
                A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$andThen, function(s) {
                    return s === '' ? $elm$parser$Parser$problem('') : $elm$parser$Parser$succeed(A2($elm$core$List$cons, $ren_lang$compiler$Ren$Language$Text(s), chunks));
                }, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(isRawText))))
            ]));
        }));
    }
    try {
        var $ren_lang$compiler$Ren$Compiler$Parse$declarationParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$declarationParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$declarationParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$declarationParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$variableParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variableParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$variableParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$variableParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$functionParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$functionParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$functionParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$functionParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$expressionParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expressionParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$expressionParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$expressionParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$accessorParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$accessorParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$accessorParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$accessorParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$literalParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$literalParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$literalParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$literalParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$arrayLiteralParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayLiteralParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$arrayLiteralParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$arrayLiteralParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$blockParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$blockParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$blockParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$blockParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$computedAccessorParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$computedAccessorParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$computedAccessorParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$computedAccessorParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$objectLiteralParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$objectLiteralParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$objectLiteralParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$objectLiteralParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$lazyExpressionParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyExpressionParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$lazyExpressionParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$lazyExpressionParser;
        };
        var $ren_lang$compiler$Ren$Compiler$Parse$templateLiteralParser = $ren_lang$compiler$Ren$Compiler$Parse$cyclic$templateLiteralParser();
        $ren_lang$compiler$Ren$Compiler$Parse$cyclic$templateLiteralParser = function() {
            return $ren_lang$compiler$Ren$Compiler$Parse$templateLiteralParser;
        };
    } catch ($1) {
        throw 'Some top-level definitions from `Ren.Compiler.Parse` are causing infinite recursion:\n\n  ┌─────┐\n  │    declarationParser\n  │     ↓\n  │    variableParser\n  │     ↓\n  │    functionParser\n  │     ↓\n  │    expressionParser\n  │     ↓\n  │    accessParser\n  │     ↓\n  │    accessorParser\n  │     ↓\n  │    applicationArgumentParser\n  │     ↓\n  │    applicationParser\n  │     ↓\n  │    literalParser\n  │     ↓\n  │    arrayLiteralParser\n  │     ↓\n  │    blockParser\n  │     ↓\n  │    computedAccessorParser\n  │     ↓\n  │    objectLiteralParser\n  │     ↓\n  │    lazyExpressionParser\n  │     ↓\n  │    matchParser\n  │     ↓\n  │    templateLiteralParser\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';
    }
    var $elm$parser$Parser$ExpectingEnd = {
        $: 'ExpectingEnd'
    };
    var $elm$parser$Parser$Advanced$end = function(x) {
        return $elm$parser$Parser$Advanced$Parser(function(s) {
            return _Utils_eq($elm$core$String$length(s.src), s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2($elm$parser$Parser$Advanced$Bad, false, A2($elm$parser$Parser$Advanced$fromState, s, x));
        });
    };
    var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
    var $ren_lang$compiler$Ren$Compiler$Parse$importNamespaceParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, $elm$parser$Parser$succeed($elm$core$List$cons), $elm$parser$Parser$variable({
        inner: $elm$core$Char$isAlphaNum,
        reserved: $elm$core$Set$empty,
        start: $elm$core$Char$isUpper
    })), A2($elm$parser$Parser$loop, _List_Nil, function(namespaces) {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(function(ns) {
                return A2($elm$core$List$cons, ns, namespaces);
            }), $elm$parser$Parser$symbol('.')), $elm$parser$Parser$variable({
                inner: $elm$core$Char$isAlphaNum,
                reserved: $elm$core$Set$empty,
                start: $elm$core$Char$isUpper
            }))),
            A2($elm$parser$Parser$map, $elm$parser$Parser$Done, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$List$reverse(namespaces)), $elm$parser$Parser$oneOf(_List_fromArray([
                $elm$parser$Parser$token(' '),
                $elm$parser$Parser$token('\n'),
                $elm$parser$Parser$end
            ]))))
        ]));
    }));
    var $ren_lang$compiler$Ren$Compiler$Parse$importParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Import), $elm$parser$Parser$keyword('import')), $ren_lang$compiler$Parser$Extra$spaces), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(_List_fromArray([
        $ren_lang$compiler$Parser$Extra$string(_Utils_chr('\'')),
        $ren_lang$compiler$Parser$Extra$string(_Utils_chr('\"'))
    ])), $ren_lang$compiler$Parser$Extra$spaces)), A2($elm$parser$Parser$ignorer, $elm$parser$Parser$oneOf(_List_fromArray([
        A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$keyword('as')), $ren_lang$compiler$Parser$Extra$spaces), $ren_lang$compiler$Ren$Compiler$Parse$importNamespaceParser),
        $elm$parser$Parser$succeed(_List_Nil)
    ])), $ren_lang$compiler$Parser$Extra$spaces)), $elm$parser$Parser$oneOf(_List_fromArray([
        A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$keyword('exposing')), $ren_lang$compiler$Parser$Extra$spaces), $elm$parser$Parser$sequence({
            end: '}',
            item: $elm$parser$Parser$variable({
                inner: $elm$core$Char$isAlphaNum,
                reserved: $ren_lang$compiler$Ren$Language$keywords,
                start: function(c) {
                    return $elm$core$Char$isLower(c) || _Utils_eq(c, _Utils_chr('#'));
                }
            }),
            separator: ',',
            spaces: $elm$parser$Parser$spaces,
            start: '{',
            trailing: $elm$parser$Parser$Forbidden
        })),
        $elm$parser$Parser$succeed(_List_Nil)
    ])));
    var $ren_lang$compiler$Ren$Language$Private = {
        $: 'Private'
    };
    var $ren_lang$compiler$Ren$Compiler$Parse$visibilityParser = $elm$parser$Parser$oneOf(_List_fromArray([
        A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Public), $elm$parser$Parser$keyword('pub')),
        $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Private)
    ]));
    var $ren_lang$compiler$Ren$Compiler$Parse$moduleParser = A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed($ren_lang$compiler$Ren$Language$Module), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$loop, _List_Nil, function(imports_) {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(function(i) {
                return A2($elm$core$List$cons, i, imports_);
            }), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$importParser, $ren_lang$compiler$Parser$Extra$ignorables))),
            A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed($elm$core$List$reverse(imports_)))
        ]));
    }), $ren_lang$compiler$Parser$Extra$ignorables)), A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$ignorer, A2($elm$parser$Parser$loop, _List_Nil, function(declarations) {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            A2($elm$parser$Parser$map, $elm$parser$Parser$Loop, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$keeper, A2($elm$parser$Parser$ignorer, $elm$parser$Parser$succeed(F2(function(visibility, declaration) {
                return A2($elm$core$List$cons, _Utils_Tuple2(visibility, declaration), declarations);
            })), $ren_lang$compiler$Parser$Extra$ignorables), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$visibilityParser, $elm$parser$Parser$spaces)), A2($elm$parser$Parser$ignorer, $ren_lang$compiler$Ren$Compiler$Parse$declarationParser, $ren_lang$compiler$Parser$Extra$ignorables))),
            A2($elm$parser$Parser$map, $elm$parser$Parser$Done, $elm$parser$Parser$succeed($elm$core$List$reverse(declarations)))
        ]));
    }), $ren_lang$compiler$Parser$Extra$ignorables), $elm$parser$Parser$end));
    var $elm$parser$Parser$DeadEnd = F3(function(row, col, problem) {
        return {
            col: col,
            problem: problem,
            row: row
        };
    });
    var $elm$parser$Parser$problemToDeadEnd = function(p) {
        return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
    };
    var $elm$parser$Parser$Advanced$bagToList = F2(function(bag, list) {
        bagToList: while(true)switch(bag.$){
            case 'Empty':
                return list;
            case 'AddRight':
                var bag1 = bag.a;
                var x = bag.b;
                var $temp$bag = bag1, $temp$list = A2($elm$core$List$cons, x, list);
                bag = $temp$bag;
                list = $temp$list;
                continue bagToList;
            default:
                var bag1 = bag.a;
                var bag2 = bag.b;
                var $temp$bag = bag1, $temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
                bag = $temp$bag;
                list = $temp$list;
                continue bagToList;
        }
    });
    var $elm$parser$Parser$Advanced$run = F2(function(_v0, src) {
        var parse = _v0.a;
        var _v1 = parse({
            col: 1,
            context: _List_Nil,
            indent: 1,
            offset: 0,
            row: 1,
            src: src
        });
        if (_v1.$ === 'Good') {
            var value = _v1.b;
            return $elm$core$Result$Ok(value);
        } else {
            var bag = _v1.b;
            return $elm$core$Result$Err(A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
        }
    });
    var $elm$parser$Parser$run = F2(function(parser, source) {
        var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
        if (_v0.$ === 'Ok') {
            var a = _v0.a;
            return $elm$core$Result$Ok(a);
        } else {
            var problems = _v0.a;
            return $elm$core$Result$Err(A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Parse$moduleFromSource = $elm$parser$Parser$run($ren_lang$compiler$Ren$Compiler$Parse$moduleParser);
    var $ren_lang$compiler$Ren$Compiler$parse = $ren_lang$compiler$Ren$Compiler$Parse$moduleFromSource;
    var $elm$core$String$replace = F3(function(before, after, string) {
        return A2($elm$core$String$join, after, A2($elm$core$String$split, before, string));
    });
    var $elm$core$String$startsWith = _String_startsWith;
    var $author$project$Main$resolveImports = F2(function(stdlib, _v0) {
        var imports = _v0.imports;
        var declarations = _v0.declarations;
        return {
            declarations: declarations,
            imports: A2($elm$core$List$map, function(_v1) {
                var path = _v1.path;
                var name = _v1.name;
                var bindings = _v1.bindings;
                return {
                    bindings: bindings,
                    name: name,
                    path: A2($elm$core$String$startsWith, 'ext ', path) ? A3($elm$core$String$replace, 'ext ', '', path) : A2($elm$core$String$startsWith, '.', path) ? path + '.ren.mjs' : stdlib + ('/' + (path + '.ren.mjs'))
                };
            }, imports)
        };
    });
    var $ren_lang$compiler$Ren$Compiler$ESModule = {
        $: 'ESModule'
    };
    var $author$project$Parser$Extra$deadEndToString = function(deadEnd) {
        var position = 'row:' + ($elm$core$String$fromInt(deadEnd.row) + (' col:' + $elm$core$String$fromInt(deadEnd.col)));
        var _v0 = deadEnd.problem;
        switch(_v0.$){
            case 'Expecting':
                var str = _v0.a;
                return 'Expecting `' + (str + ('` at ' + position));
            case 'ExpectingInt':
                return 'ExpectingInt at ' + position;
            case 'ExpectingHex':
                return 'ExpectingHex at ' + position;
            case 'ExpectingOctal':
                return 'ExpectingOctal at ' + position;
            case 'ExpectingBinary':
                return 'ExpectingBinary at ' + position;
            case 'ExpectingFloat':
                return 'ExpectingFloat at ' + position;
            case 'ExpectingNumber':
                return 'ExpectingNumber at ' + position;
            case 'ExpectingVariable':
                return 'ExpectingVariable at ' + position;
            case 'ExpectingSymbol':
                var str = _v0.a;
                return 'ExpectingSymbol `' + (str + ('` at ' + position));
            case 'ExpectingKeyword':
                var str = _v0.a;
                return 'ExpectingKeyword `' + (str + ('` at ' + position));
            case 'ExpectingEnd':
                return 'ExpectingEnd at ' + position;
            case 'UnexpectedChar':
                return 'UnexpectedChar at ' + position;
            case 'Problem':
                var str = _v0.a;
                return 'ProblemString `' + (str + ('` at ' + position));
            default:
                return 'BadRepeat at ' + position;
        }
    };
    var $author$project$Parser$Extra$deadEndsToString = A2($elm$core$Basics$composeR, $elm$core$List$map($author$project$Parser$Extra$deadEndToString), $elm$core$String$join('\n'));
    var $the_sett$elm_pretty_printer$Internals$Concatenate = F2(function(a, b) {
        return {
            $: 'Concatenate',
            a: a,
            b: b
        };
    });
    var $the_sett$elm_pretty_printer$Pretty$append = F2(function(doc1, doc2) {
        return A2($the_sett$elm_pretty_printer$Internals$Concatenate, function(_v0) {
            return doc1;
        }, function(_v1) {
            return doc2;
        });
    });
    var $elm_community$basics_extra$Basics$Extra$flip = F3(function(f, b, a) {
        return A2(f, a, b);
    });
    var $the_sett$elm_pretty_printer$Pretty$a = $elm_community$basics_extra$Basics$Extra$flip($the_sett$elm_pretty_printer$Pretty$append);
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding = function(a) {
        return {
            $: 'Binding',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Equality = function(a) {
        return {
            $: 'Equality',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Existential = function(a) {
        return {
            $: 'Existential',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsArray = function(a) {
        return {
            $: 'IsArray',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsObject = function(a) {
        return {
            $: 'IsObject',
            a: a
        };
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsType = function(a) {
        return {
            $: 'IsType',
            a: a
        };
    };
    var $the_sett$elm_pretty_printer$Internals$Empty = {
        $: 'Empty'
    };
    var $the_sett$elm_pretty_printer$Pretty$empty = $the_sett$elm_pretty_printer$Internals$Empty;
    var $the_sett$elm_pretty_printer$Internals$Text = F2(function(a, b) {
        return {
            $: 'Text',
            a: a,
            b: b
        };
    });
    var $the_sett$elm_pretty_printer$Pretty$string = function(val) {
        return A2($the_sett$elm_pretty_printer$Internals$Text, val, $elm$core$Maybe$Nothing);
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$bindingFromMatchPattern = function(pattern) {
        switch(pattern.$){
            case 'Existential':
                return $the_sett$elm_pretty_printer$Pretty$empty;
            case 'Equality':
                return $the_sett$elm_pretty_printer$Pretty$empty;
            case 'Binding':
                var name = pattern.a.name;
                var path = pattern.a.path;
                return A2($the_sett$elm_pretty_printer$Pretty$a, path, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' = '), A2($the_sett$elm_pretty_printer$Pretty$a, name, $the_sett$elm_pretty_printer$Pretty$string('var '))));
            case 'IsArray':
                return $the_sett$elm_pretty_printer$Pretty$empty;
            case 'IsObject':
                return $the_sett$elm_pretty_printer$Pretty$empty;
            default:
                return $the_sett$elm_pretty_printer$Pretty$empty;
        }
    };
    var $the_sett$elm_pretty_printer$Pretty$char = function(c) {
        return A2($the_sett$elm_pretty_printer$Internals$Text, $elm$core$String$fromChar(c), $elm$core$Maybe$Nothing);
    };
    var $the_sett$elm_pretty_printer$Pretty$surround = F3(function(left, right, doc) {
        return A2($the_sett$elm_pretty_printer$Pretty$append, A2($the_sett$elm_pretty_printer$Pretty$append, left, doc), right);
    });
    var $the_sett$elm_pretty_printer$Pretty$braces = function(doc) {
        return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), doc);
    };
    var $the_sett$elm_pretty_printer$Pretty$brackets = A2($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('[')), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(']')));
    var $the_sett$elm_pretty_printer$Pretty$parens = function(doc) {
        return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('(')), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(')')), doc);
    };
    var $ren_lang$compiler$Pretty$Extra$singleQuotes = function(s) {
        return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('\'')), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('\'')), $the_sett$elm_pretty_printer$Pretty$string(s));
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$checkFromMatchPattern = function(pattern) {
        switch(pattern.$){
            case 'Existential':
                var name = pattern.a.name;
                var path = pattern.a.path;
                return A2($the_sett$elm_pretty_printer$Pretty$a, path, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' in '), name));
            case 'Equality':
                var value = pattern.a.value;
                var path = pattern.a.path;
                return A2($the_sett$elm_pretty_printer$Pretty$a, value, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' == '), path));
            case 'Binding':
                return $the_sett$elm_pretty_printer$Pretty$empty;
            case 'IsArray':
                var path = pattern.a.path;
                var length = pattern.a.length;
                return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromInt(length)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' >= '), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string('.length'), A2($the_sett$elm_pretty_printer$Pretty$a, path, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' && '), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens(path), $the_sett$elm_pretty_printer$Pretty$string('Array.isArray')))))));
            case 'IsObject':
                var path = pattern.a;
                return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Pretty$Extra$singleQuotes('object'), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' == '), A2($the_sett$elm_pretty_printer$Pretty$a, path, $the_sett$elm_pretty_printer$Pretty$string('typeof '))));
            default:
                var path = pattern.a.path;
                var _typeof = pattern.a._typeof;
                return A2($the_sett$elm_pretty_printer$Pretty$a, _typeof, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' == '), A2($the_sett$elm_pretty_printer$Pretty$a, path, $the_sett$elm_pretty_printer$Pretty$string('typeof '))));
        }
    };
    var $the_sett$elm_pretty_printer$Internals$Line = F2(function(a, b) {
        return {
            $: 'Line',
            a: a,
            b: b
        };
    });
    var $the_sett$elm_pretty_printer$Pretty$line = A2($the_sett$elm_pretty_printer$Internals$Line, ' ', '');
    var $ren_lang$compiler$Pretty$Extra$doubleLine = A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$line);
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$esPrecedenceFromInfixOperator = function(operator) {
        switch(operator.$){
            case 'Add':
                return $elm$core$Maybe$Just(14);
            case 'Sub':
                return $elm$core$Maybe$Just(14);
            case 'Mul':
                return $elm$core$Maybe$Just(15);
            case 'Div':
                return $elm$core$Maybe$Just(15);
            case 'Pow':
                return $elm$core$Maybe$Just(16);
            case 'Mod':
                return $elm$core$Maybe$Just(15);
            case 'Eq':
                return $elm$core$Maybe$Just(11);
            case 'NotEq':
                return $elm$core$Maybe$Just(11);
            case 'Lt':
                return $elm$core$Maybe$Just(12);
            case 'Lte':
                return $elm$core$Maybe$Just(12);
            case 'Gt':
                return $elm$core$Maybe$Just(12);
            case 'Gte':
                return $elm$core$Maybe$Just(12);
            case 'And':
                return $elm$core$Maybe$Just(7);
            case 'Or':
                return $elm$core$Maybe$Just(6);
            default:
                return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$core$Char$fromCode = _Char_fromCode;
    var $the_sett$elm_pretty_printer$Pretty$join = F2(function(sep, docs) {
        join: while(true){
            if (!docs.b) return $the_sett$elm_pretty_printer$Pretty$empty;
            else if (docs.a.$ === 'Empty') {
                var _v1 = docs.a;
                var ds = docs.b;
                var $temp$sep = sep, $temp$docs = ds;
                sep = $temp$sep;
                docs = $temp$docs;
                continue join;
            } else {
                var d = docs.a;
                var ds = docs.b;
                var step = F2(function(x, rest) {
                    if (x.$ === 'Empty') return rest;
                    else {
                        var doc = x;
                        return A2($the_sett$elm_pretty_printer$Pretty$append, sep, A2($the_sett$elm_pretty_printer$Pretty$append, doc, rest));
                    }
                });
                var spersed = A3($elm$core$List$foldr, step, $the_sett$elm_pretty_printer$Pretty$empty, ds);
                return A2($the_sett$elm_pretty_printer$Pretty$append, d, spersed);
            }
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromIdentifier = function(identifier) {
        switch(identifier.$){
            case 'Local':
                var name = identifier.a;
                return $the_sett$elm_pretty_printer$Pretty$string(name);
            case 'Constructor':
                var name = identifier.a;
                return $the_sett$elm_pretty_printer$Pretty$string(A3($elm$core$String$replace, '#', '$', name));
            case 'Scoped':
                var namespace = identifier.a;
                var name = identifier.b;
                return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromIdentifier(name), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('$')), A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, namespace))));
            case 'Operator':
                switch(identifier.a.$){
                    case 'Pipe':
                        var _v1 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Function.pipe');
                    case 'Compose':
                        var _v2 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Function.compose');
                    case 'Add':
                        var _v3 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Math.add');
                    case 'Sub':
                        var _v4 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Math.sub');
                    case 'Mul':
                        var _v5 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Math.mul');
                    case 'Div':
                        var _v6 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Math.div');
                    case 'Pow':
                        var _v7 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Math.pow');
                    case 'Mod':
                        var _v8 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Math.mod');
                    case 'Eq':
                        var _v9 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Compare.eq');
                    case 'NotEq':
                        var _v10 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Compare.noteq');
                    case 'Lt':
                        var _v11 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Compare.lt');
                    case 'Lte':
                        var _v12 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Compare.lte');
                    case 'Gt':
                        var _v13 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Compare.gt');
                    case 'Gte':
                        var _v14 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Compare.gte');
                    case 'And':
                        var _v15 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Logic.and');
                    case 'Or':
                        var _v16 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Logic.or');
                    case 'Cons':
                        var _v17 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Array.cons');
                    default:
                        var _v18 = identifier.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('Array.join');
                }
            default:
                var field = identifier.a;
                return $the_sett$elm_pretty_printer$Pretty$parens(A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(field), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' => $.'), $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('$'))))));
        }
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern = function(pattern) {
        fromPattern: while(true){
            var replaceLiteral = function(p) {
                switch(p.$){
                    case 'ArrayDestructure':
                        var ps = p.a;
                        return $ren_lang$compiler$Ren$Language$ArrayDestructure(A2($elm$core$List$map, replaceLiteral, ps));
                    case 'Name':
                        return p;
                    case 'ObjectDestructure':
                        var ps = p.a;
                        return $ren_lang$compiler$Ren$Language$ObjectDestructure(A2($elm$core$List$map, $elm$core$Tuple$mapSecond($elm$core$Maybe$map(replaceLiteral)), ps));
                    case 'Value':
                        return $ren_lang$compiler$Ren$Language$Wildcard($elm$core$Maybe$Nothing);
                    case 'VariantDestructure':
                        var tag = p.a;
                        var ps = p.b;
                        return A2($ren_lang$compiler$Ren$Language$VariantDestructure, tag, A2($elm$core$List$map, replaceLiteral, ps));
                    case 'Typeof':
                        var name = p.b;
                        return p;
                    default:
                        return p;
                }
            };
            switch(pattern.$){
                case 'ArrayDestructure':
                    var patterns = pattern.a;
                    return $the_sett$elm_pretty_printer$Pretty$brackets(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(', '), A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern, A2($elm$core$List$map, replaceLiteral, patterns))));
                case 'Name':
                    var name = pattern.a;
                    return $the_sett$elm_pretty_printer$Pretty$string(name);
                case 'ObjectDestructure':
                    var patterns = pattern.a;
                    return $the_sett$elm_pretty_printer$Pretty$braces(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(', '), A2($elm$core$List$map, function(_v2) {
                        var k = _v2.a;
                        var v = _v2.b;
                        if (v.$ === 'Just') {
                            var p = v.a;
                            return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern(p), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(': '), $the_sett$elm_pretty_printer$Pretty$string(k)));
                        } else return $the_sett$elm_pretty_printer$Pretty$string(k);
                    }, A2($elm$core$List$map, $elm$core$Tuple$mapSecond($elm$core$Maybe$map(replaceLiteral)), patterns))));
                case 'Value':
                    var $temp$pattern = $ren_lang$compiler$Ren$Language$Wildcard($elm$core$Maybe$Nothing);
                    pattern = $temp$pattern;
                    continue fromPattern;
                case 'VariantDestructure':
                    var tag1 = pattern.a;
                    var patterns = pattern.b;
                    return $the_sett$elm_pretty_printer$Pretty$brackets(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(', '), A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern, A2($elm$core$List$map, replaceLiteral, A2($elm$core$List$cons, $ren_lang$compiler$Ren$Language$Value($ren_lang$compiler$Ren$Language$String(tag1)), patterns)))));
                case 'Typeof':
                    var name = pattern.b;
                    return $the_sett$elm_pretty_printer$Pretty$string(name);
                default:
                    if (pattern.a.$ === 'Just') {
                        var name = pattern.a.a;
                        return $the_sett$elm_pretty_printer$Pretty$string('_' + name);
                    } else {
                        var _v4 = pattern.a;
                        return $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('_'));
                    }
            }
        }
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromVisibility = function(visibility) {
        if (visibility.$ === 'Public') return $the_sett$elm_pretty_printer$Pretty$string('export ');
        else return $the_sett$elm_pretty_printer$Pretty$empty;
    };
    var $the_sett$elm_pretty_printer$Internals$Union = F2(function(a, b) {
        return {
            $: 'Union',
            a: a,
            b: b
        };
    });
    var $the_sett$elm_pretty_printer$Internals$Nest = F2(function(a, b) {
        return {
            $: 'Nest',
            a: a,
            b: b
        };
    });
    var $the_sett$elm_pretty_printer$Internals$flatten = function(doc) {
        flatten: while(true)switch(doc.$){
            case 'Concatenate':
                var doc1 = doc.a;
                var doc2 = doc.b;
                return A2($the_sett$elm_pretty_printer$Internals$Concatenate, function(_v1) {
                    return $the_sett$elm_pretty_printer$Internals$flatten(doc1(_Utils_Tuple0));
                }, function(_v2) {
                    return $the_sett$elm_pretty_printer$Internals$flatten(doc2(_Utils_Tuple0));
                });
            case 'Nest':
                var i = doc.a;
                var doc1 = doc.b;
                return A2($the_sett$elm_pretty_printer$Internals$Nest, i, function(_v3) {
                    return $the_sett$elm_pretty_printer$Internals$flatten(doc1(_Utils_Tuple0));
                });
            case 'Union':
                var doc1 = doc.a;
                var doc2 = doc.b;
                var $temp$doc = doc1;
                doc = $temp$doc;
                continue flatten;
            case 'Line':
                var hsep = doc.a;
                return A2($the_sett$elm_pretty_printer$Internals$Text, hsep, $elm$core$Maybe$Nothing);
            case 'Nesting':
                var fn = doc.a;
                var $temp$doc = fn(0);
                doc = $temp$doc;
                continue flatten;
            case 'Column':
                var fn = doc.a;
                var $temp$doc = fn(0);
                doc = $temp$doc;
                continue flatten;
            default:
                var x = doc;
                return x;
        }
    };
    var $the_sett$elm_pretty_printer$Pretty$group = function(doc) {
        return A2($the_sett$elm_pretty_printer$Internals$Union, $the_sett$elm_pretty_printer$Internals$flatten(doc), doc);
    };
    var $the_sett$elm_pretty_printer$Internals$copy = F2(function(i, s) {
        return !i ? '' : _Utils_ap(s, A2($the_sett$elm_pretty_printer$Internals$copy, i - 1, s));
    });
    var $the_sett$elm_pretty_printer$Internals$Column = function(a) {
        return {
            $: 'Column',
            a: a
        };
    };
    var $the_sett$elm_pretty_printer$Pretty$column = $the_sett$elm_pretty_printer$Internals$Column;
    var $the_sett$elm_pretty_printer$Pretty$nest = F2(function(depth, doc) {
        return A2($the_sett$elm_pretty_printer$Internals$Nest, depth, function(_v0) {
            return doc;
        });
    });
    var $the_sett$elm_pretty_printer$Internals$Nesting = function(a) {
        return {
            $: 'Nesting',
            a: a
        };
    };
    var $the_sett$elm_pretty_printer$Pretty$nesting = $the_sett$elm_pretty_printer$Internals$Nesting;
    var $the_sett$elm_pretty_printer$Pretty$align = function(doc) {
        return $the_sett$elm_pretty_printer$Pretty$column(function(currentColumn) {
            return $the_sett$elm_pretty_printer$Pretty$nesting(function(indentLvl) {
                return A2($the_sett$elm_pretty_printer$Pretty$nest, currentColumn - indentLvl, doc);
            });
        });
    };
    var $the_sett$elm_pretty_printer$Pretty$hang = F2(function(spaces, doc) {
        return $the_sett$elm_pretty_printer$Pretty$align(A2($the_sett$elm_pretty_printer$Pretty$nest, spaces, doc));
    });
    var $the_sett$elm_pretty_printer$Pretty$indent = F2(function(spaces, doc) {
        return A2($the_sett$elm_pretty_printer$Pretty$hang, spaces, A2($the_sett$elm_pretty_printer$Pretty$append, $the_sett$elm_pretty_printer$Pretty$string(A2($the_sett$elm_pretty_printer$Internals$copy, spaces, ' ')), doc));
    });
    var $elm$core$List$intersperse = F2(function(sep, xs) {
        if (!xs.b) return _List_Nil;
        else {
            var hd = xs.a;
            var tl = xs.b;
            var step = F2(function(x, rest) {
                return A2($elm$core$List$cons, sep, A2($elm$core$List$cons, x, rest));
            });
            var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
            return A2($elm$core$List$cons, hd, spersed);
        }
    });
    var $the_sett$elm_pretty_printer$Pretty$lines = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$line);
    var $elm$core$List$isEmpty = function(xs) {
        if (!xs.b) return true;
        else return false;
    };
    var $ren_lang$compiler$Pretty$Extra$mapNonEmptyList = F2(function(list, mapper) {
        return $elm$core$List$isEmpty(list) ? $the_sett$elm_pretty_printer$Pretty$empty : mapper(list);
    });
    var $the_sett$elm_pretty_printer$Pretty$space = $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr(' '));
    var $ren_lang$compiler$Pretty$Extra$when = F2(function(condition, doc) {
        return condition ? doc : $the_sett$elm_pretty_printer$Pretty$empty;
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromAccess = F2(function(expr, accessors) {
        return A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$empty, A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromAccessor, accessors)), $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpressionToSingleTerm(expr));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromAccessor = function(accessor) {
        if (accessor.$ === 'Computed') {
            var expr = accessor.a;
            return $the_sett$elm_pretty_printer$Pretty$brackets($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expr));
        } else {
            var field = accessor.a;
            return $the_sett$elm_pretty_printer$Pretty$string('.' + field);
        }
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromApplication = F2(function(expr, args) {
        return A2($the_sett$elm_pretty_printer$Pretty$nest, 4, $the_sett$elm_pretty_printer$Pretty$group(A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$lines(A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromArgument, args)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpressionToSingleTerm(expr)))));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromArgument = function(arg) {
        if (arg.$ === 'Literal' && arg.a.$ === 'Undefined') {
            var _v44 = arg.a;
            return $the_sett$elm_pretty_printer$Pretty$string('()');
        } else return $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(arg));
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromBlock = F2(function(bindings, expr) {
        return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string('()'), $the_sett$elm_pretty_printer$Pretty$parens(A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expr), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string('return '), A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Pretty$Extra$doubleLine, A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$empty, A2($elm$core$List$intersperse, $ren_lang$compiler$Pretty$Extra$doubleLine, A2($elm$core$List$map, A2($elm$core$Basics$composeR, $elm$core$Tuple$pair($ren_lang$compiler$Ren$Language$Private), $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromDeclaration), bindings))))))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$string('() => {')))))));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromCase = F2(function(ident, _v34) {
        fromCase: while(true){
            var pattern = _v34.a;
            var guard = _v34.b;
            var body = _v34.c;
            switch(pattern.$){
                case 'ArrayDestructure':
                    var patterns = pattern.a;
                    var matchPatterns = A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPatternsFromArrayDestructure, ident, patterns);
                    var checks = function(checks_) {
                        return A2($ren_lang$compiler$Pretty$Extra$mapNonEmptyList, checks_, $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$string(' && ')));
                    }(A2($elm$core$List$filter, $elm$core$Basics$neq($the_sett$elm_pretty_printer$Pretty$empty), A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$checkFromMatchPattern, matchPatterns)));
                    var bindings = function(bindings_) {
                        return A2($ren_lang$compiler$Pretty$Extra$mapNonEmptyList, bindings_, $the_sett$elm_pretty_printer$Pretty$lines);
                    }(A2($elm$core$List$filter, $elm$core$Basics$neq($the_sett$elm_pretty_printer$Pretty$empty), A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$bindingFromMatchPattern, matchPatterns)));
                    return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, function() {
                        if (guard.$ === 'Just') {
                            var expr = guard.a;
                            return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return '))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expr)), $the_sett$elm_pretty_printer$Pretty$string('if ')))))))));
                        } else return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return ')));
                    }(), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, bindings), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens(checks), $the_sett$elm_pretty_printer$Pretty$string('if '))))))))));
                case 'Name':
                    var name = pattern.a;
                    return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, function() {
                        if (guard.$ === 'Just') {
                            var expr = guard.a;
                            return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return '))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expr)), $the_sett$elm_pretty_printer$Pretty$string('if ')))))))));
                        } else return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return ')));
                    }(), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' = $'), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string('var '))))))));
                case 'ObjectDestructure':
                    var patterns = pattern.a;
                    var matchPatterns = A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPatternsFromObjectDestructure, ident, patterns);
                    var checks = function(checks_) {
                        return A2($ren_lang$compiler$Pretty$Extra$mapNonEmptyList, checks_, $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$string(' && ')));
                    }(A2($elm$core$List$filter, $elm$core$Basics$neq($the_sett$elm_pretty_printer$Pretty$empty), A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$checkFromMatchPattern, matchPatterns)));
                    var bindings = function(bindings_) {
                        return A2($ren_lang$compiler$Pretty$Extra$mapNonEmptyList, bindings_, $the_sett$elm_pretty_printer$Pretty$lines);
                    }(A2($elm$core$List$filter, $elm$core$Basics$neq($the_sett$elm_pretty_printer$Pretty$empty), A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$bindingFromMatchPattern, matchPatterns)));
                    return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, function() {
                        if (guard.$ === 'Just') {
                            var expr = guard.a;
                            return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return '))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expr)), $the_sett$elm_pretty_printer$Pretty$string('if ')))))))));
                        } else return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return ')));
                    }(), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, bindings), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens(checks), $the_sett$elm_pretty_printer$Pretty$string('if '))))))))));
                case 'Value':
                    var primitive = pattern.a;
                    return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, function() {
                        if (guard.$ === 'Just') {
                            var expr = guard.a;
                            return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return '))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expr)), $the_sett$elm_pretty_printer$Pretty$string('if ')))))))));
                        } else return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return ')));
                    }(), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens(A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromLiteral(primitive), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' == '), ident))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string('if')))))))));
                case 'VariantDestructure':
                    var tag = pattern.a;
                    var patterns = pattern.b;
                    var $temp$ident = ident, $temp$_v34 = _Utils_Tuple3($ren_lang$compiler$Ren$Language$ArrayDestructure(A2($elm$core$List$cons, $ren_lang$compiler$Ren$Language$Value($ren_lang$compiler$Ren$Language$String(tag)), patterns)), guard, body);
                    ident = $temp$ident;
                    _v34 = $temp$_v34;
                    continue fromCase;
                case 'Typeof':
                    var _typeof = pattern.a;
                    var name = pattern.b;
                    var typename = function() {
                        switch(_typeof.$){
                            case 'BooleanP':
                                return 'boolean';
                            case 'NumberP':
                                return 'number';
                            case 'StringP':
                                return 'string';
                            default:
                                return 'function';
                        }
                    }();
                    return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, function() {
                        if (guard.$ === 'Just') {
                            var expr = guard.a;
                            return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return '))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expr)), $the_sett$elm_pretty_printer$Pretty$string('if ')))))))));
                        } else return A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return ')));
                    }(), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, ident, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' = '), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(name), $the_sett$elm_pretty_printer$Pretty$string('var '))))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens(A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Pretty$Extra$singleQuotes(typename), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' == '), A2($the_sett$elm_pretty_printer$Pretty$a, ident, $the_sett$elm_pretty_printer$Pretty$string('typeof '))))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string('if ')))))))))));
                default:
                    if (guard.$ === 'Just') {
                        var expr1 = guard.a;
                        return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return '))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expr1)), $the_sett$elm_pretty_printer$Pretty$string('if '))))))));
                    } else return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), $the_sett$elm_pretty_printer$Pretty$string('return '));
            }
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromConditional = F3(function(condition, _true, _false) {
        return A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(_false), $the_sett$elm_pretty_printer$Pretty$string(': '))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(_true), $the_sett$elm_pretty_printer$Pretty$string('? '))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(condition)))));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromDeclaration = function(_v32) {
        var visibility = _v32.a;
        var declaration = _v32.b;
        switch(declaration.$){
            case 'Function':
                var name = declaration.a;
                var args = declaration.b;
                var body = declaration.c;
                return A2($the_sett$elm_pretty_printer$Pretty$a, A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromFunction, $ren_lang$compiler$Ren$Language$Name(name), args, body), $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromVisibility(visibility));
            case 'Variable':
                var name = declaration.a;
                var body = declaration.b;
                return A2($the_sett$elm_pretty_printer$Pretty$a, A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromVariable, name, body), $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromVisibility(visibility));
            default:
                var name = declaration.a;
                var variants = declaration.b;
                return A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromEnum, visibility, name, variants);
        }
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromEnum = F3(function(visibility, _v31, variants) {
        return A2($the_sett$elm_pretty_printer$Pretty$join, $ren_lang$compiler$Pretty$Extra$doubleLine, A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromVariant(visibility), variants));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression = function(expression) {
        switch(expression.$){
            case 'Access':
                var expr = expression.a;
                var accessors = expression.b;
                return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromAccess, expr, accessors);
            case 'Application':
                var expr = expression.a;
                var args = expression.b;
                return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromApplication, expr, args);
            case 'Block':
                var bindings = expression.a;
                var expr = expression.b;
                return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromBlock, bindings, expr);
            case 'Conditional':
                var condition = expression.a;
                var _true = expression.b;
                var _false = expression.c;
                return A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromConditional, condition, _true, _false);
            case 'Identifier':
                var identifier = expression.a;
                return $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromIdentifier(identifier);
            case 'Infix':
                var operator = expression.a;
                var lhs = expression.b;
                var rhs = expression.c;
                return A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfix, operator, lhs, rhs);
            case 'Lambda':
                var args = expression.a;
                var body = expression.b;
                return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromLambda, args, body);
            case 'Literal':
                var literal = expression.a;
                return $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromLiteral(literal);
            default:
                var expr = expression.a;
                var cases = expression.b;
                return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromMatch, expr, cases);
        }
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpressionToSingleTerm = function(expression) {
        switch(expression.$){
            case 'Application':
                var expr = expression.a;
                var args = expression.b;
                return $the_sett$elm_pretty_printer$Pretty$parens(A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromApplication, expr, args));
            case 'Conditional':
                var condition = expression.a;
                var _true = expression.b;
                var _false = expression.c;
                return $the_sett$elm_pretty_printer$Pretty$parens(A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromConditional, condition, _true, _false));
            case 'Infix':
                switch(expression.a.$){
                    case 'Pipe':
                        var _v26 = expression.a;
                        var lhs = expression.b;
                        var rhs = expression.c;
                        return $the_sett$elm_pretty_printer$Pretty$parens(A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfix, $ren_lang$compiler$Ren$Language$Pipe, lhs, rhs));
                    case 'Compose':
                        var _v27 = expression.a;
                        var lhs = expression.b;
                        var rhs = expression.c;
                        return A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfix, $ren_lang$compiler$Ren$Language$Compose, lhs, rhs);
                    case 'Cons':
                        var _v28 = expression.a;
                        var lhs = expression.b;
                        var rhs = expression.c;
                        return A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfix, $ren_lang$compiler$Ren$Language$Cons, lhs, rhs);
                    case 'Join':
                        var _v29 = expression.a;
                        var lhs = expression.b;
                        var rhs = expression.c;
                        return A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfix, $ren_lang$compiler$Ren$Language$Join, lhs, rhs);
                    default:
                        var operator = expression.a;
                        var lhs = expression.b;
                        var rhs = expression.c;
                        return $the_sett$elm_pretty_printer$Pretty$parens(A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfix, operator, lhs, rhs));
                }
            case 'Lambda':
                var args = expression.a;
                var body = expression.b;
                return $the_sett$elm_pretty_printer$Pretty$parens(A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromLambda, args, body));
            default:
                return $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expression);
        }
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromFunction = F3(function(name, args, body) {
        if (!args.b) return $the_sett$elm_pretty_printer$Pretty$empty;
        else if (!args.b.b) {
            var arg = args.a;
            return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromFunctionBody, true, body)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern(arg)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern(name), $the_sett$elm_pretty_printer$Pretty$string('function '))))))))));
        } else {
            var arg = args.a;
            var rest = args.b;
            return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromFunctionBody, true, body)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' => '), A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(' => '), A2($elm$core$List$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern, $the_sett$elm_pretty_printer$Pretty$parens), rest)))))))), $the_sett$elm_pretty_printer$Pretty$string('return '))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern(arg)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern(name), $the_sett$elm_pretty_printer$Pretty$string('function '))))))))));
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromFunctionBody = F2(function(insideBlock, body) {
        var _return = insideBlock ? $the_sett$elm_pretty_printer$Pretty$string('return ') : $the_sett$elm_pretty_printer$Pretty$empty;
        _v23$2: while(true)switch(body.$){
            case 'Match':
                if (body.a.$ === 'Identifier') {
                    var ident = body.a.a;
                    var cases = body.b;
                    return insideBlock ? A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchBody, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromIdentifier(ident), cases) : $the_sett$elm_pretty_printer$Pretty$braces(A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchBody, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromIdentifier(ident), cases)), $the_sett$elm_pretty_printer$Pretty$line)));
                } else break _v23$2;
            case 'Literal':
                if (body.a.$ === 'Object') {
                    var object = body.a;
                    return A2($the_sett$elm_pretty_printer$Pretty$a, A2($ren_lang$compiler$Pretty$Extra$when, !insideBlock, $the_sett$elm_pretty_printer$Pretty$string(')')), A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromLiteral(object), A2($the_sett$elm_pretty_printer$Pretty$a, A2($ren_lang$compiler$Pretty$Extra$when, !insideBlock, $the_sett$elm_pretty_printer$Pretty$string('(')), A2($ren_lang$compiler$Pretty$Extra$when, insideBlock, $the_sett$elm_pretty_printer$Pretty$string('return ')))));
                } else break _v23$2;
            default:
                break _v23$2;
        }
        return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), A2($ren_lang$compiler$Pretty$Extra$when, insideBlock, $the_sett$elm_pretty_printer$Pretty$string('return ')));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfix = F3(function(operator, lhs, rhs) {
        var fromInfixOp = $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfixOperand(operator);
        switch(operator.$){
            case 'Pipe':
                return $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(A2($ren_lang$compiler$Ren$Language$Application, rhs, _List_fromArray([
                    lhs
                ])));
            case 'Compose':
                return $the_sett$elm_pretty_printer$Pretty$parens(A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(A2($ren_lang$compiler$Ren$Language$Application, rhs, _List_fromArray([
                    A2($ren_lang$compiler$Ren$Language$Application, lhs, _List_fromArray([
                        $ren_lang$compiler$Ren$Language$Identifier($ren_lang$compiler$Ren$Language$Local('$'))
                    ]))
                ]))), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' => '), $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('$'))))));
            case 'Add':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' + '), fromInfixOp(lhs)));
            case 'Sub':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' - '), fromInfixOp(lhs)));
            case 'Mul':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' * '), fromInfixOp(lhs)));
            case 'Div':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' / '), fromInfixOp(lhs)));
            case 'Pow':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' ** '), fromInfixOp(lhs)));
            case 'Mod':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' % '), fromInfixOp(lhs)));
            case 'Eq':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' == '), fromInfixOp(lhs)));
            case 'NotEq':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' != '), fromInfixOp(lhs)));
            case 'Lt':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' < '), fromInfixOp(lhs)));
            case 'Lte':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' <= '), fromInfixOp(lhs)));
            case 'Gt':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' > '), fromInfixOp(lhs)));
            case 'Gte':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' >= '), fromInfixOp(lhs)));
            case 'And':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' && '), fromInfixOp(lhs)));
            case 'Or':
                return A2($the_sett$elm_pretty_printer$Pretty$a, fromInfixOp(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' || '), fromInfixOp(lhs)));
            case 'Cons':
                return $the_sett$elm_pretty_printer$Pretty$brackets(A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpressionToSingleTerm(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(', ...'), $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpressionToSingleTerm(lhs))));
            default:
                return $the_sett$elm_pretty_printer$Pretty$brackets(A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpressionToSingleTerm(rhs), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(', ...'), A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpressionToSingleTerm(lhs), $the_sett$elm_pretty_printer$Pretty$string('...')))));
        }
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfixOperand = F2(function(parentOperator, operand) {
        var parensRequired = function(operator) {
            var _v21 = _Utils_Tuple2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$esPrecedenceFromInfixOperator(parentOperator), $ren_lang$compiler$Ren$Compiler$Emit$ESModule$esPrecedenceFromInfixOperator(operator));
            if (_v21.a.$ === 'Just' && _v21.b.$ === 'Just') {
                var pParent = _v21.a.a;
                var pChild = _v21.b.a;
                return _Utils_cmp(pParent, pChild) > 0;
            } else return false;
        };
        if (operand.$ === 'Infix') {
            var operator1 = operand.a;
            var lhs = operand.b;
            var rhs = operand.c;
            return parensRequired(operator1) ? $the_sett$elm_pretty_printer$Pretty$parens(A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfix, operator1, lhs, rhs)) : A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromInfix, operator1, lhs, rhs);
        } else return $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpressionToSingleTerm(operand);
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromLambda = F2(function(args, body) {
        return A2($the_sett$elm_pretty_printer$Pretty$a, A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromFunctionBody, false, body), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' => '), A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(' => '), A2($elm$core$List$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern, $the_sett$elm_pretty_printer$Pretty$parens), args))));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromLiteral = function(literal) {
        switch(literal.$){
            case 'Array':
                var elements = literal.a;
                return $the_sett$elm_pretty_printer$Pretty$brackets(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(', '), A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression, elements)));
            case 'Boolean':
                if (literal.a) return $the_sett$elm_pretty_printer$Pretty$string('true');
                else return $the_sett$elm_pretty_printer$Pretty$string('false');
            case 'Number':
                var n = literal.a;
                return $the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromFloat(n));
            case 'Object':
                var entries = literal.a;
                return $the_sett$elm_pretty_printer$Pretty$braces(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(', '), A2($elm$core$List$map, function(_v18) {
                    var k = _v18.a;
                    var v = _v18.b;
                    return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(v), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(': '), $the_sett$elm_pretty_printer$Pretty$string(k)));
                }, $elm$core$Dict$toList(entries))));
            case 'String':
                var s = literal.a;
                return $ren_lang$compiler$Pretty$Extra$singleQuotes(s);
            case 'Template':
                var parts = literal.a;
                return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('`')), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('`')), A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$empty, A2($elm$core$List$map, function(part) {
                    if (part.$ === 'Text') {
                        var text = part.a;
                        return $the_sett$elm_pretty_printer$Pretty$string(text);
                    } else {
                        var expr = part.a;
                        return A3($the_sett$elm_pretty_printer$Pretty$surround, $the_sett$elm_pretty_printer$Pretty$string('${'), $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expr));
                    }
                }, parts)));
            default:
                return $the_sett$elm_pretty_printer$Pretty$string('undefined');
        }
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromMatch = F2(function(expr, cases) {
        return A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$parens($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(expr)), $the_sett$elm_pretty_printer$Pretty$parens(A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('}')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, A2($the_sett$elm_pretty_printer$Pretty$indent, 4, A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchBody, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('$')), cases)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('{')), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' => '), $the_sett$elm_pretty_printer$Pretty$parens($the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('$')))))))))));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromVariable = F2(function(name, body) {
        return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromExpression(body), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' = '), A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromPattern(name), $the_sett$elm_pretty_printer$Pretty$string('var '))));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromVariant = F2(function(visibility, _v16) {
        var tag = _v16.a;
        var slots = _v16.b;
        var slotArgs = A2($elm$core$List$map, function(code) {
            return $elm$core$String$fromChar($elm$core$Char$fromCode(97 + code));
        }, A2($elm$core$List$range, 0, slots - 1));
        var sanitisedTag = A3($elm$core$String$replace, '#', '$', tag);
        return A2($the_sett$elm_pretty_printer$Pretty$a, slots <= 0 ? A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromVariable, $ren_lang$compiler$Ren$Language$Name(sanitisedTag), $ren_lang$compiler$Ren$Language$Literal($ren_lang$compiler$Ren$Language$Array(_List_fromArray([
            $ren_lang$compiler$Ren$Language$Literal($ren_lang$compiler$Ren$Language$String(tag))
        ])))) : A3($ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromFunction, $ren_lang$compiler$Ren$Language$Name(sanitisedTag), A2($elm$core$List$map, $ren_lang$compiler$Ren$Language$Name, slotArgs), $ren_lang$compiler$Ren$Language$Literal($ren_lang$compiler$Ren$Language$Array(A2($elm$core$List$cons, $ren_lang$compiler$Ren$Language$Literal($ren_lang$compiler$Ren$Language$String(tag)), A2($elm$core$List$map, A2($elm$core$Basics$composeL, $ren_lang$compiler$Ren$Language$Identifier, $ren_lang$compiler$Ren$Language$Local), slotArgs))))), $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromVisibility(visibility));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchBody = F2(function(ident, cases) {
        return A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$empty, A2($elm$core$List$intersperse, $ren_lang$compiler$Pretty$Extra$doubleLine, A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromCase(ident), cases)));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPatternsFromArrayDestructure = F2(function(path, patterns) {
        return A2($elm$core$List$cons, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsArray({
            length: $elm$core$List$length(patterns),
            path: path
        }), $elm$core$List$concat(A2($elm$core$List$indexedMap, F2(function(i, pattern) {
            var idx = $the_sett$elm_pretty_printer$Pretty$brackets($the_sett$elm_pretty_printer$Pretty$string($elm$core$String$fromInt(i)));
            switch(pattern.$){
                case 'ArrayDestructure':
                    var ps = pattern.a;
                    return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPatternsFromArrayDestructure, A2($the_sett$elm_pretty_printer$Pretty$a, idx, path), ps);
                case 'Name':
                    var name = pattern.a;
                    return _List_fromArray([
                        $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                            name: $the_sett$elm_pretty_printer$Pretty$string(name),
                            path: A2($the_sett$elm_pretty_printer$Pretty$a, idx, path)
                        })
                    ]);
                case 'ObjectDestructure':
                    var ps = pattern.a;
                    return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPatternsFromObjectDestructure, A2($the_sett$elm_pretty_printer$Pretty$a, idx, path), ps);
                case 'Value':
                    var primitive = pattern.a;
                    return _List_fromArray([
                        $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Equality({
                            path: A2($the_sett$elm_pretty_printer$Pretty$a, idx, path),
                            value: $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromLiteral(primitive)
                        })
                    ]);
                case 'VariantDestructure':
                    var tag = pattern.a;
                    var ps = pattern.b;
                    return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPatternsFromArrayDestructure, A2($the_sett$elm_pretty_printer$Pretty$a, idx, path), A2($elm$core$List$cons, $ren_lang$compiler$Ren$Language$Value($ren_lang$compiler$Ren$Language$String(tag)), ps));
                case 'Typeof':
                    switch(pattern.a.$){
                        case 'BooleanP':
                            var _v12 = pattern.a;
                            var name = pattern.b;
                            return _List_fromArray([
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsType({
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, idx, path),
                                    _typeof: $ren_lang$compiler$Pretty$Extra$singleQuotes('boolean')
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                                    name: $the_sett$elm_pretty_printer$Pretty$string(name),
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, idx, path)
                                })
                            ]);
                        case 'NumberP':
                            var _v13 = pattern.a;
                            var name = pattern.b;
                            return _List_fromArray([
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsType({
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, idx, path),
                                    _typeof: $ren_lang$compiler$Pretty$Extra$singleQuotes('number')
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                                    name: $the_sett$elm_pretty_printer$Pretty$string(name),
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, idx, path)
                                })
                            ]);
                        case 'StringP':
                            var _v14 = pattern.a;
                            var name = pattern.b;
                            return _List_fromArray([
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsType({
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, idx, path),
                                    _typeof: $ren_lang$compiler$Pretty$Extra$singleQuotes('string')
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                                    name: $the_sett$elm_pretty_printer$Pretty$string(name),
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, idx, path)
                                })
                            ]);
                        default:
                            var _v15 = pattern.a;
                            var name = pattern.b;
                            return _List_fromArray([
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsType({
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, idx, path),
                                    _typeof: $ren_lang$compiler$Pretty$Extra$singleQuotes('function')
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                                    name: $the_sett$elm_pretty_printer$Pretty$string(name),
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, idx, path)
                                })
                            ]);
                    }
                default:
                    return _List_Nil;
            }
        }), patterns)));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPatternsFromObjectDestructure = F2(function(path, patterns) {
        return A2($elm$core$List$cons, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsObject(path), A2($elm$core$List$concatMap, function(_v0) {
            var key = _v0.a;
            var pattern = _v0.b;
            if (pattern.$ === 'Just') switch(pattern.a.$){
                case 'ArrayDestructure':
                    var ps = pattern.a.a;
                    return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPatternsFromArrayDestructure, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path)), ps);
                case 'Name':
                    var name = pattern.a.a;
                    return _List_fromArray([
                        $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Existential({
                            name: $ren_lang$compiler$Pretty$Extra$singleQuotes(key),
                            path: path
                        }),
                        $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                            name: $the_sett$elm_pretty_printer$Pretty$string(name),
                            path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path))
                        })
                    ]);
                case 'ObjectDestructure':
                    var ps = pattern.a.a;
                    return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPatternsFromObjectDestructure, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path)), ps);
                case 'Value':
                    var primitive = pattern.a.a;
                    return _List_fromArray([
                        $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Existential({
                            name: $ren_lang$compiler$Pretty$Extra$singleQuotes(key),
                            path: path
                        }),
                        $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Equality({
                            path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path)),
                            value: $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromLiteral(primitive)
                        })
                    ]);
                case 'Wildcard':
                    return _List_fromArray([
                        $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Existential({
                            name: $ren_lang$compiler$Pretty$Extra$singleQuotes(key),
                            path: path
                        })
                    ]);
                case 'VariantDestructure':
                    var _v2 = pattern.a;
                    var tag = _v2.a;
                    var ps = _v2.b;
                    return A2($ren_lang$compiler$Ren$Compiler$Emit$ESModule$matchPatternsFromArrayDestructure, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path)), A2($elm$core$List$cons, $ren_lang$compiler$Ren$Language$Value($ren_lang$compiler$Ren$Language$String(tag)), ps));
                default:
                    switch(pattern.a.a.$){
                        case 'BooleanP':
                            var _v3 = pattern.a;
                            var _v4 = _v3.a;
                            var name = _v3.b;
                            return _List_fromArray([
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Existential({
                                    name: $ren_lang$compiler$Pretty$Extra$singleQuotes(key),
                                    path: path
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsType({
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path)),
                                    _typeof: $ren_lang$compiler$Pretty$Extra$singleQuotes('boolean')
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                                    name: $the_sett$elm_pretty_printer$Pretty$string(name),
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path))
                                })
                            ]);
                        case 'NumberP':
                            var _v5 = pattern.a;
                            var _v6 = _v5.a;
                            var name = _v5.b;
                            return _List_fromArray([
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Existential({
                                    name: $ren_lang$compiler$Pretty$Extra$singleQuotes(key),
                                    path: path
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsType({
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path)),
                                    _typeof: $ren_lang$compiler$Pretty$Extra$singleQuotes('number')
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                                    name: $the_sett$elm_pretty_printer$Pretty$string(name),
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path))
                                })
                            ]);
                        case 'StringP':
                            var _v7 = pattern.a;
                            var _v8 = _v7.a;
                            var name = _v7.b;
                            return _List_fromArray([
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Existential({
                                    name: $ren_lang$compiler$Pretty$Extra$singleQuotes(key),
                                    path: path
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsType({
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path)),
                                    _typeof: $ren_lang$compiler$Pretty$Extra$singleQuotes('string')
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                                    name: $the_sett$elm_pretty_printer$Pretty$string(name),
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path))
                                })
                            ]);
                        default:
                            var _v9 = pattern.a;
                            var _v10 = _v9.a;
                            var name = _v9.b;
                            return _List_fromArray([
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Existential({
                                    name: $ren_lang$compiler$Pretty$Extra$singleQuotes(key),
                                    path: path
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$IsType({
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path)),
                                    _typeof: $ren_lang$compiler$Pretty$Extra$singleQuotes('function')
                                }),
                                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                                    name: $the_sett$elm_pretty_printer$Pretty$string(name),
                                    path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path))
                                })
                            ]);
                    }
            }
            else return _List_fromArray([
                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Existential({
                    name: $ren_lang$compiler$Pretty$Extra$singleQuotes(key),
                    path: path
                }),
                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$Binding({
                    name: $the_sett$elm_pretty_printer$Pretty$string(key),
                    path: A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(key), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$char(_Utils_chr('.')), path))
                })
            ]);
        }, patterns));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromImport = function(import_) {
        var path = import_.path;
        var name = import_.name;
        var bindings = import_.bindings;
        var _v0 = _Utils_Tuple2($elm$core$List$isEmpty(name), $elm$core$List$isEmpty(bindings));
        if (_v0.a) {
            if (_v0.b) return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Pretty$Extra$singleQuotes(path), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, $the_sett$elm_pretty_printer$Pretty$string('import ')));
            else return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Pretty$Extra$singleQuotes(path), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$space, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' from '), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$braces(A2($the_sett$elm_pretty_printer$Pretty$join, $the_sett$elm_pretty_printer$Pretty$string(', '), A2($elm$core$List$map, A2($elm$core$Basics$composeR, A2($elm$core$String$replace, '#', '$'), $the_sett$elm_pretty_printer$Pretty$string), bindings))), $the_sett$elm_pretty_printer$Pretty$string('import ')))));
        } else {
            if (_v0.b) return A2($the_sett$elm_pretty_printer$Pretty$a, $ren_lang$compiler$Pretty$Extra$singleQuotes(path), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(' from '), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$string(A2($elm$core$String$join, '$', name)), $the_sett$elm_pretty_printer$Pretty$string('import * as '))));
            else return $the_sett$elm_pretty_printer$Pretty$lines(_List_fromArray([
                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromImport(_Utils_update(import_, {
                    bindings: _List_Nil
                })),
                $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromImport(_Utils_update(import_, {
                    name: _List_Nil
                }))
            ]));
        }
    };
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromModule = function(_v0) {
        var imports = _v0.imports;
        var declarations = _v0.declarations;
        return $elm$core$List$isEmpty(imports) ? $the_sett$elm_pretty_printer$Pretty$lines(A2($elm$core$List$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromDeclaration, $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line)), declarations)) : A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$lines(A2($elm$core$List$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromDeclaration, $the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line)), declarations)), A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$lines(A2($elm$core$List$map, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromImport, imports)))));
    };
    var $the_sett$elm_pretty_printer$Internals$NLine = F3(function(a, b, c) {
        return {
            $: 'NLine',
            a: a,
            b: b,
            c: c
        };
    });
    var $the_sett$elm_pretty_printer$Internals$NNil = {
        $: 'NNil'
    };
    var $the_sett$elm_pretty_printer$Internals$NText = F3(function(a, b, c) {
        return {
            $: 'NText',
            a: a,
            b: b,
            c: c
        };
    });
    var $the_sett$elm_pretty_printer$Internals$fits = F2(function(w, normal) {
        fits: while(true){
            if (w < 0) return false;
            else switch(normal.$){
                case 'NNil':
                    return true;
                case 'NText':
                    var text = normal.a;
                    var innerNormal = normal.b;
                    var $temp$w = w - $elm$core$String$length(text), $temp$normal = innerNormal(_Utils_Tuple0);
                    w = $temp$w;
                    normal = $temp$normal;
                    continue fits;
                default:
                    return true;
            }
        }
    });
    var $the_sett$elm_pretty_printer$Internals$better = F4(function(w, k, doc, doc2Fn) {
        return A2($the_sett$elm_pretty_printer$Internals$fits, w - k, doc) ? doc : doc2Fn(_Utils_Tuple0);
    });
    var $the_sett$elm_pretty_printer$Internals$best = F3(function(width, startCol, x) {
        var be = F3(function(w, k, docs) {
            be: while(true){
                if (!docs.b) return $the_sett$elm_pretty_printer$Internals$NNil;
                else switch(docs.a.b.$){
                    case 'Empty':
                        var _v1 = docs.a;
                        var i = _v1.a;
                        var _v2 = _v1.b;
                        var ds = docs.b;
                        var $temp$w = w, $temp$k = k, $temp$docs = ds;
                        w = $temp$w;
                        k = $temp$k;
                        docs = $temp$docs;
                        continue be;
                    case 'Concatenate':
                        var _v3 = docs.a;
                        var i = _v3.a;
                        var _v4 = _v3.b;
                        var doc = _v4.a;
                        var doc2 = _v4.b;
                        var ds = docs.b;
                        var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i, doc(_Utils_Tuple0)), A2($elm$core$List$cons, _Utils_Tuple2(i, doc2(_Utils_Tuple0)), ds));
                        w = $temp$w;
                        k = $temp$k;
                        docs = $temp$docs;
                        continue be;
                    case 'Nest':
                        var _v5 = docs.a;
                        var i = _v5.a;
                        var _v6 = _v5.b;
                        var j = _v6.a;
                        var doc = _v6.b;
                        var ds = docs.b;
                        var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i + j, doc(_Utils_Tuple0)), ds);
                        w = $temp$w;
                        k = $temp$k;
                        docs = $temp$docs;
                        continue be;
                    case 'Text':
                        var _v7 = docs.a;
                        var i = _v7.a;
                        var _v8 = _v7.b;
                        var text = _v8.a;
                        var maybeTag = _v8.b;
                        var ds = docs.b;
                        return A3($the_sett$elm_pretty_printer$Internals$NText, text, function(_v9) {
                            return A3(be, w, k + $elm$core$String$length(text), ds);
                        }, maybeTag);
                    case 'Line':
                        var _v10 = docs.a;
                        var i = _v10.a;
                        var _v11 = _v10.b;
                        var vsep = _v11.b;
                        var ds = docs.b;
                        return A3($the_sett$elm_pretty_printer$Internals$NLine, i, vsep, function(_v12) {
                            return A3(be, w, i + $elm$core$String$length(vsep), ds);
                        });
                    case 'Union':
                        var _v13 = docs.a;
                        var i = _v13.a;
                        var _v14 = _v13.b;
                        var doc = _v14.a;
                        var doc2 = _v14.b;
                        var ds = docs.b;
                        return A4($the_sett$elm_pretty_printer$Internals$better, w, k, A3(be, w, k, A2($elm$core$List$cons, _Utils_Tuple2(i, doc), ds)), function(_v15) {
                            return A3(be, w, k, A2($elm$core$List$cons, _Utils_Tuple2(i, doc2), ds));
                        });
                    case 'Nesting':
                        var _v16 = docs.a;
                        var i = _v16.a;
                        var fn = _v16.b.a;
                        var ds = docs.b;
                        var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i, fn(i)), ds);
                        w = $temp$w;
                        k = $temp$k;
                        docs = $temp$docs;
                        continue be;
                    default:
                        var _v17 = docs.a;
                        var i = _v17.a;
                        var fn = _v17.b.a;
                        var ds = docs.b;
                        var $temp$w = w, $temp$k = k, $temp$docs = A2($elm$core$List$cons, _Utils_Tuple2(i, fn(k)), ds);
                        w = $temp$w;
                        k = $temp$k;
                        docs = $temp$docs;
                        continue be;
                }
            }
        });
        return A3(be, width, startCol, _List_fromArray([
            _Utils_Tuple2(0, x)
        ]));
    });
    var $elm$core$String$concat = function(strings) {
        return A2($elm$core$String$join, '', strings);
    };
    var $the_sett$elm_pretty_printer$Internals$layout = function(normal) {
        var layoutInner = F2(function(normal2, acc) {
            layoutInner: while(true)switch(normal2.$){
                case 'NNil':
                    return acc;
                case 'NText':
                    var text = normal2.a;
                    var innerNormal = normal2.b;
                    var maybeTag = normal2.c;
                    var $temp$normal2 = innerNormal(_Utils_Tuple0), $temp$acc = A2($elm$core$List$cons, text, acc);
                    normal2 = $temp$normal2;
                    acc = $temp$acc;
                    continue layoutInner;
                default:
                    var i = normal2.a;
                    var sep = normal2.b;
                    var innerNormal = normal2.c;
                    var norm = innerNormal(_Utils_Tuple0);
                    if (norm.$ === 'NLine') {
                        var $temp$normal2 = innerNormal(_Utils_Tuple0), $temp$acc = A2($elm$core$List$cons, '\n' + sep, acc);
                        normal2 = $temp$normal2;
                        acc = $temp$acc;
                        continue layoutInner;
                    } else {
                        var $temp$normal2 = innerNormal(_Utils_Tuple0), $temp$acc = A2($elm$core$List$cons, '\n' + (A2($the_sett$elm_pretty_printer$Internals$copy, i, ' ') + sep), acc);
                        normal2 = $temp$normal2;
                        acc = $temp$acc;
                        continue layoutInner;
                    }
            }
        });
        return $elm$core$String$concat($elm$core$List$reverse(A2(layoutInner, normal, _List_Nil)));
    };
    var $the_sett$elm_pretty_printer$Pretty$pretty = F2(function(w, doc) {
        return $the_sett$elm_pretty_printer$Internals$layout(A3($the_sett$elm_pretty_printer$Internals$best, w, 0, doc));
    });
    var $ren_lang$compiler$Ren$Compiler$Emit$ESModule$emitModule = A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Compiler$Emit$ESModule$fromModule, $the_sett$elm_pretty_printer$Pretty$pretty(80));
    var $ren_lang$compiler$Ren$Compiler$emit = function(target) {
        return $ren_lang$compiler$Ren$Compiler$Emit$ESModule$emitModule;
    };
    var $elm$core$Result$mapError = F2(function(f, result) {
        if (result.$ === 'Ok') {
            var v = result.a;
            return $elm$core$Result$Ok(v);
        } else {
            var e = result.a;
            return $elm$core$Result$Err(f(e));
        }
    });
    var $author$project$Data$Project$toFiles = function(project) {
        return A2($elm$core$Dict$map, function(_v0) {
            return A2($elm$core$Basics$composeR, $elm$core$Result$map($ren_lang$compiler$Ren$Compiler$emit($ren_lang$compiler$Ren$Compiler$ESModule)), $elm$core$Result$mapError($author$project$Parser$Extra$deadEndsToString));
        }, project.files);
    };
    var $author$project$Data$IO$with = F2(function(cmd, _v0) {
        var model = _v0.a;
        var cmds = _v0.b;
        return _Utils_Tuple2(model, $elm$core$Platform$Cmd$batch(_List_fromArray([
            cmd,
            cmds
        ])));
    });
    var $elm$core$Dict$foldl = F3(function(func, acc, dict) {
        foldl: while(true){
            if (dict.$ === 'RBEmpty_elm_builtin') return acc;
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldl, func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    });
    var $elm$json$Json$Encode$dict = F3(function(toKey, toValue, dictionary) {
        return _Json_wrap(A3($elm$core$Dict$foldl, F3(function(key, value, obj) {
            return A3(_Json_addField, toKey(key), toValue(value), obj);
        }), _Json_emptyObject(_Utils_Tuple0), dictionary));
    });
    var $elm$json$Json$Encode$object = function(pairs) {
        return _Json_wrap(A3($elm$core$List$foldl, F2(function(_v0, obj) {
            var k = _v0.a;
            var v = _v0.b;
            return A3(_Json_addField, k, v, obj);
        }), _Json_emptyObject(_Utils_Tuple0), pairs));
    };
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $author$project$Main$toFs = _Platform_outgoingPort('toFs', $elm$core$Basics$identity);
    var $author$project$Main$writeFiles = function(files) {
        var encodeFile = function(file) {
            if (file.$ === 'Ok') {
                var src = file.a;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2('$', $elm$json$Json$Encode$string('Ok')),
                    _Utils_Tuple2('src', $elm$json$Json$Encode$string(src))
                ]));
            } else {
                var err = file.a;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2('$', $elm$json$Json$Encode$string('Err')),
                    _Utils_Tuple2('err', $elm$json$Json$Encode$string(err))
                ]));
            }
        };
        return $author$project$Main$toFs($elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2('$', $elm$json$Json$Encode$string('WriteFiles')),
            _Utils_Tuple2('files', A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, encodeFile, files))
        ])));
    };
    var $author$project$Main$update = F2(function(msg, _v0) {
        var stdlib = _v0.stdlib;
        if (msg.$ === 'GotProject') {
            var project = msg.a;
            return A2($author$project$Data$IO$with, $author$project$Main$writeFiles($author$project$Data$Project$toFiles(A2($author$project$Data$Project$map, A2($elm$core$Basics$composeR, $ren_lang$compiler$Ren$Compiler$parse, A2($elm$core$Basics$composeR, $elm$core$Result$map($author$project$Main$addStdlib), A2($elm$core$Basics$composeR, $elm$core$Result$map($ren_lang$compiler$Ren$Compiler$optimise), $elm$core$Result$map($author$project$Main$resolveImports(stdlib))))), $author$project$Data$Project$fromFiles(project)))), $author$project$Data$IO$pure({
                stdlib: stdlib
            }));
        } else return $author$project$Data$IO$pure({
            stdlib: stdlib
        });
    });
    var $elm$core$Platform$worker = _Platform_worker;
    var $author$project$Main$main = $elm$core$Platform$worker({
        init: $author$project$Main$init,
        subscriptions: $author$project$Main$subscriptions,
        update: $author$project$Main$update
    });
    _Platform_export({
        'Main': {
            'init': $author$project$Main$main(A2($elm$json$Json$Decode$andThen, function(stdlib) {
                return A2($elm$json$Json$Decode$andThen, function(argv) {
                    return $elm$json$Json$Decode$succeed({
                        argv: argv,
                        stdlib: stdlib
                    });
                }, A2($elm$json$Json$Decode$field, 'argv', $elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
            }, A2($elm$json$Json$Decode$field, 'stdlib', $elm$json$Json$Decode$string)))(0)
        }
    });
})($f04ffd8da6057e40$exports);





const $69212e952d91b2c8$var$entry = $9DIyH$path.resolve($9DIyH$process.cwd(), 'aoc');
const $69212e952d91b2c8$var$stdlib = $9DIyH$path.join($69212e952d91b2c8$var$entry, 'stdlib');
const $69212e952d91b2c8$var$compiler = $f04ffd8da6057e40$exports.Elm.Main.init({
    flags: {
        argv: $9DIyH$process.argv.slice(2),
        stdlib: $69212e952d91b2c8$var$stdlib
    }
});
const $69212e952d91b2c8$var$paths = function gatherSourceFiles(dir) {
    return $9DIyH$fs.readdirSync(dir, {
        withFileTypes: true
    }).flatMap((entry)=>{
        const path = $9DIyH$path.resolve(dir, entry.name);
        return entry.isDirectory() ? gatherSourceFiles(path) : path;
    }).filter((path)=>$9DIyH$path.extname(path) === '.ren'
    );
}($69212e952d91b2c8$var$entry);
$69212e952d91b2c8$var$compiler.ports.fromFs.send({
    $: 'GotProject',
    0: Object.fromEntries($69212e952d91b2c8$var$paths.map((path)=>[
            path,
            $9DIyH$fs.readFileSync(path, {
                encoding: 'utf8'
            })
        ]
    ))
});
$69212e952d91b2c8$var$compiler.ports.toFs.subscribe(({ $: $1 , ...data1 })=>{
    const [year, day] = $9DIyH$process.argv.slice(2);
    switch($1){
        case 'WriteFiles':
            {
                const { files: files  } = data1;
                let filesToRun = [];
                let hasError = false;
                Object.entries(files).forEach(([path, { $: $ , ...data }])=>{
                    switch($){
                        case 'Ok':
                            {
                                const name = `${path}.mjs`;
                                $9DIyH$fs.writeFileSync(name, data.src, {
                                    encoding: 'utf8'
                                });
                                if (name.includes(`${year}/${day}`)) filesToRun.push(name);
                                break;
                            }
                        case 'Err':
                            hasError = true;
                            console.error(`Error while compiling ${path}:`);
                            console.error(data.err, '\n');
                    }
                });
                if (!hasError) filesToRun.forEach((name)=>{
                    import(name).then(({ main: main  })=>{
                        $9DIyH$process.chdir($9DIyH$path.dirname(name));
                        main && console.log(typeof main === 'function' ? main($9DIyH$process.argv.slice(2)) : main);
                    });
                });
            }
    }
});


