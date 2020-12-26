import * as React from "react";
import {AxiosRequestConfig} from "axios";
import axios from "./../../utils/axios";
import Table, {ArtTableProps} from "../table";
import Pagination from "../pagination";
import Title, {TitleProps} from "../title";
import {PaginationProps} from "antd/es/pagination";
import {TableEventListeners} from "antd/es/table/interface";

import "./style/index.css"

export interface IData {
    [name: string]: any;
}

export interface ArtListTableProps extends ArtTableProps {
    key: string;　//唯一标示
    boxType?: 'checkbox' | 'radio';　//首列类型
    checkChange?: (selectedRowKeys: string[] | number[], selectedRows: any[]) => void; //选择框发生变化后触发的函数
    onClick?: (record: IData, index: number, event: React.MouseEvent) => void;
}

export interface ArtListProps {
    title?: TitleProps;
    ajax?: AxiosRequestConfig,
    table: ArtListTableProps,
    page?: PaginationProps | false
}

export interface ArtListState {
    //列表记录数
    beans: IData[];
    //总记录数
    totalCount: number;
}

export default class ArtList extends React.Component<ArtListProps, ArtListState> {

    //请求参数
    protected param: IData = {};
    //当前页
    protected pagerNumber: number = 1;
    //每页条数
    protected pagerSize: number = 10;
    //选中记录数
    protected selectList: IData[] = [];

    protected rowSelection = {
        type: this.props.table.boxType,
        onChange: (selectedRowKeys: string[] | number[], selectedRows: any[]) => {
            this.selectList = selectedRows;
            this.props.table.checkChange && this.props.table.checkChange(selectedRowKeys, selectedRows);
        }
    };

    constructor(props: ArtListProps) {
        super(props);
        this.pagerSize = this.props.page && this.props.page.pageSize ? this.props.page.pageSize : 10;
        this.state = {
            totalCount: 0,
            beans: [],  //总条数
        }
    }

    /**
     * 获得选中项
     * @returns {IData[]}
     */
    public getSelectList(): IData[] {
        return this.selectList;
    }

    /**
     * 设置选中项
     * @param {string[] | number[]} ids
     */
    public setSelectList(datas: IData[]): void {
        this.selectList = datas;
    }

    /**
     * 设置当前页数据大小
     * @param {number} pagerSize
     */
    public setPagerSize(pagerSize: number): void {
        this.pagerSize = pagerSize;
    }

    /**
     * 获取当前页数据条数
     * @returns {number}
     */
    public getPagerSize(): number {
        return this.pagerSize
    }

    /**
     * 设置查询参数
     * @param {IData} param
     */
    public setParam(param: IData): void {
        this.param = Object.assign(this.param, param);
    }

    /**
     * 清除查询参数
     */
    public clearParam(): void {
        this.param = {};
    }

    /**
     * 设置当前页
     * @param {number} pagerNumber
     */
    public setPagerNumber(pagerNumber: number): void {
        this.pagerNumber = pagerNumber;
    }

    /**
     * 获取当前页
     * @returns {number}
     */
    public getPagerNumber(): number {
        return this.pagerNumber;
    }

    /**
     * 用户调用的查询方法
     */
    public search(): void {
        this.query(this.pagerNumber, this.pagerSize);
    }

    /**
     * 查询方法
     */
    protected query(pagerNumber: number, pagerSize: number): void {
        let ajaxConfig = this.props.ajax;
        ajaxConfig.data = Object.assign(this.param, {
            offset: (pagerNumber - 1) * pagerSize,
            limit: pagerSize
        });
        axios(ajaxConfig).then((result: any) => {
            this.callback(result);
        });
    }

    /**
     * 请求结果回调
     */
    protected callback(result: any): void {
        if (result.returnCode == 0) {
            this.setState({
                totalCount: result.bean.total,
                beans: result.beans
            });
        }
    }

    /**
     *发生改变时，触发的方法
     */
    protected onChange(page: number, pageSize: number): void {
        this.pagerNumber = page;
        this.pagerSize = pageSize;
        this.query(this.pagerNumber, this.pagerSize);
    }

    /**
     * 行点击事件
     * @param {IData} record
     * @param {number} index
     */
    private onClick(record: IData, index: number): TableEventListeners {
        const that = this;
        return {
            onClick: (event: React.MouseEvent) => {
                that.onRowClick(record, index, event);
            }
        }
    }

    /**
     * 点击行重写事件
     * @param {IData} record
     * @param {number} index
     * @param {React.MouseEvent} event
     */
    protected onRowClick(record: IData, index: number, event: React.MouseEvent): void {
        this.props.table.onClick && this.props.table.onClick(record, index, event);
    }

    /**
     * 渲染表头
     * @returns {React.ReactNode}
     */
    protected renderTitle(): React.ReactNode {
        return this.props.title ? <Title {...this.props.title}/> : null;
    }

    /**
     * 渲染表格
     * @returns {React.ReactNode}
     */
    protected renderContent(): React.ReactNode {
        return <Table {...this.props.table} dataSource={this.state.beans} pagination={false}
                      rowKey={this.props.table.key} onRow={this.onClick.bind(this)}
                      rowSelection={this.props.table.boxType ? this.rowSelection : null}/>;
    }

    /**
     * 渲染页码
     * @returns {React.ReactNode}
     */
    protected renderPaination(): React.ReactNode {
        return this.state.totalCount > 0 && this.props.page !== false ?
            <Pagination total={this.state.totalCount} pageSize={this.pagerSize} current={this.pagerNumber}
                        onShowSizeChange={this.onChange.bind(this)}
                        onChange={this.onChange.bind(this)}/> : null;
    }

    /**
     * 渲染内容
     * @returns {React.ReactNode}
     */
    public render(): React.ReactNode {
        return (<div className={"ant-list"}>
            {this.renderTitle()}
            {this.renderContent()}
            {this.renderPaination()}
        </div>);
    }

}
