export interface ISessionUtils {
    put: (key: string, value: string) => void;
    get: (key: string) => string;
    remove: (key: string) => void;
    clear: () => void;

}

const sessionUtils: ISessionUtils = {
    put: (key: string, value: string): void => {
        sessionStorage.setItem(key, value);
    },
    get: (key: string): string => {
        return sessionStorage.getItem(key);
    },
    remove: (key: string): void => {
        sessionStorage.removeItem(key);
    },
    clear: (): void => {
        sessionStorage.clear();
    }
};

export default sessionUtils;