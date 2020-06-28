/// <reference types="react" />
import * as React from 'react';
import { IRuleItem } from "./Form";
import * as PropTypes from "prop-types";
export interface FormItemProps {
    label?: string;
    prop?: string;
    span?: number;
}
export interface FormItemState {
    message?: string;
}
export default class FormItem extends React.Component<FormItemProps, FormItemState> {
    static childContextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static contextTypes: {
        model: PropTypes.Requireable<object>;
        rules: PropTypes.Requireable<object>;
        addItemField: PropTypes.Requireable<(...args: any[]) => any>;
        setModel: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: FormItemProps;
    value: any;
    defaultValue: any;
    rule: IRuleItem | IRuleItem[];
    resetFieldFun: (defaultValue: any) => void;
    constructor(props: FormItemProps);
    private setResetFieldFun(resetFieldFun);
    resetField(): void;
    getChildContext(): {
        value: any;
        onChange: (value: any) => void;
        setResetFieldFun: (defaultValue: any) => void;
    };
    validate(): boolean;
    showMessage(message: string): void;
    private onChange(p_value, valid);
    private validRegular(regu, rule, value);
    private validRule(rule, value);
    private isRequire();
    private validRuleArray(rules, value);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Readonly<FormItemProps>, nextContext: any): void;
    shouldComponentUpdate(nextProps: Readonly<FormItemProps>, nextState: Readonly<FormItemState>, nextContext: any): boolean;
    private renderBaseClass();
    private renderLabel();
    private renderControlClass();
    private renderWrapperClass();
    render(): JSX.Element;
}
