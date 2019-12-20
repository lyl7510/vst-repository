import Vst, {Component} from "../../../vst";
import {VstRow, VstCol} from "../../../comps/grid";

export default class GripComponent extends Component<{}, {}>  {

    constructor(props: {}) {
        super(props);
    }

    render(): Vst.Element {
        return <VstRow>
            <VstCol span={8}>1111</VstCol>
            <VstCol span={8}>222</VstCol>
            <VstCol span={8}>333</VstCol>
        </VstRow>;
    }
}