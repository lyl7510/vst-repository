import * as React from "react";
import * as PropTypes from "prop-types";
import Select, {OptGroupProps, OptionProps, SelectProps} from "antd/es/select";

import "antd/es/select/style/index.css";
import "./style/index.css";
import ComponentConfig from "@packages/config/ComponentConfig";

export type NumberString = number | string;

export interface ISelectOption {
    label: string;
    value: string;
}

export interface ArtSelectProps extends SelectProps<NumberString> {
    dataSource?: any[];
    options?: ISelectOption;
}

export default class ArtSelect extends React.Component<ArtSelectProps, {}> {

    public static Option: React.ClassicComponentClass<OptionProps> = Select.Option;
    public static OptGroup: React.ClassicComponentClass<OptGroupProps> = Select.OptGroup;

    public static defaultProps = ComponentConfig.defaultProps.select;

    public static contextTypes = {
        onChange: PropTypes.func
    };

    constructor(props: ArtSelectProps) {
        super(props);
    }

    /**
     * change改变的事件
     * @param {T} value
     * @param {React.ReactElement<any> | React.ReactElement<any>[]} option
     */
    protected onChange(value: NumberString, option: React.ReactElement<any> | React.ReactElement<any>[]) {
        this.context.onChange && this.context.onChange(value);
        this.props.onChange && this.props.onChange(value, option);
    }

    public render(): JSX.Element {
        const {dataSource, options, ...other} = this.props;
        return <Select {...other} onChange={this.onChange.bind(this)}>
            {this.props.children}
            {dataSource && dataSource.length > 0 ? dataSource.map((item: any) => {
                return <Select.Option key={item[options.value]}
                                      value={item[options.value]}>{item[options.label]}</Select.Option>
            }) : null}
        </Select>
    }

};
