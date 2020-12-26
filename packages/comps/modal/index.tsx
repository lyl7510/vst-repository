import * as React from "react";
import Modal from "antd/es/modal";
import {ModalProps} from "antd/es/modal/Modal";
import ComponentConfig from "@packages/config/ComponentConfig";

import "antd/es/modal/style/index.css";

export default class ArtModal extends React.Component<ModalProps, {}> {

    public static defaultProps = ComponentConfig.defaultProps.modal;

    constructor(props: ModalProps) {
        super(props);
    }

    public render(): React.ReactNode {
        return <Modal {...this.props}>{
            this.props.children
        }</Modal>
    }

};
