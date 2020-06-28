/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
import FormItem, { FormItemProps, FormItemState } from "./FormItem";
import "antd/es/grid/style";
import "./style/index.less";
export interface IForm {
    [name: string]: any;
}
export interface IRuleItem {
    verify?: string | RegExp;
    validator?: (value: any, rule?: IRuleItem, formData?: IForm) => boolean;
    message: string;
    [name: string]: any;
}
export interface IRule {
    [name: string]: IRuleItem | IRuleItem[];
}
export interface FormProps {
    model: IForm;
    rules?: IRule;
}
export default class Form extends React.Component<FormProps, {}> {
    static Item: React.ComponentClass<FormItemProps, FormItemState>;
    itemFields: Map<string, FormItem>;
    private model;
    static childContextTypes: {
        model: PropTypes.Requireable<object>;
        rules: PropTypes.Requireable<object>;
        addItemField: PropTypes.Requireable<(...args: any[]) => any>;
        setModel: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: FormProps);
    addItemField(name: string, formItem: FormItem): void;
    private setModel(name, value);
    getChildContext(): {
        model: object;
        rules: object;
        addItemField: (name: string, formItem: FormItem) => void;
        setModel: (name: string, value: any) => void;
    };
    showMessage(name: string, message: string): void;
    validate(): boolean;
    resetFields(): void;
    componentWillReceiveProps(nextProps: Readonly<FormProps>, nextContext: any): void;
    getFormData(): IForm;
    private renderBaseClass();
    render(): JSX.Element;
}
