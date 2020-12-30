import BaseComponent from "./BaseComponent";
import {ModalProps} from "antd/es/modal/Modal";

export interface DialogComponentState extends ModalProps {

}

export default abstract class DialogComponent<P, S> extends BaseComponent<P, S> {

    /**
     * 打开方法
     * @param param
     */
    public abstract open(param?: any): void;

    /**
     * 关闭方法
     */
    public abstract close(): void;

}


