import * as React from 'react';
import * as PropTypes from "prop-types";
import BaseComponent, {BaseComponentProps} from "./../../vst/page/BaseComponent";
import BraftEditor, {ControlType, EditorState} from 'braft-editor';

import 'braft-editor/dist/index.css'
import "./style/index.less";

export interface EditorComponentProps extends BaseComponentProps{
    value?: string;
    placeholder?: string;
    onChange?: (editorState: EditorState) => void;
}

export interface EditorComponentState {

}

export default class EditorComponent extends BaseComponent<EditorComponentProps, EditorComponentState> {

    public controls: ControlType[] = [
        "undo", "redo", "separator", "font-family", "font-size", "line-height", "letter-spacing", "headings", "separator", "text-color", "bold", "italic", "underline", "strike-through", "remove-styles", "separator",
        "text-indent", "text-align", "separator", "list-ol", "list-ul", "separator", "media", "link", "hr", "clear"
    ];

    public static contextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    public value:string;
    public editor:BraftEditor;

    public constructor(props: EditorComponentProps) {
        super(props);
        this.value = this.props.value;
    }

    public componentWillMount(): void {
        const {value, setResetFieldFun} = this.context;
        if (value) {
            this.value = value;
        }
        if (setResetFieldFun) {
            setResetFieldFun(this.resetField.bind(this));
        }
    }

    public onChange(editorState: EditorState): void {
        const value = editorState.toHTML() === "<p></p>" ? undefined : editorState.toHTML();
        if (this.value == value) {
            return;
        }
        const {onChange} = this.context;
        this.value = value;
        onChange && onChange(value, true);
        this.props.onChange && this.props.onChange(editorState);
    }

    private resetField(defaultValue: any): void {
        defaultValue = defaultValue == "" || defaultValue == null ? undefined : defaultValue;
        this.value = defaultValue;
        if(this.editor){
            this.editor.setValue(BraftEditor.createEditorState(this.value));
        }
        const {onChange} = this.context;
        onChange && onChange(defaultValue, false);
    }

    public shouldComponentUpdate(nextProps: Readonly<EditorComponentProps>, nextState: Readonly<EditorComponentState>, nextContext: any): boolean {
        return false;
    }

    public render(): JSX.Element {
        const {placeholder} = this.props;
        const editorValue = BraftEditor.createEditorState(this.value);
        return <BraftEditor ref={(node)=>this.editor = node} controls={this.controls} value={editorValue} onChange={this.onChange.bind(this)} language="zh"
                            className="ant-editor" placeholder={placeholder}/>
    }
}