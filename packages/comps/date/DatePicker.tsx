import * as React from "react";
import * as moment from "moment";
import * as PropTypes from "prop-types";
import DatePicker from "antd/es/date-picker";
import {DatePickerProps, MonthPickerProps, RangePickerProps, WeekPickerProps} from "antd/es/date-picker/interface";

import ComponentConfig from "@packages/config/ComponentConfig";
import ArtRangePicker from "./RangePicker";
import ArtMonthPicker from "./MonthPicker";
import ArtWeekPicker from "./WeekPicker";

import "antd/es/date-picker/style/index.css";
import "./style/index.css";


export default class ArtDatePicker extends React.Component<DatePickerProps, {}> {

    public static RangePicker: React.ComponentClass<RangePickerProps, any> = ArtRangePicker;
    static MonthPicker: React.ComponentClass<MonthPickerProps, any> = ArtMonthPicker;
    public static WeekPicker: React.ComponentClass<WeekPickerProps, any> = ArtWeekPicker;

    public static contextTypes = {
        onChange: PropTypes.func
    };

    public static defaultProps = ComponentConfig.defaultProps.datePicker;

    constructor(props: DatePickerProps) {
        super(props);
    }

    /**
     * change改变的事件
     * @param {moment.Moment | null} date
     * @param {string} dateString
     */
    protected onChange(date: moment.Moment | null, dateString: string) {
        this.context.onChange && this.context.onChange(date);
        this.props.onChange && this.props.onChange(date, dateString);
    }

    public render(): React.ReactNode {
        return <DatePicker {...this.props} onChange={this.onChange.bind(this)}>
            {this.props.children}
        </DatePicker>
    }

};
