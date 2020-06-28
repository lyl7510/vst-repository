/// <reference types="react" />
import * as React from 'react';
export interface CheckBoxComponentState {
    checkedList: string[];
    indeterminate: boolean;
    checkAll: boolean;
}
export default class CheckBoxComponent extends React.Component<{}, CheckBoxComponentState> {
    constructor(props: {});
    onChange(checkedList: string[]): void;
    onCheckAllChange(e: any): void;
    render(): JSX.Element;
}
