/// <reference types="react" />
import BaseComponent, { BaseComponentProps } from "./BaseComponent";
export interface DialogComponentProps extends BaseComponentProps {
    callback?: (option?: any) => void;
}
export interface DialogComponentState {
    [name: string]: any;
}
export default abstract class DialogComponent<P extends DialogComponentProps, S extends DialogComponentState> extends BaseComponent<DialogComponentProps, DialogComponentState> {
    protected title: string;
    protected width: number;
    protected okText: string;
    protected cancelText: string;
    protected maskClosable: boolean;
    protected destroyOnClose: boolean;
    protected constructor(props: DialogComponentProps);
    open(paramMap?: any): void;
    beforeInit(paramMap: any): void | Promise<any>;
    protected cancel(): void;
    protected abstract ok(): void;
    abstract renderContent(): JSX.Element;
    render(): JSX.Element;
}
