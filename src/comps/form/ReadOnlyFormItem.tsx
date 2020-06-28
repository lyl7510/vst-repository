import * as React from 'react';
import {FormItemProps} from "./FormItem";

export interface ReadOnlyFormItemProps {
    label?: string;
    require?: boolean;
    span?: number;
}

export default class ReadOnlyFormItem extends React.Component<ReadOnlyFormItemProps, {}> {

    public static defaultProps: FormItemProps = {
        span: 8
    };

    constructor(props: ReadOnlyFormItemProps) {
        super(props);
    }

    private renderBaseClass(): string {
        return `ant-form-item ant-form-item-with-help ant-col ant-col-${this.props.span}`;
    }

    private renderLabel(): JSX.Element {
        if (this.props.label) {
            return <div className="ant-form-item-label">
                <label className={this.props.require ? "ant-form-item-required" : ""}>
                    {this.props.label}
                </label>
            </div>
        } else {
            return null;
        }
    }

    private renderWrapperClass(): string {
        return this.props.label ? "ant-form-item-control-wrapper has-label" : "ant-form-item-control-wrapper";
    }

    render(): JSX.Element {
        return (<div className={this.renderBaseClass()}>
            {this.renderLabel()}
            <div className={this.renderWrapperClass()}>
                <div className={'ant-form-item-control'}>
                    <div className="ant-form-item-children">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>)
    }

}
