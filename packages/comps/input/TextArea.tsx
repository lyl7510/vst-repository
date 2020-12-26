import * as React from "react";
import * as PropTypes from "prop-types";
import Input from "antd/es/input";
import {TextAreaProps ,TextAreaState} from "antd/es/input/TextArea";

export default class TextArea extends React.Component<TextAreaProps, TextAreaState> {

    public static contextTypes = {
        onChange: PropTypes.func
    };

    constructor(props: TextAreaProps) {
        super(props);
    }

    /**
     * change改变的事件
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    protected onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.context.onChange && this.context.onChange(event.target.value);
        this.props.onChange && this.props.onChange(event);
    }

    public render(): React.ReactNode {
        return <Input.TextArea {...this.props} onChange={this.onChange.bind(this)}></Input.TextArea>
    }

};
