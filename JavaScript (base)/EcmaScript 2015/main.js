// API
Array.of(elementN: ?)
Array.from(arrayLike: ?, mapFn?: fn(elt: ?, i: number), thisArg?: ?)
Array.prototype.copyWithin(target: number, start: number, end?: number)
Array.prototype.fill(value: ?, start?: number, end?: number)
Array.prototype.find(callback: fn(element: ?, index: number, array: [?]) : bool, thisArg?: ?)
Array.prototype.findIndex(callback: fn(element: ?, index: number, array: [?]), thisArg?: ?)
// эти методы присутствуют у итераторов массивов, надо разобраться
...[].entries()
...[].values()
...[].keys()


Object.is(value1: ?, value2: ?)
Object.getOwnPropertySymbols(obj: ?)
Object.setPrototypeOf(obj: ?, prototype: ?)
Object.assign(target: ?, source: ?, source?: ?)


Number.parseInt(string: string, radix?: number)
Number.parseFloat(string: string)
Number.isNaN(testValue: ?)
Number.isFinite(testValue: ?)
Number.isInteger(testValue: ?)
Number.isSafeInteger(testValue: ?)
Number.EPSILON
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER


	String.fromCodePoint(point: number, point?: number)
	String.codePointAt(pos: number)
	String.prototype.normalize(form: string) // form = 'NFC' 'NFD' || 'NFKC' || 'NFKD'

	String.raw(template: [string], substitutions: ?, templateString: ?)
	String.prototype.repeat(count: number)
	String.prototype.startsWith(searchString: string, position?: number)
	String.prototype.endsWith(searchString: string, position?: number)
	String.prototype.includes(searchString: string, position?: number)


Math.cosh(x: number)
Math.acosh(x: number)
Math.sinh(x: number)
Math.asinh(x: number)
Math.tanh(x: number)
Math.atanh(x: number)
Math.hypot(value: number)
Math.cbrt(x: number)
Math.clz32(x: number)
Math.expm1(x: number)
Math.log2(x: number)
Math.log10(x: number)
Math.log1p(x: number)
Math.imul(a: number, b: number)
Math.sign(x: number)
Math.trunc(x: number)
Math.fround(x: number)


	Symbol.iterator
	Symbol.toStringTag
	Symbol.hasInstance
	Symbol.species
	Symbol.toPrimitive
	Symbol.isConcatSpreadable

	Symbol.match
	Symbol.replace
	Symbol.search
	Symbol.split


// Обещания
Promise.resolve(value: ?)  // =>
Promise.reject(reason: ?)  // =>
Promise.all(iterable: [Promise])  // =>
Promise.race(iterable: [Promise])  // =>
Promise.prototype.then(onFulfilled: fn(value: ?), onRejected: fn(reason: ?))


// Коллекции
	Int8Array(size: number)         // 8-битные целые со знаком
	Int8Array.prototype.byteLength  // => number
	Uint8Array(size: number)        // 8-битные целые без знака
	Uint8Array.prototype.byteLength  // => number
	Uint8ClampedArray(size: number) // 8-битные целые без знака, со значениями в диапазоне 0-255
	Uint8ClampedArray.prototype.byteLength  // => number
	Int16Array(size: number)        // 16-битные целые со знаком
	Uint8ClampedArray.prototype.byteLength  // => number
	Uint16Array(size: number)       // 16-битные целые без знака
	Uint16Array.prototype.byteLength  // => number
	Int32Array(size: number)        // 32-битные целые со знаком
	Int32Array.prototype.byteLength  // => number
	Uint32Array(size: number)       // 32-битные целые без знака
	Uint32Array.prototype.byteLength  // => number
	Float32Array(size: number)      // 32-битные с плавающей точкой, IEEE-754
	Float32Array.prototype.byteLength  // => number
	Float64Array(size: number)      // 64-битные с плавающей точкой, IEEE-754
	Float64Array.prototype.byteLength  // => number
		// TypedArrays extends Array.prototype

	Map(iterable?: [?])
	Map.prototype.set(key: ?, value: ?)
	Map.prototype.get(key: ?)
	Map.prototype.delete(key: ?)
	Map.prototype.entries()
	Map.prototype.keys()
	Map.prototype.values()
	Map.prototype.has(key: ?)
	Map.prototype.clear()
	Map.prototype.size

	WeakMap()
	WeakMap.prototype.set(key: ?, value: ?)
	WeakMap.prototype.get(key: ?)
	WeakMap.prototype.delete(key: ?)
	WeakMap.prototype.entries()
	WeakMap.prototype.keys()
	WeakMap.prototype.values()
	WeakMap.prototype.has(key: ?)
	WeakMap.prototype.clear()
	WeakMap.prototype.size

	Set(iterable?: [?])
	Set.prototype.add(value: ?)
	Set.prototype.has(key: ?)
	Set.prototype.delete(key: ?)
	Set.prototype.entries()
	Set.prototype.keys()
	Set.prototype.values()
	Set.prototype.clear()
	Set.prototype.size

	WeakSet(iterable?: [?])
	WeakSet.prototype.add(value: ?)
	WeakSet.prototype.has(key: ?)
	WeakSet.prototype.delete(key: ?)
	WeakSet.prototype.entries()
	WeakSet.prototype.keys()
	WeakSet.prototype.values()
	WeakSet.prototype.clear()
	WeakSet.prototype.size


// Other
Function.prototype.name
new.target
