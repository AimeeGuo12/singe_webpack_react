export function isFunction(p) {
	return typeof p === "function";
}
export function isEmpty(param) {
	let result = false;

	if (typeof param === "object") {
		let hasvalue = false;
		if (Array.isArray(param)) {
			hasvalue = param.length !== 0;
		} else {
			for (var { } in param) {
				hasvalue = true;
				break;
			}
		}

		result = !hasvalue;
	} else if (typeof param === "string") {
		if (param === "") result = true;
	} else if (param === undefined) {
		result = true;
	}
	return result;
}

/**
 * 返回长度为len的编码
 *
 * @param {*} len
 */
 export function makeId(len) {
	if (len < 1 || len > 64) return null;
	const codes = "0123456789abcdefghijklmnopqrstuvwxyz+";
	let result = [];
	let n;
	for (let i = 0; i < len; i++) {
		n = Math.floor(`0.${(getRandom() + '')[0]}` * 36);
		result.push(codes.substring(n, n + 1));
	}
	return result.join("");
}
//将数组去重合并 简单类型数组
export function combineArrayWithoutRepeat() {
	const result = {}
	const argumentsArray = [...arguments];
	argumentsArray.forEach(array => {
		if (Array.isArray(array)) {
			array.forEach(item => result[item] = null);
		}
	})
	return Object.keys(result);
}

export function getSearchParam(query) {
	var re = new RegExp(query + "=([^\&]*)", "i");
	var a = re.exec(document.location.href);
	if (a == null)
		return null;
	return a[1];
}
export function isIE() {
	if (!!window.ActiveXObject || "ActiveXObject" in window) {
		return true;
	} else {
		return false;
	}
}

export function getRandom() {
	const crypto = window.crypto || window.msCrypto;
	var array = new Uint32Array(1);
	return crypto.getRandomValues(array)[0];
}