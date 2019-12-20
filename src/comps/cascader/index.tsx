import Vst, {Component} from "../../vst";
import Cascader, {CascaderProps, CascaderState} from "antd/es/cascader";
import "antd/es/cascader/style";
import "./style/index.less";

export interface IvstCascaderProps extends CascaderProps {

}

export interface IvstCascaderState extends CascaderState {

}

export default class VstCascader extends Component<IvstCascaderProps, IvstCascaderState> {

    constructor(props: IvstCascaderProps) {
        super(props);
    }

    public render(): Vst.Element {
        return <Cascader {...this.props}>
            {this.props.children}
        </Cascader>
    }

}