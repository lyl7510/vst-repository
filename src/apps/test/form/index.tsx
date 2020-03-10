import * as React from 'react';
import {Form, Input, Button, Select, Radio} from "../../../comps";
import FormComponent, {FormComponentProps, FormComponentState} from "../../../vst/page/FormComponent";

export default class FormExample extends FormComponent<FormComponentProps, FormComponentState> {

    constructor(props: FormComponentProps) {
        super(props);
        this.state = {
            myForm: {
                MODULE_TYPE: undefined,
                NAME: undefined,
                ICON: undefined,
                URL: undefined,
                PARENT_ID: undefined,
                STATE: undefined,
                ORDER_LIST: undefined
            },
            rules: {
                NAME: {verify: "required", message: "模块名称不能为空"},
                MODULE_TYPE: {verify: "required", message: "模块类型不能为空"},
                STATE: {verify: "required", message: "请选择状态"}
            }
        }
    }

    protected submit(): void {
        console.log(this.state.myForm);
    }

    render(): JSX.Element {
        const {myForm} = this.state;
        return (<React.Fragment>
                <Form model={this.state.myForm} rules={this.state.rules} ref={(node) => this.myFrom = node}>
                    <Form.Item span={6} prop="NAME" label="名称">
                        <Input placeholder="请输入名称" value={myForm.NAME}/>
                    </Form.Item>
                    <Form.Item span={6} prop="MODULE_TYPE" label="模块类型">
                        <Select placeholder="请选择模块类型" value={myForm.MODULE_TYPE}>
                            <Select.Option value="1">Web端</Select.Option>
                            <Select.Option value="2">APP端</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item span={6} prop="ICON" label="图标">
                        <Input placeholder="请输入图标" value={myForm.ICON}/>
                    </Form.Item>
                    <Form.Item span={6} prop="URL" label="链接地址">
                        <Input placeholder="请输入链接地址" value={myForm.URL}/>
                    </Form.Item>
                    <Form.Item span={6} prop="PARENT_ID" label="父节点">
                        <Input placeholder="请选择父节点" value={myForm.PARENT_ID}/>
                    </Form.Item>
                    <Form.Item span={6} prop="STATE" label="状态">
                        <Radio.Group value={myForm.STATE}>
                            <Radio value={0}>正常</Radio>
                            <Radio value={1}>停用</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item span={6}>
                        <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                        <Button onClick={this.resetFields.bind(this)}>重置</Button>
                    </Form.Item>
                </Form>
            </React.Fragment>
        );
    }
}