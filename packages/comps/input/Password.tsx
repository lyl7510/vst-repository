import * as React from "react";
import Input from "antd/es/input";
import * as PropTypes from "prop-types";
import {PasswordProps, PasswordState} from "antd/es/input/Password";
import ComponentConfig from "@packages/config/ComponentConfig";

export default class Password extends React.Component<PasswordProps, PasswordState> {

    public static defaultProps = ComponentConfig.defaultProps.password;

    public static contextTypes = {
        onChange: PropTypes.func
    };

    constructor(props: PasswordProps) {
        super(props);
    }

    /**
     * change改变的事件
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    protected onChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.context.onChange && this.context.onChange(event.target.value);
        this.props.onChange && this.props.onChange(event);
    }

    public render(): React.ReactNode {
        return <Input.Password {...this.props} onChange={this.onChange.bind(this)}>{this.props.children}</Input.Password>
    }
}
