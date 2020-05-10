import {isFunction} from "./ToolUtils";

export function isFitlerOne(dataArray: any[], fun: Function): any {
    for (let i = 0; i < dataArray.length; i++) {
        if (fun && isFunction(fun)) {
            const result = fun(dataArray[i], i);
            if (result) {
                return dataArray[i];
            }
        }
    }
    return null;
}

export function isFilterField(dataArray: any[], key: string): any[] {
    const result: any[] = [];
    for (let i = 0; i < dataArray.length; i++) {
        result.push(dataArray[i][key]);
    }
    return result;
}
