import * as React from "react";
import Radio from "antd/es/radio";
import {RadioProps, RadioGroupProps} from "antd/es/radio/interface";
import {RadioButtonProps} from "antd/es/radio/radioButton";

import ArtGroup from "./Group";

import "antd/es/radio/style/index.css";

export default class ArtRadio extends React.Component<RadioProps, {}> {

    public static Group: React.ComponentClass<RadioGroupProps, {}> = ArtGroup;
    public static Button: React.ComponentClass<RadioButtonProps, any> = Radio.Button;

    constructor(props: RadioProps) {
        super(props);
    }

    public render(): JSX.Element {
        return <Radio {...this.props}>
            {this.props.children}
        </Radio>
    }

};
