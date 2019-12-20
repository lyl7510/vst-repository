import Vst, {Component} from "../../../vst";
import VstRadio, {VstRadioGroup} from "../../../comps/radio";

interface IradioComponentState {
    value: number;
}

export default class RadioComponent extends Component<{}, IradioComponentState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            value: 1
        }
    }

    public onChange(e): void {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    public render(): Vst.Element {
        return (
            <div>
                <VstRadio>Radio</VstRadio>
                <VstRadioGroup onChange={this.onChange.bind(this)} value={this.state.value}>
                    <VstRadio value={1}>A</VstRadio>
                    <VstRadio value={2}>B</VstRadio>
                    <VstRadio value={3}>C</VstRadio>
                    <VstRadio value={4}>D</VstRadio>
                </VstRadioGroup>
            </div>
        )

    }
}