import * as React from 'react';
import * as moment from 'moment';
import * as PropTypes from "prop-types";
import DatePicker from 'antd/es/date-picker';
import {DatePickerProps, RangePickerProps, MonthPickerProps, WeekPickerProps} from "antd/es/date-picker/interface";
import "antd/es/date-picker/style";
import "./style/index.less";

export interface DateComponentState {
    value?: moment.Moment | null;
}

export default class DateComponent extends React.Component<DatePickerProps, DateComponentState> {

    public RangePicker: React.ClassicComponentClass<RangePickerProps> = DatePicker.RangePicker;
    public MonthPicker: React.ClassicComponentClass<MonthPickerProps> = DatePicker.MonthPicker;
    public WeekPicker: React.ClassicComponentClass<WeekPickerProps> = DatePicker.WeekPicker;


    public static contextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    constructor(props: DatePickerProps) {
        super(props);
        this.state = {
            value: this.props.value ? moment(this.props.value) : undefined
        }
    }

    public componentDidMount(): void {
        const {value, setResetFieldFun} = this.context;
        if (value) {
            this.setState({
                value: value ? moment(value) : undefined
            });
        }
        if (setResetFieldFun) {
            setResetFieldFun(this.resetField.bind(this));
        }
    }

    public onChange(date: moment.Moment | null, dateString: string): void {
        const {onChange} = this.context;
        this.setState({
            value: date
        });
        onChange && onChange(date ? date.valueOf() : undefined, true);
        this.props.onChange && this.props.onChange(date, dateString);
    }

    private resetField(defaultValue: any): void {
        defaultValue = defaultValue == "" || defaultValue == null ? undefined : defaultValue;
        this.setState({
            value: defaultValue ? moment(defaultValue) : undefined
        });
        const {onChange} = this.context;
        onChange && onChange(defaultValue, false);
    }

    public render(): JSX.Element {
        const {value} = this.state;
        return <DatePicker {...this.props} value={value} onChange={this.onChange.bind(this)}></DatePicker>
    }
};
