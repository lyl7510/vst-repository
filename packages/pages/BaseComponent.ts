import * as React from 'react';
import axios from "./../utils/axios";
import {AxiosRequestConfig} from "axios";

interface IRequestData {
    [name: string]: any;
}

interface IResult {
    returnCode?: number;
    returnMessage?: string;
    bean?: IRequestData;
    beans?: IRequestData[];
}

export {IRequestData , IResult}

export default class BaseComponent<P, S> extends React.Component<P, S> {

    /**
     * post请求方法
     * @param {string} url
     * @param {IRequestData} param
     * @param {AxiosRequestConfig} config
     * @returns {Promise<IResult>}
     */
    protected post(url: string, param?: IRequestData, config?: AxiosRequestConfig): Promise<IResult> {
        return axios.post(url, param, config);
    }

    /**
     * get请求方法
     * @param {string} url
     * @param {IRequestData | AxiosRequestConfig} param
     * @returns {Promise<IResult>}
     */
    protected get(url: string, param: IRequestData | AxiosRequestConfig): Promise<IResult> {
        return axios.get(url, param);
    }

}
