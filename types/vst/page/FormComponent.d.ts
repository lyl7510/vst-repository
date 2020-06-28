import BaseComponent, { BaseComponentProps } from "./BaseComponent";
import Form, { IForm, IRule } from "./../../comps/form";
export interface FormComponentProps extends BaseComponentProps {
}
export interface FormComponentState {
    myForm: IForm;
    rules: IRule;
}
export default abstract class FormComponent<P extends FormComponentProps, S extends FormComponentState> extends BaseComponent<FormComponentProps, FormComponentState> {
    myFrom: Form;
    protected constructor(props: FormComponentProps);
    protected validate(): boolean;
    protected handleSubmit(): void;
    protected abstract submit(): void;
}
