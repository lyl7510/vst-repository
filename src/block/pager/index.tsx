import * as React from 'react';
import BaseComponent from "../../vst/page/BaseComponent";
import {Button, Pagination, Table} from "../../comps";
import IRequestParam from "../../vst/interface/IRequestParam";

import "./style/index.less";
import IResult from "../../vst/interface/IResult";
import {ColumnProps} from "antd/es/table/interface";

export interface IBtn {
    icon?: string;
    text: string;
    type: "default" | "primary" | "ghost" | "dashed" | "danger" | "link";
    onClick: () => void;
}

export interface IPagerDesign {
    url: string;
    title: string;
    checkbox?: boolean;
    btns?: IBtn[];
    key?: string;
    columns: ColumnProps<Object>[];
}

export interface VsbPagerProps {
    design: IPagerDesign
}

export interface VsbPagerState {
    total: number;
    pagerNumber: number;
    pagerSize: number;
    dataSource: any[];
    selectRows: any[];
}

export default class VsbPager extends BaseComponent<VsbPagerProps, VsbPagerState> {

    public rowSelection = {
        onChange: this.rowChange
    };

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
            selectRows: []
        }
    }

    public onChange(pagerNumber: number, pagerSize?: number): void {
        this.setState({
            pagerNumber: pagerNumber,
            pagerSize: pagerSize ? pagerSize : 20
        });
        this.search(pagerNumber, pagerSize);
    }

    private showTotal(total: number): React.ReactNode {
        return `共 ${total} 条`;
    }

    public setParam(paramMap: IRequestParam): void {
        this.param = Object.assign(this.param, paramMap);
    }

    public query(): void {
        const {pagerNumber, pagerSize} = this.state;
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
                    total: result.data.total
                });
            }
        });
    }

    public clearParam(): void {
        this.param = {};
    }

    private rowChange(selectedRowKeys: string[] | number[], selectedRows: Object[]) {

    }

    private renderBtns(): JSX.Element {
        const {btns} = this.props.design;
        return btns && btns.length > 0 ? <div className="buttonGroup">
            {btns.map((btn: IBtn, index: number) => {
                return <Button key={index} type={btn.type} icon={btn.icon} onClick={btn.onClick}>{btn.text}</Button>
            })}
        </div> : null;
    }

    public render(): JSX.Element {
        const {title, columns, checkbox, key} = this.props.design;
        const {total, dataSource, pagerNumber, pagerSize} = this.state;
        return (
            <div className="ant-pager">
                <div className="title">
                    {title}
                    {this.renderBtns()}
                </div>
                <Table key={key ? key : "ID"} rowSelection={checkbox ? this.rowSelection : null} bordered={true}
                       pagination={false}
                       size="middle" columns={columns} dataSource={dataSource}/>
                <Pagination total={total} current={pagerNumber} onChange={this.onChange.bind(this)} pageSize={pagerSize}
                            pageSizeOptions={['10', '20', '50', '100']} showQuickJumper={true}
                            showSizeChanger={true} showTotal={this.showTotal.bind(this)}/>
            </div>
        );
    }

}