import DialogComponent, {DialogComponentState} from "@packages/pages/DialogComponent";
import {IModel} from "@packages/comps/form/interface";
import Form from "@packages/comps/form/Form";
import {IFormItemRule} from "@packages/pages/FormComponent";
import {IFormResult} from "@packages/comps/form/interface/index";

export interface DialogFormComponentState extends DialogComponentState {
    model?: IModel;
    rules?: IFormItemRule;
}

export default abstract class DialogFormComponent<P, S> extends DialogComponent<P, S> {

    protected myForm: Form = null;

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
    protected submit(model: IModel): void {
        console.log(model);
    }

    /**
     * 重置方法
     */
    public handReset(): void {
        this.myForm.resetFields();
    }

}


