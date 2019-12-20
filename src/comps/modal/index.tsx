import Vst, {Component} from "../../vst";
import Modal, {ModalProps} from "antd/es/modal";
import "antd/es/modal/style";

export interface VstModalProps extends ModalProps {

}

export default class VstModal extends Component<VstModalProps, {}> {

    public static defaultProps = {
        maskClosable: false,
        keyboard: false
    }

    constructor(props: VstModalProps) {
        super(props);
    }

    render(): Vst.Element {
        return <Modal {...this.props}>{this.props.children}</Modal>;
    }
}