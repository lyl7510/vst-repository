import Vst, {Component, Iresult} from "../../vst";
import {VstMenu, VstItem, VstSubMenu, ClickParam} from './../../comps/menu'
import treeUtils, {ItreeConfig} from "./../../utils/TreeUtils";

import VstIcon from './../../comps/icon';

export interface Idesign {
    url: string;
    param?: { [name: string]: any },
    config: ItreeConfig
}

export interface VsbMenuProps {
    design: Idesign;
    onClick?: (param: ClickParam) => void;
}

export interface VsbMenuState {
    dataSet: any[];
}

export default class VsbMenu extends Component<VsbMenuProps, VsbMenuState> {

    constructor(props: VsbMenuProps) {
        super(props);
        this.state = {
            dataSet: []
        };
    }

    public componentWillMount(): void {
        super.requestData(this.props.design.url, this.props.design.param).then((result: Iresult) => {
            if (result && result.code === 100) {
                const dataSet = treeUtils.generTreeData(result.data, this.props.design.config);
                this.setState({
                    dataSet
                });
            }
        });
    }

    public renderChildren(item: any, config: ItreeConfig): Vst.Element {
        return (<VstSubMenu key={item[config.value]} title={
            <span>
                    <VstIcon type={item[config.icon]}/>
                    <span>{item[config.label]}</span>
                  </span>
        }>
        {
            item.children.map((child: any) => {
                if (child.children && child.children.length > 0) {
                    return this.renderChildren(child, config);
                } else {
                    return <VstItem key={child[config.value]}>{child[config.label]}</VstItem>
                }
            })
        }
        </VstSubMenu>)
    }

    public render(): Vst.Element {
        const {dataSet} = this.state;
        const {config} = this.props.design;
        return (<VstMenu mode="inline" theme="dark" onClick={this.props.onClick}>
            {
                dataSet.map((item: any) => {
                    if (item.children && item.children.length > 0) {
                        return this.renderChildren(item, config);
                    } else {
                        return <VstItem key={item[config.value]}>
                            <VstIcon type={item[config.icon]}/>
                            <span>{item[config.label]}</span>
                        </VstItem>
                    }
                })
            }
        </VstMenu>);
    }
}