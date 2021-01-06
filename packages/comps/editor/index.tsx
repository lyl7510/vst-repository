import * as React from "react";
import BraftEditor, {BraftEditorProps, EditorState} from 'braft-editor';
import 'braft-editor/dist/index.css';
import * as PropTypes from "prop-types";

export default class Editor extends React.Component<BraftEditorProps, {}> {

    public static contextTypes = {
        onChange: PropTypes.func
    };

    constructor(props: BraftEditorProps) {
        super(props);
    }

    protected onChange(editorState: EditorState) {
        this.context.onChange && this.context.onChange(editorState.toHTML());
        this.props.onChange && this.props.onChange(editorState);
    }

    public render(): React.ReactNode {
        return <BraftEditor {...this.props} value={this.props.value} onChange={this.onChange.bind(this)}></BraftEditor>
    }

}