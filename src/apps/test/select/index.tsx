import * as React from 'react';
import Select from "./../../../comps/select";
import "antd/es/select/style";

export default class SelectComponent extends React.Component<{}, {}>{

    constructor(props: {}) {
        super(props);
    }

    render(): JSX.Element{
        return <Select placeholder="Select a person">
                    <Select.Option value="jack" title="dsafsalkfjsdafs">Jack</Select.Option>
                    <Select.Option value="lucy" title="dsafsalkfjsdafs">Lucy</Select.Option>
                </Select>;
    }
}