import * as React from 'react';
import * as PropTypes from "prop-types";
import {TreeSelect} from "antd";
import {TreeSelectProps} from "antd/es/tree-select";
import BaseComponent from "../../vst/page/BaseComponent";
import IRequestParam from "../../vst/interface/IRequestParam";
import IResult from "../../vst/interface/IResult";
import treeUtils, {ItreeConfig} from "../../utils/TreeUtils";

export interface TreeSelectComponentProps extends TreeSelectProps<number | string> {
    url: string;
    param?: IRequestParam;
    treeOptions: ItreeConfig;
}

export interface TreeSelectComponentState {
    dataSet: any[];
    value: string | number;
}

export default class TreeSelectComponent extends BaseComponent<TreeSelectComponentProps, TreeSelectComponentState> {

    public static defaultProps = {
        param: {},
        allowClear: true
    };

    public static contextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    constructor(props: TreeSelectComponentProps) {
        super(props);
        this.state = {
            dataSet: [],
            value: undefined
        }
    }

    public onChange(p_value: string | number, label: any, extra: any): void {
        const {onChange} = this.context;
        this.setState({
            value: p_value
        });
        onChange && onChange(p_value);
        this.props.onChange && this.props.onChange(p_value, label, extra);
    }

    public componentWillMount(): void {
        super.requestData(this.props.url, this.props.param).then((result: IResult) => {
            if (result.code === 100) {
                const dataSet = treeUtils.generTreeData(result.data, this.props.treeOptions);
                this.setState({
                    dataSet: dataSet
                });
            }
        });
        const {value, setResetFieldFun} = this.context;
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
        this.setState({
            value: defaultValue
        });
        const {onChange} = this.context;
        onChange && onChange(defaultValue);
    }

    public render(): JSX.Element {
        const {treeOptions} = this.props;
        const {dataSet} = this.state;
        return (<TreeSelect {...this.props} onChange={this.onChange.bind(this)}>
            {this.renderTreeNOde(dataSet, treeOptions)}
        </TreeSelect>);
    }

    private renderTreeNOde(dataSet: any[], options: ItreeConfig): JSX.Element {
        return (<React.Fragment>
            {
                dataSet.map((item) => {
                    if (item.children && item.children.length > 0) {
                        return <TreeSelect.TreeNode key={item[options.value]} value={item[options.value]}
                                                    title={item[options.label]}>
                            {this.renderTreeNOde(item.children, options)}
                        </TreeSelect.TreeNode>
                    } else {
                        return <TreeSelect.TreeNode key={item[options.value]} value={item[options.value]}
                                                    title={item[options.label]}/>
                    }
                })
            }
        </React.Fragment>)
    }
}