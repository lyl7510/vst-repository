import * as React from 'react';
import * as Grid from "../../../comps/grid";

export default class GripComponent extends React.Component<{}, {}>  {

    constructor(props: {}) {
        super(props);
    }

    render(): JSX.Element {
        return <Grid.Row>
                    <Grid.Col span={8}>1111</Grid.Col>
                    <Grid.Col span={8}>222</Grid.Col>
                    <Grid.Col span={8}>333</Grid.Col>
                </Grid.Row>;
    }
}