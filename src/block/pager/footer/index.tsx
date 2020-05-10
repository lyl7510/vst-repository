import * as React from 'react';
import VsbPager from "../index";
import {Checkbox} from "../../../comps";
import {isFilterField} from "./../../../utils/ArrayUtils";
import "./index.less";

export default class VsbPagerFooter extends VsbPager {

    protected renderPagination(): JSX.Element {
        const indeterminate: boolean = this.state.selectRows.length !== 0 && this.state.selectRows.length !== this.state.dataSource.length;
        const checkAll = this.state.selectRows.length === this.state.dataSource.length;
        return (<div className="footer">
            <Checkbox
                indeterminate={indeterminate}
                onChange={this.onCheckAllChange.bind(this)}
                checked={checkAll}>
                全选
            </Checkbox>
            {super.renderPagination()}
        </div>)
    }

    private onCheckAllChange(): void {
        if (this.state.selectRows && this.state.selectRows.length > 0) {
            const {rowSelection} = this.state;
            rowSelection.selectedRowKeys = [];
            this.setState({
                selectRows: [],
                rowSelection: rowSelection
            });
        } else {
            const {rowSelection} = this.state;
            const selectedRowKeys: string[] = isFilterField(this.state.dataSource, "ID");
            rowSelection.selectedRowKeys = selectedRowKeys;
            this.setState({
                selectRows: this.state.dataSource,
                rowSelection: rowSelection
            });
        }
    }

}
