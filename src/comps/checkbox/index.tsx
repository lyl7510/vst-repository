import Vst, {Component} from "../../vst/index";
import Checkbox, {CheckboxProps} from "antd/es/checkbox";
import "antd/es/checkbox/style";
const CheckboxGroup = Checkbox.Group;

interface IvstCheckboxProps extends CheckboxProps {

}

export {CheckboxGroup as VstCheckboxGroup};

export default class VstCheckbox extends Component<IvstCheckboxProps, {}> {
    public render(): Vst.Element {
        return <Checkbox {...this.props}>{this.props.children}</Checkbox>;
    }
}