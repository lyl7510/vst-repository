import Vst, {Component} from "../../vst";
import VstTab, {VstTabPane} from './../../comps/tab';
import * as React from "react";
import store from "../../vst/store/store";


export interface VsbTabProps {

}

export interface IvstTabItem {
    title: string;
    key: string;
    content: Vst.Element;
    close?: boolean;
}

export interface VsbTabState {
    tabItems: IvstTabItem[];
    activeKey: string;
}

export default class VsbTab extends Component<VsbTabProps, VsbTabState> {

    constructor(props) {
        super(props);
        this.state = {
            tabItems: [],
            activeKey: ""
        };
    }

    public addTabItem(tabItem: IvstTabItem): void {
        const items = this.state.tabItems;
        const result = items.every((item: IvstTabItem) => {
            return item.key !== tabItem.key
        });
        if (result) {
            this.state.tabItems.push(tabItem);
        }
        this.setState({
            activeKey: tabItem.key
        });
        store.dispatch({
            type: "switch",
            tabItem: {
                title: tabItem.title,
                key: tabItem.key
            }
        });
    }

    private onChange(activeKey: string): void {
        this.setState({
            activeKey: activeKey
        });
    }

    private onEdit(targetKey: string | React.MouseEvent<HTMLElement>, action: 'add' | 'remove'): void {
        let {activeKey, tabItems} = this.state;
        let lastIndex: number;
        if (targetKey === activeKey) {
            for (let i = 0; i < tabItems.length; i++) {
                if (tabItems[i].key === activeKey) {
                    lastIndex = i - 1;
                }
            }
            const tabPanes = tabItems.filter((pane: IvstTabItem) => pane.key !== targetKey);
            activeKey = tabPanes[lastIndex].key;
            this.setState({
                activeKey: activeKey,
                tabItems: tabPanes
            });
        } else {
            const tabPanes = tabItems.filter((pane: IvstTabItem) => pane.key !== targetKey);
            this.setState({
                tabItems: tabPanes
            });
        }
    }

    private renderPane(title: string, id: string, Content: Vst.Element, close: boolean): Vst.Element {
        // @ts-ignore
        return <VstTabPane tab={title} key={id} closable={close}>{Content}</VstTabPane>
    }

    public render(): Vst.Element {
        const {tabItems, activeKey} = this.state;
        return <VstTab type="editable-card" activeKey={activeKey} onChange={this.onChange.bind(this)}
                       onEdit={this.onEdit.bind(this)}>
            {
                tabItems.map((item: IvstTabItem) => {
                    return this.renderPane(item.title, item.key, item.content, item.close);
                })
            }
        </VstTab>;
    }

}