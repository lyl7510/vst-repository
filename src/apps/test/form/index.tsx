import * as React from 'react';
import {Form, Input, Button ,Select} from "../../../comps";
import FormComponent, {FormComponentProps, FormComponentState} from "../../../vst/page/FormComponent";

export default class FormExample extends FormComponent<FormComponentProps, FormComponentState> {

    constructor(props: FormComponentProps) {
        super(props);
        this.state = {
            myForm:{
                type:undefined,
                name:""
            },
            rules:{
                name: {verify: "telphone", message: "查询条件不能为空"}
            }
        }
    }

    protected submit(): void {
        console.log(this.myFrom.getFormData());
    }

    render(): JSX.Element {
        const {myForm} = this.state;
        return (<React.Fragment>
                <Form model={this.state.myForm} rules={this.state.rules} ref={(node) => this.myFrom = node}>
                    <Form.Item span={6} prop="type" label="模块类型">
                        <Select placeholder="请选择模块类型" value={myForm.type}>
                            <Select.Option value="1">Web端</Select.Option>
                            <Select.Option value="2">APP端</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item span={6} prop="name" label="名称">
                        <Input placeholder="请输入名称" value={myForm.name}/>
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