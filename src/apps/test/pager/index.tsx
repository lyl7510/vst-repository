import * as React from 'react';
import {Form, Select, Input, Button} from "../../../comps"
import QueryPagerComponent, {
    QueryPagerComponentProps,
    QueryPagerComponentState
} from "../../../vst/page/QueryPagerComponent";

export default class PagerExample extends QueryPagerComponent<QueryPagerComponentProps, QueryPagerComponentState> {

    protected constructor(props: QueryPagerComponentProps) {
        super(props);
        this.state = {
            model: {
                MODULE_TYPE: "",
                NAME: ""
            },
            rules: {},
            design: {
                url: "/",
                title: "",
                checkbox: true,
                btns: [],
                columns: []
            }
        }
    }

    protected renderForm(): JSX.Element {
        return (<Form model={this.state.model} rules={this.state.rules}>
                    <Form.Item prop="MODULE_TYPE" span={6} label="模块类型">
                        <Select placeholder="请选择模块类型">
                            <Select.Option value="1">Web端</Select.Option>
                            <Select.Option value="2">APP端</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item prop="NAME" span={6} label="模块名称">
                        <Input placeholder="请输入模块名称"/>
                    </Form.Item>
                    <Form.Item span={6}>
                        <Button type="primary">提交</Button><Button>重置</Button>
                    </Form.Item>
                </Form>);
    }

}