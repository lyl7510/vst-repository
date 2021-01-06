import BaseComponent from "./BaseComponent";
import {IModel, IRule} from "@packages/comps/form/interface";
import Form from "@packages/comps/form/Form";
import {IFormResult} from "@packages/comps/form/interface/index";

export interface IFormItemRule {
    [name: string]: IRule | IRule[];
}

export interface FormComponentState {
    model?: IModel;
    rules?: IFormItemRule;
}

export default class FormComponent<P, S> extends BaseComponent<P, S> {

    protected myForm: Form = null;

    constructor(props: P) {
        super(props);
    }

    /**
     * 验证方法
     */
    public handSubmit(): void {
        this.myForm.validateFields().then((result: IFormResult) => {
            if (result.valid) {
                this.submit(result.bean);
            }
        })
    }

    /**
     * 提交方法
     * @param {IModel} model
     */
    public submit(model: IModel): void {
        console.log(model);
    }

    /**
     * 重置方法
     */
    public handReset(): void {
        this.myForm.resetFields();
    }
}
