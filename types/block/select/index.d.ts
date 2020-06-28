/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from "prop-types";
import BaseComponent from "../../vst/page/BaseComponent";
import { SelectComponentProps } from "./../../comps/select";
import IRequestParam from "./../../vst/interface/IRequestParam";
export interface ISelectOption {
    label: string;
    value: string;
}
export interface VsbSelectProps extends SelectComponentProps {
    value?: number | string;
    placeholder?: string;
    url: string;
    param?: IRequestParam;
    selectOptions: ISelectOption;
    load?: boolean;
}
export interface VsbSelectState {
    value: number | string;
    dataSet: any[];
}
export default class Index extends BaseComponent<VsbSelectProps, VsbSelectState> {
    static defaultProps: {
        allowClear: boolean;
        load: boolean;
    };
    static contextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: VsbSelectProps);
    componentWillMount(): void;
    query(): void;
    private resetField(defaultValue);
    onChange(p_value: number | string, option: React.ReactElement<any> | React.ReactElement<any>[]): void;
    render(): JSX.Element;
}
