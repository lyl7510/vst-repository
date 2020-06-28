/// <reference types="react" />
import { IForm, IRule } from "../../comps/form";
import Form from "../../comps/form";
import BaseComponent, { BaseComponentProps } from "./BaseComponent";
export interface DialogFormComponentProps extends BaseComponentProps {
    callback?: (option?: any) => void;
}
export interface DialogFormComponentState {
    myForm?: IForm;
    rules?: IRule;
    visible?: boolean;
}
export default abstract class DialogFormComponent<P extends DialogFormComponentProps, S extends DialogFormComponentState> extends BaseComponent<DialogFormComponentProps, DialogFormComponentState> {
    myFrom: Form;
    protected title: string;
    protected width: number;
    protected okText: string;
    protected cancelText: string;
    protected maskClosable: boolean;
    protected destroyOnClose: boolean;
    protected constructor(props: DialogFormComponentProps);
    open(paramMap?: any): void;
    beforeInit(paramMap: any): void | Promise<any>;
    protected cancel(): void;
    protected validate(): boolean;
    protected ok(): void;
    protected afterClose(): void;
    protected abstract submit(): void;
    protected abstract renderContent(): JSX.Element;
    render(): JSX.Element;
}
