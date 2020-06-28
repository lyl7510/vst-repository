import * as React from 'react';
import ReadOnlyFormItem, {ReadOnlyFormItemProps} from "./ReadOnlyFormItem";

import "antd/es/grid/style";
import "./style/index.less";

export default class ReadOnlyForm extends React.Component<{}, {}> {

    public static Item: React.ComponentClass<ReadOnlyFormItemProps, {}> = ReadOnlyFormItem;

    constructor(props: {}) {
        super(props);
    }

    private renderBaseClass(): string {
        return "ant-row ant-form ant-form-horizontal";
    }

    render(): JSX.Element {
        return <div className={this.renderBaseClass()}>{this.props.children}</div>;
    }

}
