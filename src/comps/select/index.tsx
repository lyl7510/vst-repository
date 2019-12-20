import Vst, {Component} from "../../vst";
import Select, {SelectProps, SelectValue} from "antd/es/select";
import "antd/es/select/style";
import './style/index.less';

const { Option } = Select;

export interface IvstSelectProps<T = SelectValue> extends SelectProps<SelectValue>{
    
}

export {Option as VstOption};

export default class VstSelect<T = SelectValue> extends Component<IvstSelectProps<T> , {}>{

    constructor(props:IvstSelectProps<T>) {
        super(props);
    }

    public render(): Vst.Element{
        return <Select {...this.props}>
                {this.props.children}
               </Select>
    }

}