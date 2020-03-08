import * as React from 'react';
import * as PropTypes from "prop-types";
import Input, {InputProps, InputState} from "antd/es/input/Input";

import "antd/es/input/style";

export default class InputComponent extends React.Component<InputProps, InputState> {

    public static contextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    public static defaultProps = {
        allowClear: true
    };

    constructor(props: InputProps) {
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

    public onChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const value = e.target.value;
        const {onChange} = this.context;
        this.setState({
            value: value
        });
        onChange && onChange(value);
    }

    private resetField(defaultValue: any): void {
        this.setState({
            value: defaultValue
        });
    }

    render(): JSX.Element {
        const {value} = this.state;
        return <Input {...this.props} value={value} onChange={this.onChange.bind(this)}/>;
    }
}