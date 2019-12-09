import Vst, {Component} from "../../vst";
import {VstMenu, VstItem, VstSubMenu} from './../../comps/menu'
import VstIcon from './../../comps/icon';

export default class VsbMenu extends Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    render(): Vst.Element {
        return <VstMenu
            mode="inline"
            theme="dark"
        >
            <VstItem key="1">
                <VstIcon type="pie-chart"/>
                <span>Option 1</span>
            </VstItem>
            <VstItem key="2">
                <VstIcon type="desktop"/>
                <span>Option 2</span>
            </VstItem>
            <VstItem key="3">
                <VstIcon type="inbox"/>
                <span>Option 3</span>
            </VstItem>
            <VstSubMenu
                key="sub1"
                title={
                    <span>
                <VstIcon type="mail"/>
                <span>Navigation One</span>
              </span>
                }
            >
                <VstItem key="5">Option 5</VstItem>
                <VstItem key="6">Option 6</VstItem>
                <VstItem key="7">Option 7</VstItem>
                <VstItem key="8">Option 8</VstItem>
            </VstSubMenu>
            <VstSubMenu
                key="sub2"
                title={
                    <span>
                <VstIcon type="appstore"/>
                <span>Navigation Two</span>
              </span>
                }
            >
                <VstItem key="9">Option 9</VstItem>
                <VstItem key="10">Option 10</VstItem>
                <VstSubMenu key="sub3" title="Submenu">
                    <VstItem key="11">Option 11</VstItem>
                    <VstItem key="12">Option 12</VstItem>
                </VstSubMenu>
            </VstSubMenu>
        </VstMenu>;
    }
}