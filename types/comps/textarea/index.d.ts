/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from "prop-types";
import { TextAreaProps, TextAreaState } from "antd/es/input/TextArea";
import "antd/es/input/style";
export default class Index extends React.Component<TextAreaProps, TextAreaState> {
    static contextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        allowClear: boolean;
    };
    constructor(props: TextAreaProps);
    componentWillMount(): void;
    onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    private resetField(defaultValue);
    render(): JSX.Element;
}
