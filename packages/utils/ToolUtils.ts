export function isArray(obj: any): boolean {
    return Object.prototype.toString.call(obj) == '[object Array]';
}

export function isString(obj: any): boolean {
    return Object.prototype.toString.call(obj) == '[object String]';
}

export function isFunction(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Function]';
}

export function isRegExp(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
}

export function isNumber(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Number]';
}

export function isBoolean(obj:any):boolean{
    return Object.prototype.toString.call(obj) === '[object Boolean]';
}

export function isNull(obj: any): boolean {
    return obj === null || obj === undefined || !/\S/g.test(obj);
}
