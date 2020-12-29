import ArtList, {ArtListTableProps, TitleFun} from "./../comps/list";
import {TitleProps} from "@packages/comps/title";
import {AxiosRequestConfig} from "axios";
import {PaginationProps} from "antd/es/pagination";
import PagerComponent from "@packages/pages/PagerComponent";

export interface QueryPagerComponentState {
    title?: TitleProps | TitleFun;
    ajax?: AxiosRequestConfig,
    table: ArtListTableProps,
    page?: PaginationProps | false
}

export default class QueryPagerComponent<P, S> extends PagerComponent<P, S> {

    protected list: ArtList = null;

    constructor(props: P) {
        super(props);
    }

    componentDidMount() {
        this.list && this.list.search();
    }
}