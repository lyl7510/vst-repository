/// <reference types="react" />
import * as React from 'react';
import ResetPwdComponent from "../resetpwd/ResetPwdComponent";
export interface ButtonComponentProps {
}
export interface ButtonComponentState {
}
export default class ButtonComponent extends React.Component<ButtonComponentProps, ButtonComponentState> {
    dialog: ResetPwdComponent;
    constructor(props: ButtonComponentProps);
    onClick(): void;
    render(): JSX.Element;
}
