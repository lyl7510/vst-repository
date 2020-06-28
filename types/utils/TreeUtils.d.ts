export interface ItreeConfig {
    label: string;
    value: string;
    parentId: string;
    order?: string;
    sort?: string;
    icon?: string;
}
export declare class TreeUtils {
    private sort(a, b, options);
    private isFilterSort(dataArray, options);
    private isFilterTreeData(item, dataArray, options);
    generTreeData(dataArray: any[], options: ItreeConfig): any[];
    isFilterTreeNode(treeArray: any[], key: string, options: ItreeConfig): any;
}
declare const treeUtils: TreeUtils;
export default treeUtils;
