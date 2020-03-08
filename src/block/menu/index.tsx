import * as React from 'react';
import Icon from '../../comps/icon';
import IResult from "../../vst/interface/IResult";
import Menu, {ClickParam} from './../../comps/menu'
import BaseComponent from "../../vst/page/BaseComponent";
import IRequestParam from "../../vst/interface/IRequestParam";
import treeUtils, {ItreeConfig} from "./../../utils/TreeUtils";


export interface IMenuDesign {
    url: string;
    param?: IRequestParam,
    config: ItreeConfig
}

export {ClickParam};

export interface VsbMenuProps {
    design: IMenuDesign;
    onClick?: (treeItem: any, param: ClickParam) => void;
}

export interface VsbMenuState {
    dataSet: any[];
}

export default class VsbMenu extends BaseComponent<VsbMenuProps, VsbMenuState> {

    constructor(props: VsbMenuProps) {
        super(props);
        this.state = {
            dataSet: []
        };
    }

    public componentWillMount(): void {
        super.requestData(this.props.design.url, this.props.design.param).then((result: IResult) => {
            if (result && result.code === 100) {
                const dataSet = treeUtils.generTreeData(result.data, this.props.design.config);
                this.setState({
                    dataSet
                });
            }
        });
    }

    public renderChildren(item: any, config: ItreeConfig): JSX.Element {
        return (<Menu.SubMenu key={item[config.value]} title={
            <span>
                    <Icon type={item[config.icon]}/>
                    <span>{item[config.label]}</span>
                  </span>
        }>
            {
                item.children.map((child: any) => {
                    if (child.children && child.children.length > 0) {
                        return this.renderChildren(child, config);
                    } else {
                        return <Menu.Item key={child[config.value]}>{child[config.label]}</Menu.Item>
                    }
                })
            }
        </Menu.SubMenu>)
    }

    private onItemClick(param: ClickParam): void {
        const item: any = treeUtils.isFilterTreeNode(this.state.dataSet, param.key, this.props.design.config);
        this.props.onClick(item, param);
    }

    public render(): JSX.Element {
        const {dataSet} = this.state;
        const {config} = this.props.design;
        return (<Menu mode="inline" theme="dark" onClick={this.onItemClick.bind(this)}>
            {
                dataSet.map((item: any) => {
                    if (item.children && item.children.length > 0) {
                        return this.renderChildren(item, config);
                    } else {
                        return <Menu.Item key={item[config.value]}>
                            <Icon type={item[config.icon]}/>
                            <span>{item[config.label]}</span>
                        </Menu.Item>
                    }
                })
            }
        </Menu>);
    }
}