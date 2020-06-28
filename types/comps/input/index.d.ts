/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from "prop-types";
import { InputProps, InputState } from "antd/es/input/Input";
import "antd/es/input/style";
export default class InputComponent extends React.Component<InputProps, InputState> {
    static contextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        allowClear: boolean;
    };
    constructor(props: InputProps);
    componentWillMount(): void;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    private resetField(defaultValue);
    render(): JSX.Element;
}
