import Vst, {Component} from "../../../vst";
import VstForm, {VstFormItem, Iform, Irule} from "../../../comps/form";
import VstInput from "../../../comps/input";
import VstIcon from "../../../comps/icon";
import {Button} from "antd";

export interface IformComponentProps {

}

export interface IformComponentState {
    myForm: Iform;
    rules: Irule;
}

export default class FormComponent extends Component<IformComponentProps, IformComponentState> {

    private myForm: VstForm = null;

    constructor(props: IformComponentProps) {
        super(props);
        this.state = {
            myForm: {
                username: '',
                password: ''
            },
            rules: {
                "username": {verify: "required", message: "用户名不能为空"},
                "password": {verify: "required", message: "密码不能为空"}
            }
        }
    }

    public onChange(name: string, e: Vst.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
        const newForm: Iform = {};
        newForm[name] = e.target.value;
        const myForm = Object.assign(this.state.myForm, newForm);
        this.setState({
            myForm: myForm
        });
        const {itemFields} = this.myForm.state;
        itemFields.get(name).validate();
    }

    public onClick() {
        this.myForm.validate();
    }

    render(): Vst.Element {
        const {username, password} = this.state.myForm;
        return (
            <VstForm model={this.state.myForm} rules={this.state.rules} ref={(node) => {
                this.myForm = node;
            }}>
                <VstFormItem span={24} prop="username">
                    <VstInput prefix={<VstIcon type="user"/>} placeholder="请输入用户名"
                              onChange={this.onChange.bind(this, "username")} value={username}/>
                </VstFormItem>
                <VstFormItem span={24} prop="password">
                    <VstInput prefix={<VstIcon type="user"/>} placeholder="请输入密码"
                              onChange={this.onChange.bind(this, "password")} value={password} type="password"/>
                </VstFormItem>
                <Button onClick={this.onClick.bind(this)}>提交</Button>
            </VstForm>
        );
    }
}