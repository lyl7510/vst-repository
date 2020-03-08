import * as React from 'react';
import axios from "../../utils/axios";
import message from "../../comps/message";
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


export default class BaseComponent<P extends {}, S extends {}> extends React.Component<P, S> {

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

    protected push(url: string): void {
        history.push(url);
    }

}