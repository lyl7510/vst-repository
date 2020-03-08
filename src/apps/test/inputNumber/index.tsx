import * as React from 'react';
import InputNumber from "../../../comps/inputNumber";

export  interface SelectComponentState {
    defaultValue: number;
}

export default class InputNumberComponent extends React.Component<{}, SelectComponentState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            defaultValue: 2
        }
    }


    render(): JSX.Element {
        return <InputNumber value={this.state.defaultValue}/>;
    }
}