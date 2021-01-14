import * as React from "react";
import * as PropTypes from "prop-types";
import BraftEditor, {BraftEditorProps, EditorState} from 'braft-editor';
import ComponentConfig from "@packages/config/ComponentConfig";

import 'braft-editor/dist/index.css';
import "./style/index.css";

// @ts-ignore
interface EditorProps extends BraftEditorProps {
    value?: string;
}

export interface ArtEditorState {
    value: EditorState;
}

export default class Editor extends React.Component<EditorProps, ArtEditorState> {

    public static contextTypes = {
        onChange: PropTypes.func
    };

    public static defaultProps = ComponentConfig.defaultProps.editor;

    constructor(props: EditorProps) {
        super(props);
        this.state = {
            value: BraftEditor.createEditorState(this.props.value)
        }
    }

    /**
     * props接受的参数不能直接用，需要转换成EditorState对象
     * @param nextProps
     * @param prevState
     */
    public static getDerivedStateFromProps(nextProps: BraftEditorProps, prevState: ArtEditorState): Partial<{}> | null {
        // @ts-ignore
        if (nextProps.value !== prevState.value.toHTML()) {
            return {
                value: BraftEditor.createEditorState(nextProps.value)
            };
        } else {
            return null;
        }
    }

    /**
     * 默认数据已经展示，永久不需要更新
     */
    public shouldComponentUpdate(): boolean {
        return false;
    }

    protected onChange(editorState: EditorState) {
        this.context.onChange && this.context.onChange(editorState.toHTML());
        this.props.onChange && this.props.onChange(editorState);
    }

    public render(): React.ReactNode {
        return <BraftEditor className={"braft-editor"} {...this.props} value={this.state.value}
                            onChange={this.onChange.bind(this)}></BraftEditor>
    }

}