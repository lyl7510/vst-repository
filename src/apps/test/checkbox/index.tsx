import Vst, {Component} from "../../../vst";
import VstCheckbox, {VstCheckboxGroup} from "../../../comps/checkbox";

interface CheckBoxComponentState {
    checkedList: string[];
    indeterminate: boolean;
    checkAll: boolean;
}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export default class CheckBoxComponent extends Component<{}, CheckBoxComponentState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        }
    }

    public onChange(checkedList: string[]) {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
    }

    public onCheckAllChange(e): void {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }

    public render(): Vst.Element {
        return (
            <div>
                <VstCheckbox
                    indeterminate={this.state.indeterminate}
                    onChange={this.onCheckAllChange.bind(this)}
                    checked={this.state.checkAll}>
                    Check all
                </VstCheckbox>
                <VstCheckboxGroup
                    options={plainOptions}
                    value={this.state.checkedList}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )

    }
}