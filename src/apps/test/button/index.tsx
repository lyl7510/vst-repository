import * as React from 'react';
import Button from "../../../comps/button";
import ResetPwdComponent from "../resetpwd/ResetPwdComponent";

export interface ButtonComponentProps {

}

export interface ButtonComponentState {

}

export default class ButtonComponent extends React.Component<ButtonComponentProps, ButtonComponentState> {

    public dialog: ResetPwdComponent = null;

    constructor(props: ButtonComponentProps) {
        super(props);
    }

    public onClick(): void {
        this.dialog.open();
    }

    render(): JSX.Element {
        return (
            <React.Fragment>
                <Button onClick={this.onClick.bind(this)}>测试</Button>
                <ResetPwdComponent ref={(node) => {
                    this.dialog = node;
                }}></ResetPwdComponent>
            </React.Fragment>
        );
    }
}