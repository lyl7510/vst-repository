import * as React from 'react';
import {Button,Form,Icon,Input} from "../../../comps";
import FormComponent, {FormComponentProps, FormComponentState} from "../../../vst/page/FormComponent";

import "@static/css/login.css";

export default class Login extends FormComponent<FormComponentProps, FormComponentState> {
    constructor(props: FormComponentProps) {
        super(props);
        this.state = {
            myForm: {
                username: "",
                password: ""
            },
            rules: {
                username: [{verify: "required", message: "用户名不能为空"}],
                password: {verify: "required", message: "密码不能为空"}
            }
        }
    }

    public submit(): void {
        console.log(this.state.myForm);
    }

    render(): JSX.Element {
        const {myForm, rules} = this.state;
        return (
            <div className="login-bg">
                {<div className="login">
                    <div className="login-title">微信小商城后台管理系统</div>
                    <div className="dark-banner-wrap"></div>
                    <Form ref={(node) => this.myFrom = node} model={myForm} rules={rules}>
                        <Form.Item prop="username" span={24}>
                            <Input autoComplete="off" prefix={<Icon type="user"/>} placeholder="请输入手机号"/>
                        </Form.Item>
                        <Form.Item prop="password" span={24}>
                            <Input type="password" autoComplete="off" prefix={<Icon type="lock"/>} placeholder="请输入密码"/>
                        </Form.Item>
                        <Form.Item span={24}>
                            <Button className="login-btn" type="primary"
                                    onClick={this.handleSubmit.bind(this)}>提交</Button>
                        </Form.Item>
                    </Form>
                </div>}
            </div>
        );
    }
}