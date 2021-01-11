import * as React from "react";
import * as PropTypes from "prop-types";
import BraftEditor, {BraftEditorProps, EditorState} from 'braft-editor';
import ComponentConfig from "@packages/config/ComponentConfig";

import 'braft-editor/dist/index.css';
import "./style/index.css";

export default class Editor extends React.Component<BraftEditorProps, {}> {

    public static contextTypes = {
        onChange: PropTypes.func
    };

    public static defaultProps = ComponentConfig.defaultProps.editor;

    constructor(props: BraftEditorProps) {
        super(props);
    }

    protected onChange(editorState: EditorState) {
        this.context.onChange && this.context.onChange(editorState.toHTML());
        this.props.onChange && this.props.onChange(editorState);
    }

    public render(): React.ReactNode {
        return <BraftEditor className={"braft-editor"} {...this.props}
                            onChange={this.onChange.bind(this)}></BraftEditor>
    }

}