import * as React from "react";
import Radio, {RadioGroupProps, RadioGroupState} from "antd/es/radio";
import * as PropTypes from "prop-types";
import {RadioChangeEvent} from "antd/es/radio/interface";

export default class RadioGroupComponent extends React.Component<RadioGroupProps, RadioGroupState> {

    public static contextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    constructor(props: RadioGroupProps) {
        super(props);
        this.state = {
            value: this.props.value
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

    public onChange(e: RadioChangeEvent): void {
        const value = e.target.value;
        console.log('value' , value);
        const {onChange} = this.context;
        this.setState({
            value: value
        });
        onChange && onChange(value);
        this.props.onChange && this.props.onChange(e);
    }

    private resetField(defaultValue: any): void {
        this.setState({
            value: defaultValue
        });
        const {onChange} = this.context;
        onChange && onChange(defaultValue);
    }

    public render(): JSX.Element {
        const {value} = this.state;
        return <Radio.Group {...this.props} value={value}
                            onChange={this.onChange.bind(this)}>{this.props.children}</Radio.Group>
    }
}