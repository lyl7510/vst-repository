import Vst, {Component} from "../../../vst";
import VstModal from "./../../../comps/modal";
import VstButton from "./../../../comps/button";

interface DialogComponentState {
    visible: boolean;
}

export default class DialogComponent extends Component<{}, DialogComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render(): Vst.Element {
        return <div>
            <VstButton type="primary" onClick={this.showModal}>
                Open Modal
            </VstButton>
            <VstModal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </VstModal>
        </div>;
    }
}