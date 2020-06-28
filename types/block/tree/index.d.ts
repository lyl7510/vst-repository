/// <reference types="react" />
import BaseComponent, { BaseComponentProps } from "../../vst/page/BaseComponent";
import { ItreeConfig } from "./../../utils/TreeUtils";
import IRequestParam from "./../../vst/interface/IRequestParam";
export interface VsbTreeProps extends BaseComponentProps {
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
    static defaultProps: {
        checkbox: boolean;
        checkedIds: any[];
    };
    checkedIds: string[];
    constructor(props: VsbTreeProps);
    componentWillMount(): void;
    getCheckIds(): string[];
    setCheckIds(checkIds: string[]): void;
    private onCheck(checkedKeys, e);
    private renderTreeNode(item, treeOption);
    render(): JSX.Element;
}
