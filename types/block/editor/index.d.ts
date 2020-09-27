/// <reference types="react" />
import * as PropTypes from "prop-types";
import BaseComponent, { BaseComponentProps } from "./../../vst/page/BaseComponent";
import BraftEditor, { ControlType, EditorState } from 'braft-editor';
import 'braft-editor/dist/index.css';
import "./style/index.less";
export interface EditorComponentProps extends BaseComponentProps {
    value?: string;
    placeholder?: string;
    onChange?: (editorState: EditorState) => void;
}
export interface EditorComponentState {
}
export default class EditorComponent extends BaseComponent<EditorComponentProps, EditorComponentState> {
    controls: ControlType[];
    static contextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    value: string;
    editor: BraftEditor;
    constructor(props: EditorComponentProps);
    componentWillMount(): void;
    onChange(editorState: EditorState): void;
    private resetField(defaultValue);
    shouldComponentUpdate(nextProps: Readonly<EditorComponentProps>, nextState: Readonly<EditorComponentState>, nextContext: any): boolean;
    upload(param: any): void;
    render(): JSX.Element;
}
