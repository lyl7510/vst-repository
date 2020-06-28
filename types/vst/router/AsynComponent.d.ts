/// <reference types="react" />
import * as React from 'react';
export interface IAsynComponentState {
    component: React.ComponentType<any>;
}
export interface RouterType extends IAsynComponentState {
    path: string;
    exact?: boolean;
    children?: RouterType[];
}
export default function asynComponent(importComponent: () => Promise<{
    default: React.ComponentType<any>;
}>): React.ComponentType<any>;
