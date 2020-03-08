import * as React from 'react';
import Radio from "../../../comps/radio";

interface IradioComponentState {
    value: number;
}

export default class RadioComponent extends React.Component<{}, IradioComponentState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            value: 1
        }
    }

    public onChange(e): void {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    public render(): JSX.Element {
        return (
            <div>
                <Radio>Radio</Radio>
                <Radio.Group onChange={this.onChange.bind(this)} value={this.state.value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </Radio.Group>
            </div>
        )

    }
}