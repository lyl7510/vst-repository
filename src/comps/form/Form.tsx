import Vst, {Component} from "../../vst/index";
import * as PropTypes from 'prop-types';
import "antd/es/grid/style";
import "./style/index.less";
import VstFormItem from "./FormItem";

export interface Iform {
    [name: string]: any;
}

export interface IruleItem {
    verify?: string | RegExp;
    validator?: (rule, value, formData) => void;
    message?: string;
}

export interface Irule {
    [name: string]: IruleItem | IruleItem[];
}

export interface IvstFormProps {
    model: Iform;
    rules: Irule
}

export interface IvstFormState {
    itemFields: Map<string, VstFormItem>;
}

export default class VstForm extends Component<IvstFormProps, IvstFormState> {

    public static childContextTypes = {
        formComponent: PropTypes.any
    };

    constructor(props: IvstFormProps) {
        super(props);
        this.state = {
            itemFields: new Map<string, VstFormItem>()
        }
    }

    public addItemField(name: string, vstFormItem: VstFormItem): void {
        this.state.itemFields.set(name, vstFormItem);
    }

    public getChildContext(): { formComponent: Component<IvstFormProps, IvstFormState> } {
        return {formComponent: this};
    }

    public showMessage(name: string, message: string): void {
        const vstFormItem:VstFormItem = this.state.itemFields.get(name);
        if(vstFormItem !== null){
            vstFormItem.showMessage(message);
        }
    }


    public validate(): boolean {
        const {itemFields} = this.state;
        let result: boolean = true;
        for (let vstFormItem of itemFields.values()) {
            const rs = vstFormItem.validate();
            if (!rs) {
                result = false;
            }
        }
        return result;
    }

    private renderBaseClass(): string {
        return "ant-row";
    }

    render(): Vst.Element {
        return <div className={this.renderBaseClass()}>{this.props.children}</div>;
    }

}
