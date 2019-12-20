/*
import Vst from "../index";
import FormPage, {FormPageState} from "./FormPage";
import VstModal from "./../../comps/modal";

export interface DialogFormPageState extends FormPageState {
    visible: boolean;
    width: number;
}

export default abstract class DialogFormPage<DialogFormPageProps extends {}, S extends DialogFormPageState> extends FormPage <{}, DialogFormPageState> {

    protected width: number = 800;
    protected title: string;

    constructor(props: {}) {
        super(props);
        this.state = {

        };
    }

    public abstract renderContent(): Vst.Element;

    public render(): Vst.Element {
        return <VstModal width={this.width} title={this.title}>
            {this.renderContent()}
        </VstModal>;
    }

}*/
