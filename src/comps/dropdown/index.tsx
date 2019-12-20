import Vst, {Component} from "../../vst";
import Dropdown, {DropDownProps} from "antd/es/dropdown";
import "antd/es/dropdown/style";

export interface VstDropdownProps extends DropDownProps {

}

export default class VstDropdown extends Component<VstDropdownProps, any> {

    constructor(props: VstDropdownProps) {
        super(props);
    }

    render(): Vst.Element {
        return <Dropdown {...this.props}>{this.props.children}</Dropdown>;
    }
}