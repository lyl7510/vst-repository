import * as React from 'react';
import {IForm, IRule} from "../../comps/form";
import Form from "../../comps/form";
import BaseComponent, {BaseComponentProps} from "./BaseComponent";
import Modal from "./../../comps/modal";

export interface DialogFormComponentProps extends BaseComponentProps {
    callback?: (option?: any) => void;
}

export interface DialogFormComponentState {
    myForm?: IForm;
    rules?: IRule;
    visible?: boolean;
}


export default abstract class DialogFormComponent<P extends DialogFormComponentProps, S extends DialogFormComponentState> extends BaseComponent<DialogFormComponentProps, DialogFormComponentState> {

    public myFrom: Form;

    protected title: string = "";
    protected width: number = 800;
    protected okText: string = "确定";
    protected cancelText: string = "取消";
    protected maskClosable: boolean = false;
    protected destroyOnClose: boolean = true;


    protected constructor(props: DialogFormComponentProps) {
        super(props);
        this.state = {
            visible: false,
            myForm: {},
            rules: {}
        }
    }

    public open(paramMap: any = {}): void {
        if (this.myFrom) {
            this.myFrom.resetFields();
        }
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
        if (this.myFrom) {
            this.myFrom.resetFields();
        }
        this.setState({
            visible: false
        })
    }

    protected validate(): boolean {
        return this.myFrom.validate();
    }

    protected ok(): void {
        if (this.validate()) {
            this.submit();
        }
    }

    protected afterClose(): void {
        if (this.myFrom) {
            this.myFrom.resetFields();
        }
    }

    protected abstract submit(): void;

    protected abstract renderContent(): JSX.Element;

    public render(): JSX.Element {
        return (
            <Modal title={this.title} width={this.width} visible={this.state.visible} onOk={this.ok.bind(this)} okText={this.okText} cancelText={this.cancelText}
                   maskClosable={this.maskClosable} onCancel={this.cancel.bind(this)}
                   afterClose={this.afterClose.bind(this)} destroyOnClose={this.destroyOnClose}>
                {this.renderContent()}
            </Modal>
        );
    }
}
