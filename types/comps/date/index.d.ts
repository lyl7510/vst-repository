/// <reference types="react" />
import * as React from 'react';
import * as moment from 'moment';
import * as PropTypes from "prop-types";
import { DatePickerProps, RangePickerProps, MonthPickerProps, WeekPickerProps } from "antd/es/date-picker/interface";
import "antd/es/date-picker/style";
import "./style/index.less";
export interface DateComponentState {
    value?: moment.Moment | null;
}
export default class DateComponent extends React.Component<DatePickerProps, DateComponentState> {
    RangePicker: React.ClassicComponentClass<RangePickerProps>;
    MonthPicker: React.ClassicComponentClass<MonthPickerProps>;
    WeekPicker: React.ClassicComponentClass<WeekPickerProps>;
    static contextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: DatePickerProps);
    componentDidMount(): void;
    onChange(date: moment.Moment | null, dateString: string): void;
    private resetField(defaultValue);
    render(): JSX.Element;
}
