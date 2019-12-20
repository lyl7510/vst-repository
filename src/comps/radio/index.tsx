import Vst, {Component} from "../../vst/index";
import Radio, {RadioProps} from "antd/es/radio";
import "antd/es/radio/style";
const RadioGroup = Radio.Group;

interface IvstRadioProps extends RadioProps {

}

export {RadioGroup as VstRadioGroup};

export default class VstRadio extends Component<IvstRadioProps, {}> {
    public render(): Vst.Element {
        return <Radio {...this.props}>{this.props.children}</Radio>;
    }
}