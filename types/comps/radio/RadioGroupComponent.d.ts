/// <reference types="react" />
import * as React from "react";
import { RadioGroupProps, RadioGroupState } from "antd/es/radio";
import * as PropTypes from "prop-types";
import { RadioChangeEvent } from "antd/es/radio/interface";
export default class RadioGroupComponent extends React.Component<RadioGroupProps, RadioGroupState> {
    static contextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: RadioGroupProps);
    componentWillMount(): void;
    onChange(e: RadioChangeEvent): void;
    private resetField(defaultValue);
    render(): JSX.Element;
}
