/// <reference types="react" />
import * as React from 'react';
import BaseComponent, { BaseComponentProps } from "../../vst/page/BaseComponent";
import IRequestParam from "../../vst/interface/IRequestParam";
import { ColumnProps } from "antd/es/table/interface";
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
    design: IPagerDesign;
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
    static defaultProps: {
        checkbox: boolean;
    };
    param: IRequestParam;
    constructor(props: VsbPagerProps);
    onChange(pagerNumber: number, pagerSize?: number): void;
    protected showTotal(total: number): React.ReactNode;
    setParam(paramMap: IRequestParam): void;
    query(): void;
    setPagerNumber(pagerNumber: number): void;
    onShowSizeChange(pagerNumber: any, pagerSize: any): void;
    search(pagerNumber: number, pagerSize: number): void;
    clearParam(): void;
    private rowChange(selectedRowKeys, selectedRows);
    getSelectIds(): string[];
    getSelectRows(): any[];
    protected renderBtns(): JSX.Element;
    render(): JSX.Element;
    protected renderTitle(): JSX.Element;
    protected rowClick(record: any, index: number, event: Event): void;
    protected renderContent(): JSX.Element;
    protected renderPagination(): JSX.Element;
}
