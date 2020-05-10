import * as React from 'react';
import * as PropTypes from 'prop-types';
import FormItem, {FormItemProps, FormItemState} from "./FormItem";

import "antd/es/grid/style";
import "./style/index.less";

export interface IForm {
    [name: string]: any;
}

export interface IRuleItem {
    verify?: string | RegExp;
    validator?: (value: any, rule?: IRuleItem, formData?: IForm) => boolean;
    message: string;

    [name: string]: any;
}

export interface IRule {
    [name: string]: IRuleItem | IRuleItem[];
}

export interface FormProps {
    model: IForm;
    rules?: IRule
}

export default class Form extends React.Component<FormProps, {}> {

    public static Item: React.ComponentClass<FormItemProps, FormItemState> = FormItem;
    public itemFields: Map<string, FormItem> = new Map<string, FormItem>();
    private model: IForm;

    public static childContextTypes = {
        model: PropTypes.object,
        rules: PropTypes.object,
        addItemField: PropTypes.func,
        setModel: PropTypes.func

    };

    constructor(props: FormProps) {
        super(props);
        this.model = this.props.model;
    }

    public addItemField(name: string, formItem: FormItem): void {
        this.itemFields.set(name, formItem);
    }

    private setModel(name: string, value: any): void {
        const model = {};
        model[name] = value;
        this.model = Object.assign(this.model, model);
    }

    public getChildContext(): { model: object, rules: object, addItemField: (name: string, formItem: FormItem) => void, setModel: (name: string, value: any) => void } {
        return {
            model: this.model,
            rules: this.props.rules,
            addItemField: this.addItemField.bind(this),
            setModel: this.setModel.bind(this)
        };
    }

    public showMessage(name: string, message: string): void {
        const formItem: FormItem = this.itemFields.get(name);
        if (formItem !== null) {
            formItem.showMessage(message);
        }
    }


    public validate(): boolean {
        let result: boolean = true;
        for (let formItem of this.itemFields.values()) {
            const rs = formItem.validate();
            if (!rs) {
                result = false;
            }
        }
        return result;
    }

    public resetFields(): void {
        for (let formItem of this.itemFields.values()) {
            formItem.resetField();
        }
    }

    public componentWillReceiveProps(nextProps: Readonly<FormProps>, nextContext: any): void {
        if (this.model != nextProps.model) {
            this.model = nextProps.model;
        }
    }

    public getFormData(): IForm {
        return this.model;
    }

    private renderBaseClass(): string {
        return "ant-row ant-form ant-form-horizontal";
    }

    render(): JSX.Element {
        return <div className={this.renderBaseClass()}>{this.props.children}</div>;
    }

}
