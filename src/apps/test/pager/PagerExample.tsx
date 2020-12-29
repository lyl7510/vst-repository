import * as React from "react";
import PagerComponent, {PagerComponentState} from "@packages/pages/PagerComponent";
import Divider from "@packages/comps/divider";
import {Row, Col} from "@packages/comps/grid";
import List from "@packages/comps/list";

export interface PagerExampleState extends PagerComponentState {

}

export default class PagerExample extends PagerComponent<{}, PagerExampleState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            title: {
                text: "查询结果",
                btns: [{
                    text: "新增",
                    icon: "plus",
                    type: "primary"
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
                        render: () => {
                            return <span><a href={"#"}>修改</a><Divider type="vertical"/><a href={"#"}>删除</a></span>;
                        }
                    }
                ]
            }
        }
    }

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24}>
                        <List ref={(node) => {
                            this.list = node
                        }} title={this.state.title} table={this.state.table} ajax={this.state.ajax}
                              page={this.state.page}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }

};
