/// <reference types="react" />
import QueryPagerComponent, { QueryPagerComponentProps, QueryPagerComponentState } from "../../../vst/page/QueryPagerComponent";
export default class QueryListComponent<P extends QueryPagerComponentProps, S extends QueryPagerComponentState> extends QueryPagerComponent<QueryPagerComponentProps, QueryPagerComponentState> {
    protected renderContent(): JSX.Element;
}
