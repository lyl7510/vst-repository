import * as React from "react";
import Input from "antd/es/input";
import {SearchProps} from "antd/es/input/Search";
import * as PropTypes from "prop-types";
import ComponentConfig from "@packages/config/ComponentConfig";

export default class Search extends React.Component<SearchProps, {}> {

    public static defaultProps = ComponentConfig.defaultProps.search;

    public static contextTypes = {
        onChange: PropTypes.func
    };

    constructor(props: SearchProps) {
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
        return <Input.Search {...this.props} onChange={this.onChange.bind(this)}>{this.props.children}</Input.Search>
    }
}
