import * as React from 'react';
import * as PropTypes from "prop-types";
import Select, {OptGroupProps, OptionProps, SelectProps} from "antd/es/select";

import "antd/es/select/style";

export interface SelectComponentState {
    value: number | string;
}

export default class SelectComponent extends React.Component<SelectProps, SelectComponentState> {

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

    constructor(props: SelectProps) {
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
        this.setState({
            value: defaultValue
        });
        const {onChange} = this.context;
        onChange && onChange(defaultValue);
    }

    public onChange(p_value: number | string ,option: React.ReactElement<any> | React.ReactElement<any>[]): void {
        const {onChange} = this.context;
        this.setState({
            value: p_value
        });
        onChange && onChange(p_value);
        this.props.onChange && this.props.onChange(p_value , option);

    }

    render(): JSX.Element {
        const {value} = this.state;
        return <Select {...this.props} value={value} onChange={this.onChange.bind(this)}>
            {this.props.children}
        </Select>;
    }
};