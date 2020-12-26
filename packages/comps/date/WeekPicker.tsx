import * as React from "react";
import * as moment from "moment";
import * as PropTypes from "prop-types";
import DatePicker from "antd/es/date-picker";
import {WeekPickerProps} from "antd/es/date-picker/interface";
import ComponentConfig from "@packages/config/ComponentConfig";

export default class ArtWeekPicker extends React.Component<WeekPickerProps, {}> {

    public static contextTypes = {
        onChange: PropTypes.func
    };

    public static defaultProps = ComponentConfig.defaultProps.weekPicker;

    constructor(props: WeekPickerProps) {
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
        return <DatePicker.WeekPicker {...this.props} onChange={this.onChange.bind(this)}>
            {this.props.children}
        </DatePicker.WeekPicker>
    }

};
