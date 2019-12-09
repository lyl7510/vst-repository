import Vst, {Component} from "../../vst";
import Row, {RowProps as IRowProps, RowState as IRowState} from "antd/es/grid/row";

export interface IvstRowProps extends IRowProps {

}

export interface IvstRowState extends IRowState {

}

export default class VstRow extends Component<IvstRowProps, IvstRowState> {
    render(): Vst.Element {
        return <Row {...this.props}>{this.props.children}</Row>;
    }
}
