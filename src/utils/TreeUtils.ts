export interface ItreeConfig {
    label: string;
    value: string;
    parentId: string;
    order?: string;
    sort?: string;
    icon?: string;
}

class TreeUtils {
    private sort(a: any, b: any, options: ItreeConfig): 1 | -1 {
        if (options.sort === 'desc') {
            return a[options.order] < b[options.order] ? 1 : -1
        } else {
            return a[options.order] > b[options.order] ? 1 : -1
        }
    }

    private isFilterSort(dataArray: any[], options: ItreeConfig): void {
        dataArray.sort((a, b) => {
            return this.sort(a, b, options)
        });
        dataArray.forEach((item: any) => {
            if (item.children && item.children.length > 0) {
                this.isFilterSort(item.children, options)
            }
        });
    }

    private isFilterTreeData(item: any, dataArray: any[], options: ItreeConfig): void {
        dataArray.forEach((it: any) => {
            if (item[options.value] === it[options.parentId]) {
                if (!item.children) {
                    item.children = []
                }
                item.children.push(it)
                this.isFilterTreeData(it, dataArray, options)
            }
        });
    }

    public generTreeData(dataArray: any[], options: ItreeConfig): any[] {
        let result = [];
        if (dataArray && dataArray.length > 0) {
            //找到第一层节点
            dataArray.forEach((item: any) => {
                if (!item[options.parentId]) {
                    result.push(item);
                }
            });
            result.forEach((item: any) => {
                this.isFilterTreeData(item, dataArray, options);
            });
        }

        if (result && result.length > 0) {
            this.isFilterSort(result, options)
        }
        return result;
    }
}

const treeUtils = new TreeUtils();
export default treeUtils;

