import Vst, {Component} from "../../vst";
import Tabs, {TabsProps, TabPaneProps} from "antd/es/tabs";
import "antd/es/tabs/style";

const {TabPane} = Tabs;

export interface VstTabProps extends TabsProps {

}

export {TabPane as VstTabPane, TabPaneProps}

export default class VstTab extends Component<VstTabProps, {}> {

    constructor(props: VstTabProps) {
        super(props);
    }

    public render(): Vst.Element {
        return <Tabs {...this.props}>{this.props.children}</Tabs>;
    }

}