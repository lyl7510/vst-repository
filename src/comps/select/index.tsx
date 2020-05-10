import * as React from 'react';
import * as PropTypes from "prop-types";
import Select, {OptGroupProps, OptionProps, SelectProps} from "antd/es/select";

import "antd/es/select/style";
import "./style/index.less";
import {BaseComponentProps} from "../../vst/page/BaseComponent";

export interface SelectComponentProps extends SelectProps , BaseComponentProps {
    value?: number | string;
    placeholder?: string;
}

export interface SelectComponentState {
    value: number | string;
}

export default class SelectComponent extends React.Component<SelectComponentProps, SelectComponentState> {

    public static Option: React.ClassicComponentClass<OptionProps> = Select.Option;
    public static OptGroup: React.ClassicComponentClass<OptGroupProps> = Select.OptGroup;

    public static defaultProps = {
        allowClear: true
    };

    public static contextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    constructor(props: SelectComponentProps) {
        super(props);
        this.state = {
            value: undefined
        }
    }

    public componentWillMount(): void {
        const {value, setResetFieldFun} = this.context;
        if (value) {
            this.setState({
                value: value
            });
        }
        if (setResetFieldFun) {
            setResetFieldFun(this.resetField.bind(this));
        }
    }

    private resetField(defaultValue: any): void {
        defaultValue = defaultValue == "" || defaultValue == null ? undefined : defaultValue;
        this.setState({
            value: defaultValue
        });
        const {onChange} = this.context;
        onChange && onChange(defaultValue , false);
    }

    public onChange(p_value: number | string, option: React.ReactElement<any> | React.ReactElement<any>[]): void {
        const {onChange} = this.context;
        this.setState({
            value: p_value
        });
        onChange && onChange(p_value , true);
        this.props.onChange && this.props.onChange(p_value, option);

    }

    render(): JSX.Element {
        const {value} = this.state;
        const {placeholder} = this.props;
        return <Select {...this.props} value={value} onChange={this.onChange.bind(this)} placeholder={placeholder}>
            {this.props.children}
        </Select>;
    }
};