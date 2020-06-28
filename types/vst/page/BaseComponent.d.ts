/// <reference types="react" />
import * as React from 'react';
import { match } from 'react-router-dom';
import IRequestParam from "../interface/IRequestParam";
export declare enum MessageType {
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info",
    WARNING = "warning",
}
export interface BaseComponentProps {
    match?: match<any>;
}
export default class BaseComponent<P extends BaseComponentProps, S extends {}> extends React.Component<P, S> {
    constructor(props: P);
    requestData(url: string, paramMap?: IRequestParam): Promise<any>;
    protected message(msg: string, type?: MessageType): void;
    protected confirm(title: string, content?: string): Promise<any>;
    protected push(url: string): void;
    protected getRouterParam(key: string): any;
}
