import * as React from 'react';
import axios from "../../utils/axios";
import {match} from 'react-router-dom'
import message from "../../comps/message";
import Modal from "../../comps/modal";
import Icon from "../../comps/icon";
import {createHashHistory} from "history";
import projectConfig from "../../config/ProjectConfig";
import IRequestParam from "../interface/IRequestParam";

const history = createHashHistory();

export enum MessageType {
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info",
    WARNING = "warning"
}

export interface BaseComponentProps {
    match?: match<any>
}

export default class BaseComponent<P extends BaseComponentProps, S extends {}> extends React.Component<P, S> {

    constructor(props: P) {
        super(props);
    }

    protected requestData(url: string, paramMap: IRequestParam = {}): Promise<any> {
        return axios.post(projectConfig.basePath + url, paramMap).catch((result: any) => {
            if (result && projectConfig.errorConfig[result]) {
                message.error(projectConfig.errorConfig[result]);
            } else {
                message.error('系统错误，请稍后再试');
            }
        });
    }

    protected message(msg: string, type: MessageType = MessageType.SUCCESS) {
        switch (type) {
            case MessageType.ERROR:
                message.error(msg);
                break;
            case MessageType.INFO:
                message.info(msg);
                break;
            case MessageType.WARNING:
                message.warning(msg);
                break;
            default:
                message.success(msg);
        }
    }

    protected confirm(title: string, content: string = ""): Promise<any> {
        return new Promise((resolve, reject) => {
            Modal.confirm({
                title: title,
                icon: <Icon type="question-circle"/>,
                content: content,
                onOk() {
                    resolve(null);
                },
                onCancel() {
                    reject(null);
                }
            });
        });
    }

    protected push(url: string): void {
        history.push(url);
    }

    protected getRouterParam(key: string): any {
        if (this.props.match) {
            return this.props.match.params[key];
        }
        return null;
    }

}