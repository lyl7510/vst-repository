import * as React from 'react';
import DialogComponent, {DialogComponentProps, DialogComponentState} from "../../../vst/page/DialogComponent";

export interface DialogExampleProps extends DialogComponentProps {

}

export interface DialogExampleState extends DialogComponentState {

}

export default class DialogExample extends DialogComponent<DialogExampleProps, DialogExampleState> {

    protected title: string = "测试窗口";
    protected width: number = 400;

    constructor(props: DialogExampleProps) {
        super(props);
    }

    public renderContent(): JSX.Element {
        return (<div>111111</div>)
    }

    protected ok(): void {

    }

}