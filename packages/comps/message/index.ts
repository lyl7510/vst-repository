import * as React from "react";
import message from "antd/es/message";
import ComponentConfig from "@packages/config/ComponentConfig";

import "antd/es/message/style/index.css";

declare type MessageFunction = (content: React.ReactNode | string, duration?: number) => Promise<any>;

const defaultDuration: number = (ComponentConfig.defaultProps.message && ComponentConfig.defaultProps.message.duration) ? ComponentConfig.defaultProps.message.duration : 3;

const success: MessageFunction = (content: React.ReactNode | string, duration: number = defaultDuration): Promise<any> => {
    return new Promise(function (resolve) {
        message.success(content, duration, () => {
            resolve();
        })
    });
};
const error: MessageFunction = (content: React.ReactNode | string, duration: number = defaultDuration): Promise<any> => {
    return new Promise(function (resolve) {
        message.error(content, duration, () => {
            resolve();
        })
    });
};
const info: MessageFunction = (content: React.ReactNode | string, duration: number = defaultDuration): Promise<any> => {
    return new Promise(function (resolve) {
        message.info(content, duration, () => {
            resolve();
        })
    });
};
const warning: MessageFunction = (content: React.ReactNode | string, duration: number = defaultDuration): Promise<any> => {
    return new Promise(function (resolve) {
        message.warning(content, duration, () => {
            resolve();
        })
    });
};
const warn: MessageFunction = (content: React.ReactNode | string, duration: number = defaultDuration): Promise<any> => {
    return new Promise(function (resolve) {
        message.warn(content, duration, () => {
            resolve();
        })
    });
};
const loading: MessageFunction = (content: React.ReactNode | string, duration: number = defaultDuration): Promise<any> => {
    return new Promise(function (resolve) {
        message.loading(content, duration, () => {
            resolve();
        })
    });
};

export default {success, error, info, warning, warn, loading};
