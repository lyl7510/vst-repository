/// <reference types="react" />
import BaseComponent, { BaseComponentProps } from "./BaseComponent";
import Form, { IForm, IRule } from "../../comps/form";
import VsbPager, { IPagerDesign } from "../../block/pager";
export interface QueryPagerComponentProps extends BaseComponentProps {
}
export interface QueryPagerComponentState {
    model: IForm;
    rules?: IRule;
    design: IPagerDesign;
}
export default abstract class QueryPagerComponent<P extends QueryPagerComponentProps, S extends QueryPagerComponentState> extends BaseComponent<QueryPagerComponentProps, QueryPagerComponentState> {
    protected myFrom: Form;
    protected pager: VsbPager;
    protected constructor(props: QueryPagerComponentProps);
    protected query(): void;
    protected resetFields(): void;
    protected refreshPage(): void;
    componentDidMount(): void;
    render(): JSX.Element;
    protected renderForm(): JSX.Element;
    protected renderTitle(): Function;
    protected renderContent(): JSX.Element;
}
