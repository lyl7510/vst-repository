export function isArray(o: any): boolean {
    return Object.prototype.toString.call(o) == '[object Array]';
}

export function isString(str: any): boolean {
    return Object.prototype.toString.call(str) == '[object String]';
}

export function isFunction(fun: any): boolean {
    return Object.prototype.toString.call(fun) === '[object Function]'
}