import * as React from 'react';
import Checkbox from "../../../comps/checkbox";

export interface CheckBoxComponentState {
    checkedList: string[];
    indeterminate: boolean;
    checkAll: boolean;
}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export default class CheckBoxComponent extends React.Component<{}, CheckBoxComponentState> {

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

    public render(): JSX.Element {
        return (
            <div>
                <Checkbox
                    indeterminate={this.state.indeterminate}
                    onChange={this.onCheckAllChange.bind(this)}
                    checked={this.state.checkAll}>
                    Check all
                </Checkbox>
                <Checkbox.Group
                    options={plainOptions}
                    value={this.state.checkedList}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )

    }
}