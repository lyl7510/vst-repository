import Vst, {Component} from "../../../vst";
import VsbTab from "../../../block/tab";
import VstButton from "../../../comps/button";

interface TabComponentState {
    num: number;
}

export default class TabComponent extends Component<{}, TabComponentState> {

    private tab: VsbTab = null;

    constructor(props: {}) {
        super(props);
        this.state = {
            num: 1
        }
    }

    public onClick(): void {
        this.tab.addTabItem({
            key: "key" + this.state.num,
            title: "title" + this.state.num,
            content: <div>{this.state.num}</div>,
            close: this.state.num !== 1
        });
        const num = this.state.num;
        this.setState({
            num: num + 1
        });
    }

    public render(): Vst.Element {
        return <Vst.Fragment>
            <VstButton onClick={this.onClick.bind(this)}>测试</VstButton>
            <VsbTab ref={(node) => {
                this.tab = node
            }}></VsbTab>
        </Vst.Fragment>;
    }
}