import * as React from "react";
import {Modal, Row, Form, Input, Radio, Select} from "@packages/comps";
import DialogFormComponent, {DialogFormComponentState} from "@packages/pages/DialogFormComponent";
import {IResult} from "@packages/pages/BaseComponent";
import {ISelectOption} from "@packages/comps/select";

export interface UserDialogState extends DialogFormComponentState {
    roleList: any[];
}

export interface UserDialogProps {
    callback: () => void;
}

export default class UserDialog extends DialogFormComponent<UserDialogProps, UserDialogState> {

    private roleSelect: ISelectOption = {
        label: "name",
        value: "id"
    };

    constructor(names: UserDialogProps) {
        super(names);
        this.state = {
            visible: false,
            width: 680,
            title: "新增用户",
            model: {
                username: undefined,
                rolename: undefined,
                password: undefined,
                repassword: undefined,
                telphone: undefined,
                role_id: undefined,
                email: undefined,
                status: undefined
            },
            rules: {
                username: {validator: "required", message: "用户名不能为空"},
                rolename: {validator: "required", message: "姓名不能为空"},
                password: {validator: "required", message: "密码不能为空"},
                repassword: {validator: "repass", message: "重复密码和密码不一致", equal: "password"},
                telphone: [{validator: "required", message: "手机号不能为空"}, {validator: "telphone", message: "手机号格式不正确"}],
                role_id: {validator: "required", message: "角色不能为空"},
                email: {validator: "email", message: "邮箱格式不正确"},
                status: {validator: "required", message: "状态不能为空"}
            },
            roleList: []
        };
    }

    public open(param?: any): void {
        if (param) {
            super.post("/api/admin/role/findList").then((result: IResult) => {
                if (result.returnCode === 0) {
                    this.setState({
                        visible: true,
                        roleList: result.beans,
                        model: {
                            username: param.username,
                            rolename: param.rolename,
                            telphone: param.telphone,
                            role_id: param.role_id,
                            email: param.email,
                            status: param.status
                        },
                        title: "修改用户"
                    });
                }
            });
        } else {
            super.post("/api/admin/role/findList").then((result: IResult) => {
                if (result.returnCode === 0) {
                    this.setState({
                        visible: true,
                        roleList: result.beans
                    });
                }
            });
        }
    };

    public close(): void {
        this.setState({
            visible: false
        });
    }

    public render(): JSX.Element {
        const {visible, width, title, model, rules} = this.state;
        return <Modal visible={visible} width={width} title={title} onOk={this.handSubmit.bind(this)}
                      onCancel={this.close.bind(this)}>
            <Row>
                <Form ref={(node) => this.myForm = node} model={model} itemCol={12}>
                    <Form.Item name="username" label="用户名" rule={rules.username}>
                        <Input placeholder="请输入用户名"/>
                    </Form.Item>
                    <Form.Item name="rolename" label="姓名" rule={rules.rolename}>
                        <Input placeholder="请输入姓名"/>
                    </Form.Item>
                    <Form.Item name="password" label="密码" rule={rules.password}>
                        <Input placeholder="请输入密码" type="password"/>
                    </Form.Item>
                    <Form.Item name="repassword" label="确认密码" rule={rules.repassword}>
                        <Input placeholder="请再次输入密码" type="password"/>
                    </Form.Item>
                    <Form.Item name="telphone" label="手机号" rule={rules.telphone}>
                        <Input placeholder="请输入手机号"/>
                    </Form.Item>
                    <Form.Item name="role_id" label="用户角色" rule={rules.role_id}>
                        <Select placeholder="请选择用户角色" dataSource={this.state.roleList}
                                options={this.roleSelect}></Select>
                    </Form.Item>
                    <Form.Item name="email" label="邮箱" rule={rules.email}>
                        <Input placeholder="请输入邮箱"/>
                    </Form.Item>
                    <Form.Item name="status" label="状态" rule={rules.status}>
                        <Radio.Group>
                            <Radio value={0}>正常</Radio>
                            <Radio value={1}>停用</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Row>
        </Modal>
    }

}