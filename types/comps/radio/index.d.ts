/// <reference types="react" />
import * as React from "react";
import { RadioGroupProps, RadioGroupState, RadioProps } from "antd/es/radio";
import "antd/es/radio/style";
import { RadioButtonProps } from "antd/es/radio/radioButton";
export interface RadioState {
    value: string | number;
}
export default class RadioComponent extends React.Component<RadioProps, RadioState> {
    static Group: React.ComponentClass<RadioGroupProps, RadioGroupState>;
    static Button: React.ComponentClass<RadioButtonProps, any>;
    constructor(props: RadioProps);
    render(): JSX.Element;
}
