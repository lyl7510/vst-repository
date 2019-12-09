import Vst , {Component} from "../../vst/index";

import Input ,{InputProps , InputState} from "antd/es/input/Input";
import "antd/es/input/style"

export interface IvstInputProps extends InputProps {

}

export interface IvstInputState extends InputState{
    
}

export default class VstInput extends Component<IvstInputProps , IvstInputState> {

    constructor(props: IvstInputProps) {
        super(props);
    }

    public render(): Vst.Element{
        return <Input {...this.props}/>;
    }
}