import Vst, {Component} from "../../../vst";
import VstTextArea from "../../../comps/textarea";

export default class SelectComponent extends Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    render(): Vst.Element {
        return <VstTextArea rows={4} />;
    }
}