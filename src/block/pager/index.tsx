import * as React from 'react';
import BaseComponent, {BaseComponentProps} from "../../vst/page/BaseComponent";
import {Button, Pagination, Table} from "../../comps";
import IRequestParam from "../../vst/interface/IRequestParam";
import {isFilterField} from "./../../utils/ArrayUtils";
import IResult from "../../vst/interface/IResult";
import {ColumnProps} from "antd/es/table/interface";

import "./style/index.less";

export interface IBtn {
    icon?: string;
    text: string;
    type: "default" | "primary" | "ghost" | "dashed" | "danger" | "link";
    onClick?: () => void;
}

export interface IPagerDesign {
    url: string;
    title: string;
    checkbox?: boolean;
    btns?: IBtn[];
    key?: string;
    columns: ColumnProps<Object>[];
}

export interface VsbPagerProps extends BaseComponentProps {
    design: IPagerDesign,
    onRowClick?: (record: any, index: number, event: Event) => void;
    renderTitle?: () => JSX.Element;
}

export interface VsbPagerState {
    total: number;
    pagerNumber: number;
    pagerSize: number;
    dataSource: any[];
    selectRows: any[];
    rowSelection: any;
}

export default class VsbPager extends BaseComponent<VsbPagerProps, VsbPagerState> {

    public static defaultProps = {
        checkbox: false
    };

    public param: IRequestParam = {};

    constructor(props: VsbPagerProps) {
        super(props);
        this.state = {
            total: 0,
            pagerNumber: 1,
            pagerSize: 20,
            dataSource: [],
            selectRows: [],
            rowSelection: {
                onChange: this.rowChange.bind(this),
                selectedRowKeys: []
            }
        }
    }

    public onChange(pagerNumber: number, pagerSize: number = this.state.pagerSize): void {
        this.search(pagerNumber, pagerSize);
    }

    protected showTotal(total: number): React.ReactNode {
        return `共 ${total} 条`;
    }

    public setParam(paramMap: IRequestParam): void {
        this.param = Object.assign(this.param, paramMap);
    }

    public query(): void {
        const {pagerNumber, pagerSize} = this.state;
        this.search(pagerNumber, pagerSize);
    }

    public setPagerNumber(pagerNumber: number): void {
        const {pagerSize} = this.state;
        this.search(pagerNumber, pagerSize);
    }

    public onShowSizeChange(pagerNumber, pagerSize) {
        this.search(pagerNumber, pagerSize);
    }

    public search(pagerNumber: number, pagerSize: number): void {
        const {url} = this.props.design;
        const paramMap = Object.assign({
            pagerNumber: pagerNumber,
            pageSize: pagerSize
        }, this.param);
        this.requestData(url, paramMap).then((result: IResult) => {
            if (result.code === 100) {
                this.setState({
                    dataSource: result.data.result,
                    pagerNumber: result.data.pagerNumber,
                    pagerSize: result.data.pageSize,
                    total: result.data.total
                });
            }
        });
    }

    public clearParam(): void {
        this.param = {};
    }

    private rowChange(selectedRowKeys: string[], selectedRows: Object[]) {
        const {rowSelection} = this.state;
        rowSelection.selectedRowKeys = selectedRowKeys;
        this.setState({
            selectRows: selectedRows,
            rowSelection: rowSelection
        })
    }

    public getSelectIds(): string[] {
        const {selectRows} = this.state;
        return isFilterField(selectRows, this.props.design.key ? this.props.design.key : "ID");
    }

    public getSelectRows(): any[] {
        return this.state.selectRows;
    }

    protected renderBtns(): JSX.Element {
        const {btns} = this.props.design;
        return btns && btns.length > 0 ? <div className="buttonGroup">
            {btns.map((btn: IBtn, index: number) => {
                return <Button key={index} type={btn.type} icon={btn.icon} onClick={btn.onClick}>{btn.text}</Button>
            })}
        </div> : null;
    }

    public render(): JSX.Element {
        return (
            <div className="ant-pager">
                {this.renderTitle()}
                {this.renderContent()}
                {this.renderPagination()}
            </div>
        );
    }

    protected renderTitle(): JSX.Element {
        const {renderTitle} = this.props;
        return (renderTitle ? renderTitle() : <div className="title">
            {this.props.design.title}
            {this.renderBtns()}
        </div>)
    }

    protected rowClick(record: any, index: number, event: Event): void {
        this.props.onRowClick && this.props.onRowClick(record, index, event);
    }

    protected renderContent(): JSX.Element {
        const {columns, checkbox, key} = this.props.design;
        const {dataSource, rowSelection} = this.state;
        return (<Table key={key ? key : "ID"} rowKey={key ? key : "ID"}
                       rowSelection={checkbox ? rowSelection : null} bordered={true}
                       onRow={this.rowClick.bind(this)}
                       pagination={false}
                       size="middle" columns={columns} dataSource={dataSource}/>)
    }

    protected renderPagination(): JSX.Element {
        const {total, pagerNumber, pagerSize} = this.state;
        return (<Pagination total={total} current={pagerNumber} onChange={this.onChange.bind(this)} pageSize={pagerSize}
                            pageSizeOptions={['10', '20', '50', '100']} showQuickJumper
                            showSizeChanger onShowSizeChange={this.onShowSizeChange.bind(this)}
                            showTotal={this.showTotal.bind(this)}/>)
    }

}
