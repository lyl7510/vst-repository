import * as React from "react";
import BraftEditor, {BraftEditorProps, EditorState} from 'braft-editor';
import 'braft-editor/dist/index.css';
import * as PropTypes from "prop-types";

export interface EditorProps extends BraftEditorProps {
    value?: string;
}

export interface EditorState {
    editorState: EditorState;
}


export default class Editor extends React.Component<EditorProps, EditorState> {

    public static contextTypes = {
        onChange: PropTypes.func
    };

    constructor(props: EditorProps) {
        super(props);
        this.state = {
            editorState: BraftEditor.createEditorState(this.props.value)
        }
    }

    protected onChange(editorState: EditorState) {
        this.context.onChange && this.context.onChange(editorState.toHTML());
        this.props.onChange && this.props.onChange(editorState);
    }

    public shouldComponentUpdate(nextProps: EditorProps, nextState: EditorState) {
        if (nextProps.value === this.props.value) {
            return false;
        } else {
            nextState.editorState = BraftEditor.createEditorState(nextProps.value);
            return true;
        }
    }

    public render(): React.ReactNode {
        const {editorState} = this.state;
        return <BraftEditor value={editorState} onChange={this.onChange.bind(this)}></BraftEditor>
    }

}