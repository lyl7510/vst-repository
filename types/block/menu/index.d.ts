/// <reference types="react" />
import { ClickParam } from './../../comps/menu';
import BaseComponent, { BaseComponentProps } from "../../vst/page/BaseComponent";
import IRequestParam from "../../vst/interface/IRequestParam";
import { ItreeConfig } from "./../../utils/TreeUtils";
export interface IMenuDesign {
    url: string;
    param?: IRequestParam;
    config: ItreeConfig;
}
export { ClickParam };
export interface VsbMenuProps extends BaseComponentProps {
    design: IMenuDesign;
    onClick?: (treeItem: any, param: ClickParam) => void;
}
export interface VsbMenuState {
    dataSet: any[];
}
export default class VsbMenu extends BaseComponent<VsbMenuProps, VsbMenuState> {
    constructor(props: VsbMenuProps);
    componentWillMount(): void;
    renderChildren(item: any, config: ItreeConfig): JSX.Element;
    private onItemClick(param);
    render(): JSX.Element;
}
