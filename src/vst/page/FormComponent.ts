import BaseComponent, {BaseComponentProps} from "./BaseComponent";
import Form, {IForm, IRule} from "./../../comps/form";

export interface FormComponentProps extends BaseComponentProps{

}

export interface FormComponentState {
    myForm: IForm;
    rules: IRule;
}

export default abstract class FormComponent<P extends FormComponentProps, S extends FormComponentState> extends BaseComponent<FormComponentProps, FormComponentState> {

    public myFrom: Form;

    protected constructor(props: FormComponentProps) {
        super(props);
        this.state = {
            myForm: {},
            rules: {}
        }
    }

    protected validate(): boolean {
        return this.myFrom.validate();
    }

    protected handleSubmit(): void {
        if (this.validate()) {
            this.submit();
        }
    }

    protected abstract submit(): void;
}