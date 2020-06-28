/// <reference types="react" />
import BaseComponent, { BaseComponentProps } from "./BaseComponent";
import VsbPager, { IPagerDesign } from "../../block/pager";
export interface PagerComponentProps extends BaseComponentProps {
}
export interface PagerComponentState {
    design: IPagerDesign;
}
export default abstract class PagerComponent<P extends PagerComponentProps, S extends PagerComponentState> extends BaseComponent<PagerComponentProps, PagerComponentState> {
    protected pager: VsbPager;
    protected constructor(props: PagerComponentProps);
    protected query(): void;
    protected refreshPage(): void;
    componentDidMount(): void;
    render(): JSX.Element;
    protected renderOther(): JSX.Element;
}
