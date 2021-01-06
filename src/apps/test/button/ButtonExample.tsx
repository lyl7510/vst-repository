import * as React from "react";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import {Button} from "@packages/comps";
import md from "./index.md";
import "codemirror/mode/javascript/javascript";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

export interface ButtonExampleState {
    md: any;
}

export default class ButtonExample extends React.Component<{}, ButtonExampleState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            md: md
        }
    }


    public render(): React.ReactNode {
        return <React.Fragment>
            <CodeMirror value={"export default class Greent {}"} options={{ mode: "text/typescript", theme: 'material', lineNumbers: true}}/>
            <Button type="primary">取消</Button>
            <Button type="primary">确定</Button>
        </React.Fragment>
    }

};

