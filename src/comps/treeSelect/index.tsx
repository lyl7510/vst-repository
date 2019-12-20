import Vst, {Component} from "../../vst/index";
import TreeSelect, {TreeSelectProps} from "antd/es/tree-select";
import {TreeNodeValue} from "antd/es/tree-select/interface";
import "antd/es/tree-select/style";
import "./style/index.less";

const {TreeNode} = TreeSelect;

export interface IvstTreeSelectProps<T extends TreeNodeValue> extends TreeSelectProps<T> {

}

export {TreeNode as VstTreeNode};

export default class VstTreeSelect<T extends TreeNodeValue> extends Component<IvstTreeSelectProps<T>, {}> {

    constructor(props: IvstTreeSelectProps<T>) {
        super(props);
    }

    public render(): Vst.Element {
        return <TreeSelect {...this.props}>{this.props.children}</TreeSelect>;
    }

}