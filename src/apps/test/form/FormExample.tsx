import * as React from "react";
import {
    Button,
    Row,
    Col,
    Form,
    Input,
    Select,
    Radio,
    Checkbox,
    DatePicker,
    Upload,
    Icon,
    SelectTree,
    Cascader, Editor
} from "@packages/comps";
import FormComponent, {FormComponentState} from "@packages/pages/FormComponent";
import {IFormResult} from "@packages/comps/form/interface/index";

import "./index.css";
import {IResult} from "@packages/pages/BaseComponent";

export interface FormExampleState extends FormComponentState {
    departList: any[];
    organList: any[];
}

export default class FormExample extends FormComponent<{}, FormExampleState> {

    protected myForm: Form = null;

    constructor(props: {}) {
        super(props);
        this.state = {
            model: {
                accont: undefined,
                username: undefined,
                telphone: undefined,
                organ: undefined,
                depart: undefined,
                status: undefined,
                sex: undefined,
                interests: undefined,
                brithday: undefined,
                image: undefined,
                content: "<p>asdfasdfasdfasd</p>"
            },
            rules: {
                /* accont: {validator: "email|telphone", message: "账号必须是手机号或者邮箱"},
                 username: {validator: "required", message: "用户名不能为空"},
                 telphone: [{validator: "required", message: "手机号不能为空"}, {validator: "telphone", message: "手机号格式不正确"}],
                 organ: {validator: "required", message: "组织机构不能为空"},
                 depart: {validator: "required", message: "部门不能为空"},
                 status: {validator: "required", message: "状态不能为空"},
                 brithday: {validator: "required", message: "出生日期不能为空"},
                 sex: {validator: "required", message: "性别为空"},
                 interests: {validator: "length", max: 3, min: 1, message: "爱好至少选择一项，最多选择三项"},*/
                image: [{validator: "xlsxFile", message: "附件只能上传xlsx文件", max: 3}],
                content: {validator: "editor", message: "内容不能为空", max: 500}
            },
            departList: [],
            organList: []
        }
    }

    componentDidMount() {
        super.post("/api/admin/depart/select", {id: "123"}).then((data: any) => {
            super.post("/api/admin/organ/list", {id: 12}).then((result: IResult) => {
                this.setState({
                    departList: data.beans,
                    organList: result.beans
                });
            });
        });
    }

    public submit(): void {
        this.myForm.validateFields().then((result: IFormResult) => {
            if (result.valid) {
                console.log(result.bean);
            } else {
                console.log("error", result.bean);
            }
        });
    }

    private reset(): void {
        this.myForm.resetFields();
    }

    public render(): React.ReactNode {
        const {model, rules, departList, organList} = this.state;
        return <React.Fragment>
            <div className={"form-container"}>
                <Row>
                    <Form layout={"inline"} itemCol={12} labelWidth={120} model={model} ref={(node) => {
                        this.myForm = node
                    }}>
                        <Form.Item label={"账号"} rule={rules.accont} name={"accont"}>
                            <Input placeholder={"请输入手机号或者邮箱"}/>
                        </Form.Item>
                        <Form.Item label={"用户名"} rule={rules.username} name={"username"}>
                            <Input placeholder={"请输入用户名"}/>
                        </Form.Item>
                        <Form.Item label={"手机号"} rule={rules.telphone} name={"telphone"}>
                            <Input placeholder={"请输入手机号"}/>
                        </Form.Item>
                        <Form.Item label={"组织机构"} rule={rules.organ} name={"organ"}>
                            <Cascader placeholder={"请选择组织机构"} fieldNames={{label: "name", value: "id"}}
                                      options={organList}/>
                        </Form.Item>
                        <Form.Item label={"部门"} rule={rules.depart} name={"depart"}>
                            <SelectTree placeholder={"请选择部门树"} options={{label: "name", value: "id"}}
                                        dataSource={departList}/>
                        </Form.Item>
                        <Form.Item label={"状态"} rule={rules.status} name={"status"}>
                            <Select placeholder={"请选择状态"}>
                                <Select.Option value={0}>启用</Select.Option>
                                <Select.Option value={1}>停用</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label={"出生日期"} rule={rules.brithday} name={"brithday"}>
                            <DatePicker placeholder={"请选择出生日期"}></DatePicker>
                        </Form.Item>
                        <Form.Item label={"性别"} rule={rules.sex} name={"sex"}>
                            <Radio.Group>
                                <Radio value={0}>男</Radio>
                                <Radio value={1}>女</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label={"爱好"} rule={rules.interests} name={"interests"}>
                            <Checkbox.Group>
                                <Checkbox value={0}>游泳</Checkbox>
                                <Checkbox value={1}>爬山</Checkbox>
                                <Checkbox value={2}>健身</Checkbox>
                                <Checkbox value={3}>旅游</Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                        <Form.Item label={"个人头像"} rule={rules.image} itemCol={24} name={"image"}>
                            <Upload>
                                <Button>
                                    <Icon type="upload"/> 点击上传
                                </Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item label={"文章内容"} rule={rules.content} itemCol={24} name={"content"}>
                            <Editor></Editor>
                        </Form.Item>
                    </Form>
                </Row>
                <Row className={"btn-container"}>
                    <Col span={24}>
                        <Button onClick={this.reset.bind(this)}>重置</Button>
                        <Button type="primary" onClick={this.submit.bind(this)}>保存</Button>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    }

};

