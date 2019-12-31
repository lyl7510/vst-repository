import * as React from "react";
import Component from './component/Component';
import {RouteComponentProps} from "react-router";

const Vst = {
    createElement: React.createElement,
    Component,
    Fragment: React.Fragment,
    createContext: React.createContext,
}

export default Vst;
export {Component}

export interface Iresult {
    code: number;
    data: any;
}

declare namespace Vst {
    type Element = JSX.Element;
    type ComponentType = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    type ChangeEvent<T> = React.ChangeEvent<T>;
    type ReactNode = React.ReactNode;
}