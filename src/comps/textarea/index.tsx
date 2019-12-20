import Vst, {Component} from "../../vst/index";
import Input from "antd/es/input/Input";
import {TextAreaProps, TextAreaState} from "antd/es/input/TextArea";
import "antd/es/input/style"

const {TextArea} = Input;

export interface IvstTextAreaProps extends TextAreaProps {

}

export interface IvstTextAreaState extends TextAreaState {

}

export default class VstTextArea extends Component<IvstTextAreaProps, IvstTextAreaState> {

    constructor(props: IvstTextAreaProps) {
        super(props);
    }

    public render(): Vst.Element {
        return <TextArea  {...this.props}>{this.props.children}</TextArea>;
    }

}