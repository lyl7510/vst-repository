import Vst, {Component} from "../../../vst";
import VstInputNumber from "../../../comps/inputNumber";

interface SelectComponentState {
    defaultValue: number;
}

export default class SelectComponent extends Component<{}, SelectComponentState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            defaultValue: 2
        }
    }


    render(): Vst.Element {
        return <VstInputNumber value={this.state.defaultValue}/>;
    }
}