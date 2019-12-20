import Vst, {Component} from "../../../vst";
import {VstLayout, VstSider, VstHeader, VstContent} from "../../../comps/layout";

export default class LayoutComponent extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render(): Vst.Element {
        return <VstLayout>
            <VstSider collapsed={true}>
            </VstSider>
            <VstLayout>
                <VstHeader>Header</VstHeader>
                <VstContent>Content</VstContent>
            </VstLayout>
        </VstLayout>;
    }
}