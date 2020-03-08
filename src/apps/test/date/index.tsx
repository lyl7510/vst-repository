import * as React from 'react';
import DatePicker from "../../../comps/date";

export default class DateComponent extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    public onChange(date, dateString): void {
        console.log(date, dateString);
    }

    public render(): JSX.Element {
        return (
            <div>
                <DatePicker onChange={this.onChange.bind(this)}/>
                <br/>
                <DatePicker.MonthPicker onChange={this.onChange.bind(this)} placeholder="Select month"/>
                <br/>
                <DatePicker.RangePicker onChange={this.onChange.bind(this)}/>
                <br/>
                <DatePicker.WeekPicker onChange={this.onChange.bind(this)} placeholder="Select week"/>
            </div>
        );
    }
}