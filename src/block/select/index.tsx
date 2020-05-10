import * as React from 'react';
import * as PropTypes from "prop-types";
import BaseComponent from "../../vst/page/BaseComponent";
import Select, {SelectComponentProps} from "./../../comps/select";
import IRequestParam from "./../../vst/interface/IRequestParam";
import IResult from "./../../vst/interface//IResult";

export interface ISelectOption {
    label: string;
    value: string;
}

export interface VsbSelectProps extends SelectComponentProps {
    value?: number | string;
    placeholder?: string;
    url: string;
    param?: IRequestParam;
    selectOptions: ISelectOption
}

export interface VsbSelectState {
    value: number | string;
    dataSet: any[];
}

export default class Index extends BaseComponent<VsbSelectProps, VsbSelectState> {

    public static defaultProps = {
        allowClear: true
    };

    public static contextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    constructor(props: VsbSelectProps) {
        super(props);
        this.state = {
            value: undefined,
            dataSet: []
        }
    }

    public componentWillMount(): void {
        const {value, setResetFieldFun} = this.context;
        super.requestData(this.props.url, this.props.param).then((result: IResult) => {
            if (result && result.code === 100) {
                this.setState({
                    dataSet: result.data
                });
            }
        });
        if (value) {
            this.setState({
                value: value
            });
        }
        if (setResetFieldFun) {
            setResetFieldFun(this.resetField.bind(this));
        }
    }

    private resetField(defaultValue: any): void {
        defaultValue = defaultValue == "" || defaultValue == null ? undefined : defaultValue;
        this.setState({
            value: defaultValue
        });
        const {onChange} = this.context;
        onChange && onChange(defaultValue, false);
    }

    public onChange(p_value: number | string, option: React.ReactElement<any> | React.ReactElement<any>[]): void {
        const {onChange} = this.context;
        this.setState({
            value: p_value
        });
        onChange && onChange(p_value, true);
        this.props.onChange && this.props.onChange(p_value, option);

    }

    render(): JSX.Element {
        const {value, dataSet} = this.state;
        const {placeholder, selectOptions} = this.props;
        return <Select {...this.props} value={value} onChange={this.onChange.bind(this)} placeholder={placeholder}>
            {
                dataSet.map((item) => {
                    return <Select.Option key={item[selectOptions.value]} value={item[selectOptions.value]}>{item[selectOptions.label]}</Select.Option>
                })
            }
        </Select>;
    }

}