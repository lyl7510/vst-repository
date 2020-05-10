import * as React from 'react';
import * as PropTypes from "prop-types";
import Input from "antd/es/input/Input"
import {TextAreaProps, TextAreaState} from "antd/es/input/TextArea";
import "antd/es/input/style";

export default class Index extends React.Component<TextAreaProps, TextAreaState> {

    public static contextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    public static defaultProps = {
        allowClear: true
    };

    constructor(props: TextAreaProps) {
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

    public onChange(e:  React.ChangeEvent<HTMLTextAreaElement>): void {
        const value = e.target.value;
        const {onChange} = this.context;
        this.setState({
            value: value
        });
        onChange && onChange(value , true);
        this.props.onChange && this.props.onChange(e);
    }

    private resetField(defaultValue: any): void {
        defaultValue = defaultValue == "" || defaultValue == null ? undefined : defaultValue;
        this.setState({
            value: defaultValue
        });
        const {onChange} = this.context;
        onChange && onChange(defaultValue ,false);
    }

    render(): JSX.Element {
        const {value} = this.state;
        return <Input.TextArea {...this.props} value={value} onChange={this.onChange.bind(this)}/>;
    }
}