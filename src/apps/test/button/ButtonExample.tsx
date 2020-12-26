import * as React from "react";
import Button from "@packages/comps/button/index";
import message from "@packages/comps/message";

export default class ButtonExample extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }
    public onClick(){
        message.success("ss").then()
    }
    public render(): React.ReactNode {
        return  <React.Fragment>
            <Button type="primary">取消</Button>
            <Button type="primary">确定</Button>
        </React.Fragment>
    }

};

