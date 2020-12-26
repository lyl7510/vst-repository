import * as React from "react";
import TreeSelect, {TreeSelectProps} from "antd/es/tree-select";
import * as PropTypes from "prop-types";
import ComponentConfig from "@packages/config/ComponentConfig";

import "antd/es/tree-select/style/index.css";

export type NumberString = number | string;

export interface ITreeSelectOption {
    label: string;
    value: string;
}

export interface ArtTreeSelectProps extends TreeSelectProps<NumberString> {
    dataSource?: any[];
    options?: ITreeSelectOption;
}

export default class ArtTreeSelect extends React.Component<ArtTreeSelectProps, {}> {

    public static contextTypes = {
        onChange: PropTypes.func
    };

    public static defaultProps = ComponentConfig.defaultProps.selectTree;

    constructor(props: ArtTreeSelectProps) {
        super(props);
    }

    /**
     * change改变的事件
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    protected onChange(value: NumberString, label: any, extra: any) {
        this.context.onChange && this.context.onChange(value);
        this.props.onChange && this.props.onChange(value, label, extra);
    }

    /**
     * 渲染树型内容
     * @param {any[]} dataSource
     * @param {ITreeSelectOption} options
     * @returns {React.ReactNode}
     */
    private renderTree(dataSource: any[], options: ITreeSelectOption): React.ReactNode {
        return (<React.Fragment>
            {
                dataSource && dataSource.length > 0 ? dataSource.map((item: any) => {
                    return <TreeSelect.TreeNode key={item[options.value]} value={item[options.value]}
                                                title={item[options.label]}>
                        {this.renderTree(item.children, options)};
                    </TreeSelect.TreeNode>
                }) : null
            }
        </React.Fragment>)
    }

    public render(): React.ReactNode {
        const {dataSource, options, ...other} = this.props;
        return <TreeSelect {...other} onChange={this.onChange.bind(this)}>
            {this.props.children}
            {this.renderTree(dataSource, options)}
        </TreeSelect>
    }

};
