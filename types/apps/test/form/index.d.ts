/// <reference types="react" />
import FormComponent, { FormComponentProps, FormComponentState } from "../../../vst/page/FormComponent";
export default class FormExample extends FormComponent<FormComponentProps, FormComponentState> {
    private textarea;
    constructor(props: FormComponentProps);
    protected submit(): void;
    render(): JSX.Element;
}
