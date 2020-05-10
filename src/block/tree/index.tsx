import * as React from 'react';
import BaseComponent, {BaseComponentProps} from "../../vst/page/BaseComponent";
import Tree, {AntTreeNodeCheckedEvent} from "./../../comps/tree";
import treeUtils, {ItreeConfig} from "./../../utils/TreeUtils";
import IRequestParam from "./../../vst/interface/IRequestParam";
import IResult from "./../../vst/interface//IResult";

export interface VsbTreeProps extends BaseComponentProps{
    checkbox?: boolean;
    url: string;
    treeOption: ItreeConfig;
    param?: IRequestParam;
}

export interface VsbTreeState {
    dataSet: any[];
    checkedIds?: string[];
}

export default class VsbTree extends BaseComponent<VsbTreeProps, VsbTreeState> {

    public static defaultProps = {
        checkbox: false,
        checkedIds: []
    };
    public checkedIds: string[] = [];

    constructor(props: VsbTreeProps) {
        super(props);
        this.state = {
            dataSet: [],
            checkedIds: []
        }
    }

    public componentWillMount(): void {
        const {url, param, treeOption} = this.props;
        super.requestData(url, param).then((result: IResult) => {
            if (result && result.code === 100) {
                const dataSet = treeUtils.generTreeData(result.data, treeOption);
                this.setState({
                    dataSet
                });
            }
        });
    }

    public getCheckIds(): string[] {
        return this.checkedIds;
    }

    public setCheckIds(checkIds: string[]) {
        this.checkedIds = checkIds;
        this.setState({
            checkedIds: checkIds
        });
    }

    private onCheck(checkedKeys: string[], e: AntTreeNodeCheckedEvent): void {
        this.checkedIds = checkedKeys.concat(e['halfCheckedKeys']);
        this.setState({
            checkedIds: checkedKeys
        });
    }

    private renderTreeNode(item: any, treeOption: ItreeConfig): JSX.Element {
        return (<Tree.TreeNode key={item[treeOption.value]} title={item[treeOption.label]}>
            {
                item.children.map((child: any) => {
                    if (child.children && child.children.length > 0) {
                        return this.renderTreeNode(child, treeOption);
                    } else {
                        return <Tree.TreeNode key={child[treeOption.value]}
                                              title={child[treeOption.label]}/>
                    }
                })
            }
        </Tree.TreeNode>);
        if (item.children && item.children.length > 0) {
            return <Tree.TreeNode key={item[treeOption.value]} title={item[treeOption.label]}></Tree.TreeNode>
        }
        return null;
    }

    public render(): JSX.Element {
        let {dataSet, checkedIds} = this.state;
        const {treeOption, checkbox} = this.props;
        checkedIds = dataSet && dataSet.length > 0 ? checkedIds : [];
        return (<Tree checkable={checkbox} onCheck={this.onCheck.bind(this)} checkedKeys={checkedIds}>
            {
                dataSet.map((item: any) => {
                    if (item.children && item.children.length > 0) {
                        return this.renderTreeNode(item, treeOption);
                    } else {
                        return <Tree.TreeNode key={item[treeOption.value]}
                                              title={item[treeOption.label]}/>
                    }
                })
            }
        </Tree>);
    }
}