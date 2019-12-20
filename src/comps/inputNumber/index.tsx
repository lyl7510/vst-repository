import Vst , {Component} from "../../vst/index";
import InputNumber ,{InputNumberProps} from "antd/es/input-number";
import "antd/es/input-number/style"
import "./style/index.less";

export interface IvstInputProps extends InputNumberProps {

}

export default class VstInputNumber extends Component<IvstInputProps , {}> {

    constructor(props: IvstInputProps) {
        super(props);
    }

    public render(): Vst.Element{
        return <InputNumber {...this.props}/>;
    }

}