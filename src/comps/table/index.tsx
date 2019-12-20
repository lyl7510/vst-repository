import Vst, {Component} from "../../vst/index";
import Table, {TableProps as ItableProps} from "antd/es/table";

interface IvstTableProps<T = {}> extends ItableProps<T> {

}

export default class VstTable extends Component<IvstTableProps ,{}> {

    public static defaultProps = {
        pagination: false
    }


    constructor(props) {
        super(props);
    }

    public render(): Vst.Element {
        return <Table {...this.props} />;
    }
}