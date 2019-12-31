/*
import Vst, {Component} from "../index";
import VstForm, {Iform} from "../../comps/form";
import IformPage ,{IformPageState} from "./../interface/IformPage";

export default abstract class FormPage<P extends {}, S extends IformPageState> extends Component<{}, IformPageState> implements IformPage<{} , IformPageState> {

    public myForm: VstForm = null;

    public span: number = 6;

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

    public showMessage(name: string, message: string): void {
        this.myForm.showMessage(name, message);
    }

    public onSubmit(): void {
        const result = this.myForm.validate();
        if (result) {
            this.submit();
        }
    }

    public abstract submit(): void;

}*/
