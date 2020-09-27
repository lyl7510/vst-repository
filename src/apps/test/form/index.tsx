import * as React from 'react';
import {Form, Button} from "../../../comps";
import Editor from "./../../../block/editor";
import FormComponent, {FormComponentProps, FormComponentState} from "../../../vst/page/FormComponent";

export default class FormExample extends FormComponent<FormComponentProps, FormComponentState> {

    private textarea: HTMLTextAreaElement = null;

    constructor(props: FormComponentProps) {
        super(props);
        this.state = {
            myForm: {
                CONTENT: undefined
            },
            rules: {
                CONTENT: {verify: "required", message: "内容不能为空"}
            }
        }
    }

    protected submit(): void {
        console.log(this.state.myForm);
    }

    render(): JSX.Element {
        const {myForm ,rules} = this.state;
        return (<React.Fragment>
                <Form model={myForm} rules={rules} ref={(node) => this.myFrom = node}>
                    <Form.Item span={24} prop="CONTENT" label="名称">
                       <Editor value={myForm.CONTENT}></Editor>
                    </Form.Item>
                    <Form.Item span={24}>
                        <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                    </Form.Item>
                </Form>
            </React.Fragment>
        );
    }
}
