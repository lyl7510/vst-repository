/// <reference types="react" />
import * as PropTypes from "prop-types";
import { TreeSelectProps } from "antd/es/tree-select";
import BaseComponent from "../../vst/page/BaseComponent";
import IRequestParam from "../../vst/interface/IRequestParam";
import { ItreeConfig } from "../../utils/TreeUtils";
import "antd/es/tree-select/style";
import "./style/index.less";
import { match } from "react-router-dom";
export interface TreeSelectComponentProps extends TreeSelectProps<number | string> {
    url: string;
    param?: IRequestParam;
    treeOptions: ItreeConfig;
    match?: match<any>;
}
export interface TreeSelectComponentState {
    dataSet: any[];
    value: string | number;
}
export default class TreeSelectComponent extends BaseComponent<TreeSelectComponentProps, TreeSelectComponentState> {
    static defaultProps: {
        param: {};
        allowClear: boolean;
    };
    static contextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: TreeSelectComponentProps);
    onChange(p_value: string | number, label: any, extra: any): void;
    componentWillMount(): void;
    private resetField(defaultValue);
    render(): JSX.Element;
    private renderTreeNOde(dataSet, options);
}
