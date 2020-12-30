import * as React from "react";
import {Divider, Row, Col, List, Button, Input, Form} from "@packages/comps";
import QueryPagerComponent, {QueryPagerComponentState} from "@packages/pages/QueryPagerComponent";
import UserDialog from "./UserDialog";

export interface PagerExampleState extends QueryPagerComponentState {

}

export default class PagerExample extends QueryPagerComponent<{}, PagerExampleState> {

    private dialog: UserDialog = null;

    constructor(props: {}) {
        super(props);
        this.state = {
            model: {
                "username": undefined,
                "rolename": undefined,
                "telphone": undefined
            },
            title: {
                text: "查询结果",
                btns: [{
                    text: "新增",
                    icon: "plus",
                    type: "primary",
                    onClick: this.add.bind(this)
                },
                    {
                        text: "删除",
                        icon: "minus",
                        type: "danger"
                    }
                ]
            },
            ajax: {
                url: "/api/admin/user/findPager",
                method: "post",
                headers: {
                    "content-type": "application/json;charset=utf-8"
                }
            },
            table: {
                key: "id",
                boxType: "checkbox",
                columns: [
                    {
                        title: '用户名',
                        dataIndex: 'username',
                        key: 'username'
                    },
                    {
                        title: '手机号',
                        dataIndex: 'telphone',
                        key: 'telphone'
                    },
                    {
                        title: '姓名',
                        dataIndex: 'rolename',
                        key: 'rolename'
                    },
                    {
                        title: '邮箱',
                        dataIndex: 'email',
                        key: 'email'
                    },
                    {
                        title: '操作',
                        render: (record: any) => {
                            return <span><a href={"javascript:void(0)"}
                                            onClick={this.edit.bind(this, record)}>修改</a><Divider
                                type="vertical"/><a href={"#"}>删除</a></span>;
                        }
                    }
                ]
            }
        }
    }

    private add(): void {
        this.dialog.open();
    }

    private edit(record: any): void {
        this.dialog.open(record);
    }

    public render(): React.ReactNode {
        const {model} = this.state;
        return (
            <React.Fragment>
                <Row>
                    <Form itemCol={6} model={model} labelWidth={100} ref={(node) => {
                        this.myForm = node
                    }}>
                        <Form.Item label={"用户名"} name={"username"}>
                            <Input placeholder={"请输入用户名"}/>
                        </Form.Item>
                        <Form.Item label={"姓名"} name={"rolename"}>
                            <Input placeholder={"请输入姓名"}/>
                        </Form.Item>
                        <Form.Item label={"手机号"} name={"telphone"}>
                            <Input placeholder={"请输入手机号"}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.search.bind(this)}>查询</Button>
                            <Button onClick={this.reset.bind(this)}>重置</Button>
                        </Form.Item>
                    </Form>
                </Row>
                <Row>
                    <Col span={24}>
                        <List ref={(node) => {
                            this.list = node
                        }} title={this.state.title} table={this.state.table} ajax={this.state.ajax}
                              page={this.state.page}/>
                    </Col>
                </Row>
                <UserDialog ref={(node) => this.dialog = node} callback={this.search.bind(this)}/>
            </React.Fragment>
        );
    }

};
