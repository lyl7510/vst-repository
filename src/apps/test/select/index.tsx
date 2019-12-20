import Vst, {Component} from "../../../vst";
import VstSelect , {VstOption} from "../../../comps/select";

export default class SelectComponent extends Component<{}, {}>{

    constructor(props: {}) {
        super(props);
    }

    render(): Vst.Element{
        return <VstSelect  placeholder="Select a person">
            <VstOption value="jack" title="dsafsalkfjsdafs">Jack</VstOption>
            <VstOption value="lucy" title="dsafsalkfjsdafs">Lucy</VstOption>
        </VstSelect>;
    }
}