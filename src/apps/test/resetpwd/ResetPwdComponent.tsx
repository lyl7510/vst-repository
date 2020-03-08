import * as React from 'react';
import {Form, Input} from "../../../comps";
import DialogFormComponent, {DialogFormComponentProps,　DialogFormComponentState} from "../../../vst/page/DialogFormComponent";

export default class ResetPwdComponent extends DialogFormComponent<DialogFormComponentProps, DialogFormComponentState> {

    protected title:string = "重置密码";
    protected width:number = 550;

    protected constructor(props: DialogFormComponentProps) {
        super(props);
        this.state = {
            myForm: {
                password: "",
                repassword: ""
            },
            rules: {
                password: {verify: "required", message: "密码不能为空"},
                repassword: [{verify: "required", message: "重复密码不能为空"} , {verify: "repass", message: "重复密码必须和密码保持一致" , equal:"password"}]
            }
        }
    }

    public renderContent(): JSX.Element {
        return (<Form model={this.state.myForm} rules={this.state.rules} ref={(node)=>this.myFrom = node}>
                    <Form.Item span={24} prop="password" label="密码">
                        <Input placeholder="请输入密码" type="password"/>
                    </Form.Item>
                    <Form.Item span={24} prop="repassword" label="重复密码">
                        <Input placeholder="请再次输入密码" type="password"/>
                    </Form.Item>
                </Form>);
    }

    protected submit(): void {

    }

}