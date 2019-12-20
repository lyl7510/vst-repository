import Vst, {Component} from "../../../vst";
import VstDatePicker, {VstMonthPicker, VstRangePicker, VstWeekPicker} from "../../../comps/date";

export default class DateComponent extends Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    public onChange(date, dateString): void {
        console.log(date, dateString);
    }

    public render(): Vst.Element {
        return (
            <div>
                <VstDatePicker onChange={this.onChange.bind(this)}/>
                <br/>
                <VstMonthPicker onChange={this.onChange.bind(this)} placeholder="Select month"/>
                <br/>
                <VstRangePicker onChange={this.onChange.bind(this)}/>
                <br/>
                <VstWeekPicker onChange={this.onChange.bind(this)} placeholder="Select week"/>
            </div>
        );
    }
}