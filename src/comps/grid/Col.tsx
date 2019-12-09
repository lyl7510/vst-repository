import Vst, {Component} from "../../vst";
import Col, {ColProps as IColProps} from "antd/es/grid/col";

export interface IvstColProps extends IColProps {

}

export default class VstCol extends Component<IvstColProps, {}> {
    render(): Vst.Element {
        return <Col {...this.props}>{this.props.children}</Col>;
    }
}
