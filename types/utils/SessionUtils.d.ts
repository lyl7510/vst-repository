export interface ISessionUtils {
    put: (key: string, value: string) => void;
    get: (key: string) => string;
    remove: (key: string) => void;
    clear: () => void;
}
declare const sessionUtils: ISessionUtils;
export default sessionUtils;
