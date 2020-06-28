/// <reference types="react" />
import FormComponent, { FormComponentProps, FormComponentState } from "../../../vst/page/FormComponent";
import "@static/css/login.css";
export default class Login extends FormComponent<FormComponentProps, FormComponentState> {
    constructor(props: FormComponentProps);
    submit(): void;
    render(): JSX.Element;
}
