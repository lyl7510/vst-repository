import * as React from "react";
import * as PropTypes from "prop-types";
import Radio from "antd/es/radio";
import {RadioChangeEvent, RadioGroupProps} from "antd/es/radio/interface";
import ComponentConfig from "@packages/config/ComponentConfig";

export default class ArtGroup extends React.Component<RadioGroupProps, {}> {

    public static defaultProps = ComponentConfig.defaultProps.radioGroup;

    public static contextTypes = {
        onChange: PropTypes.func
    };

    constructor(props: RadioGroupProps) {
        super(props);
    }

    /**
     * change改变的事件
     * @param {RadioChangeEvent} event
     */
    protected onChange(event: RadioChangeEvent) {
        this.context.onChange && this.context.onChange(event.target.value);
        this.props.onChange && this.props.onChange(event);
    }

    public render(): JSX.Element {
        return <Radio.Group {...this.props} onChange={this.onChange.bind(this)}>
            {this.props.children}
        </Radio.Group>
    }

};
