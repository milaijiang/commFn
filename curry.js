/**
 * 柯里化函数
 */
function curry(fn, ...args) {
	const length = fn.length
	let lists = args || []
	let listLen
	return function (..._args) {
		lists = [...lists, ..._args]
		listLen = lists.length
		if (listLen < length) {
				const that = lists
				lists = []
				return curry(fn, ...that)
		} else if (listLen === length) {
				const that = lists
				lists = []
				return fn.apply(this, that)
		}
	}
} 

// eg:
let add = (a, b, c) => a + b + c
let curryAdd = curry(add)

console.log(curryAdd(1, 2, 3))
console.log(curryAdd(1, 2)(3))
console.log(curryAdd(1)(2, 3))