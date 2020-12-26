import * as React from "react";
import * as PropTypes from "prop-types";
import Input, {InputProps} from "antd/es/input";
import {InputState} from "antd/es/input/Input";
import ComponentConfig from "@packages/config/ComponentConfig";

import Group from "./Group";
import Search from "./Search";
import TextArea from "./TextArea";
import Password from "./Password";

import "antd/es/input/style/index.css";
import "./style/index.css";

export default class ArtInput extends React.Component<InputProps, InputState> {

    public static defaultProps = ComponentConfig.defaultProps.input;

    public static contextTypes = {
        onChange: PropTypes.func
    };

    public static Group = Group;
    public static Search = Search;
    public static TextArea = TextArea;
    public static Password = Password;

    constructor(props: InputProps) {
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
        return <Input {...this.props} onChange={this.onChange.bind(this)}></Input>
    }

};
