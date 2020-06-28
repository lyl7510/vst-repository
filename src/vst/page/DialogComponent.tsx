import * as React from 'react';
import BaseComponent, {BaseComponentProps} from "./BaseComponent";
import Modal from "./../../comps/modal";

export interface DialogComponentProps extends BaseComponentProps {
    callback?: (option?: any) => void;
}

export interface DialogComponentState {
    [name: string]: any;
}

export default abstract class DialogComponent<P extends DialogComponentProps, S extends DialogComponentState> extends BaseComponent<DialogComponentProps, DialogComponentState> {

    protected title: string = "";
    protected width: number = 800;
    protected okText: string = "确定";
    protected cancelText: string = "取消";
    protected maskClosable: boolean = false;
    protected destroyOnClose: boolean = false;

    protected constructor(props: DialogComponentProps) {
        super(props);
        this.state = {
            visible: false
        }
    }

    public open(paramMap: any = {}): void {
        const promise = this.beforeInit(paramMap);
        if (promise) {
            promise.then(() => {
                this.setState({
                    visible: true
                });
            });
        } else {
            this.setState({
                visible: true
            });
        }
    }

    public beforeInit(paramMap: any): void | Promise<any> {

    }

    protected cancel(): void {
        this.setState({
            visible: false
        })
    }

    protected abstract ok(): void;

    public abstract renderContent(): JSX.Element;

    public render(): JSX.Element {
        return (
            <Modal title={this.title} width={this.width}
                   visible={this.state.visible}
                   onOk={this.ok.bind(this)}
                   onCancel={this.cancel.bind(this)} okText={this.okText} cancelText={this.cancelText}
                   maskClosable={this.maskClosable} destroyOnClose={this.destroyOnClose}>
                {this.renderContent()}
            </Modal>
        );
    }

}

