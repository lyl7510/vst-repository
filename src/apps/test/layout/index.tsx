import Vst, {Component} from "../../../vst";
import {VstLayout , VstSider , VstHeader, VstContent} from "../../../comps/layout";
import VsbMenu from './../../../block/menu';

export default class LayoutComponent extends Component {

    render(): Vst.Element {
        return <VstLayout>
                    <VstSider collapsed={true}>
                        <VsbMenu></VsbMenu>
                    </VstSider>
                    <VstLayout>
                        <VstHeader>Header</VstHeader>
                        <VstContent>Content</VstContent>
                    </VstLayout>
               </VstLayout>;
    }
}