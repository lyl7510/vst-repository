import Vst from '../index';
import * as React from 'react';
import axios from "./../../utils/axios";
import {createHashHistory} from "history";
import projectConfig from "./../../config/ProjectConfig";
import VstMessage from "./../../comps/message";

const history = createHashHistory();

export default abstract class Component<P extends {}, S extends {}> extends React.Component<P, S> {

    constructor(props: P) {
        super(props);
    }

    protected requestData(url: string, paramMap: { [name: string]: any } = {}): Promise<any> {
        return axios.post(projectConfig.getBasePath() + url, paramMap).catch((result: any) => {
            VstMessage.error('系统错误，请稍后再试');
        });
    }

    protected push(url: string): void {
        history.push(url);
    }

    public abstract render(): Vst.Element;
}