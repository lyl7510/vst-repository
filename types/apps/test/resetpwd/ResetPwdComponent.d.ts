/// <reference types="react" />
import DialogFormComponent, { DialogFormComponentProps, DialogFormComponentState } from "../../../vst/page/DialogFormComponent";
export default class ResetPwdComponent extends DialogFormComponent<DialogFormComponentProps, DialogFormComponentState> {
    protected title: string;
    protected width: number;
    protected constructor(props: DialogFormComponentProps);
    renderContent(): JSX.Element;
    protected submit(): void;
}
