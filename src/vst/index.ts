import * as React from "react";
import Component from './component/Component';
import {RouteComponentProps} from "react-router";

const Vst = {
    createElement: React.createElement,
    Component
}

export default Vst;
export {Component}

declare namespace Vst {
    type Element = React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined;
    type ComponentType = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}