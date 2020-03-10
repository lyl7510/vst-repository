import * as React from "react";
import Radio, {RadioGroupProps, RadioGroupState, RadioProps} from "antd/es/radio";
import "antd/es/radio/style";
import RadioGroupComponent from "./RadioGroupComponent";
import {RadioButtonProps} from "antd/es/radio/radioButton";

export interface RadioState {
    value: string | number;
}

export default class RadioComponent extends React.Component<RadioProps, RadioState> {

    public static Group: React.ComponentClass<RadioGroupProps, RadioGroupState> = RadioGroupComponent;
    public static Button: React.ComponentClass<RadioButtonProps, any> = Radio.Button;

    constructor(props: RadioProps) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    public render(): JSX.Element {
        return <Radio {...this.props}>{this.props.children}</Radio>
    }

};