import * as React from "react";
import * as PropTypes from "prop-types";
import DatePicker from "antd/es/date-picker";
import {RangePickerProps, RangePickerValue} from "antd/es/date-picker/interface";
import ComponentConfig from "@packages/config/ComponentConfig";


export default class ArtRangePicker extends React.Component<RangePickerProps, {}> {

    public static contextTypes = {
        onChange: PropTypes.func
    };

    public static defaultProps = ComponentConfig.defaultProps.rangePicker;

    constructor(props: RangePickerProps) {
        super(props);
    }

    /**
     * change改变的事件
     * @param {moment.Moment | null} date
     * @param {string} dateString
     */
    protected onChange(dates: RangePickerValue, dateStrings: [string, string]) {
        this.context.onChange && this.context.onChange(dates);
        this.props.onChange && this.props.onChange(dates, dateStrings);
    }

    public render(): React.ReactNode {
        return <DatePicker.RangePicker {...this.props} onChange={this.onChange.bind(this)}>
            {this.props.children}
        </DatePicker.RangePicker>
    }

};
