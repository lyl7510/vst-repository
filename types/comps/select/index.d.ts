/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from "prop-types";
import { OptGroupProps, OptionProps, SelectProps } from "antd/es/select";
import "antd/es/select/style";
import "./style/index.less";
import { BaseComponentProps } from "../../vst/page/BaseComponent";
export interface SelectComponentProps extends SelectProps, BaseComponentProps {
    value?: number | string;
    placeholder?: string;
}
export interface SelectComponentState {
    value: number | string;
}
export default class SelectComponent extends React.Component<SelectComponentProps, SelectComponentState> {
    static Option: React.ClassicComponentClass<OptionProps>;
    static OptGroup: React.ClassicComponentClass<OptGroupProps>;
    static defaultProps: {
        allowClear: boolean;
    };
    static contextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: SelectComponentProps);
    componentWillMount(): void;
    private resetField(defaultValue);
    onChange(p_value: number | string, option: React.ReactElement<any> | React.ReactElement<any>[]): void;
    render(): JSX.Element;
}
