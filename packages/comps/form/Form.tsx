import * as React from "react";
import FormItem, {FormItemProps} from "./FormItem";
import {IFormContentProps, IModel, IFormResult} from "./interface/index";
import {FormContent} from "./content/FormContent";
import * as PropTypes from "prop-types";
import {BooleanString} from "./validator";
import ComponentConfig from "@packages/config/ComponentConfig";

import "antd/es/form/style/index.css";
import "./style/index.css";

export interface FromProps extends IFormContentProps {
    //表单布局
    layout?: "horizontal" | "vertical" | "inline";
    //验证函数
    validate?: () => Promise<boolean>;
    //字段值更新时触发回调事件
    onValuesChange?: (changedValue: any, name: string, allValues: IModel) => void;
    //表单数据
    model?: IModel;

}

export interface FormState {
    model?: IModel;
}

export default class Form extends React.Component<FromProps, FormState> {

    public static defaultProps = ComponentConfig.defaultProps.form;

    public static childContextTypes = {
        defaultModel: PropTypes.object,
        model: PropTypes.object,
        push: PropTypes.func,
        setModel: PropTypes.func
    };

    //表单项对象
    public static Item: React.ComponentClass<FormItemProps, {}> = FormItem;
    //当前表单需要验证的集合
    private formItems: Map<string, FormItem> = new Map<string, FormItem>();

    /**
     * 构造函数
     * @param {FromProps} props
     */
    constructor(props: FromProps) {
        super(props);
        this.state = {
            model: props.model
        }
    }

    /**
     * 表单创建完成时，设置表单值
     * @param {IModel} model
     */
    public setFieldsValue(model: IModel): void {
        this.setState({
            model: model
        });
        for (let item of this.formItems.values()) {
            item.setFieldValue(model);
        }
    }

    /**
     * 表单验证，如果通过返回类型是true，不通过返回类型是false
     * @returns {boolean}
     */
    public async validateFields(): Promise<IFormResult> {
        let result: boolean = true;
        for (let item of this.formItems.values()) {
            const rst: BooleanString = await item.validateField();
            if (rst === false) {
                result = false;
            }
        }
        return {
            valid: result,
            bean: result === true ? this.state.model : null
        };
    }

    /**
     * 重置表单
     */
    public resetFields(): void {
        this.setState({
            model: this.props.model
        });
        for (let item of this.formItems.values()) {
            item.resetField();
        }
    }

    /**
     * 提示某个表单项错误
     * @param {string} name
     * @param {string} message
     */
    public showMessage(name: string, message: string): void {
        if (!this.formItems.get(name)) {
            console.error(`cannot find formitem which name is ${name}`);
            return;
        }
        this.formItems.get(name).showMessage(message);
    }

    /**
     * 添加子节点验证项
     * @param {string} name
     * @param {FormItem} item
     */
    private push(name: string, item: FormItem): void {
        this.formItems.set(name, item);
    }

    /**
     * 修改state数据
     * @param {string} name
     * @param value
     */
    private setModel(name: string, value: any): void {
        const {model} = this.state;
        let newModel: IModel = Object.assign({}, model);
        newModel[name] = value;
        this.setState({
            model: newModel
        });
        this.props.onValuesChange && this.props.onValuesChange(value, name, newModel);
    }

    /**
     * 获取表单数据
     * @returns {IModel}
     */
    public getModel(): IModel {
        return this.state.model;
    }

    /**
     * 向下传递对象
     * @returns {{defaultModel: IModel;model: IModel; push: (name: string, item: FormItem) => void; setModel: (name: string, value: any) => void}}
     */
    protected getChildContext(): { defaultModel: IModel, model: IModel, push: (name: string, item: FormItem) => void, setModel: (name: string, value: any) => void } {
        return {
            defaultModel: this.props.model,
            model: this.state.model,
            push: this.push.bind(this),
            setModel: this.setModel.bind(this)
        };
    }

    /**
     * 渲染基础样式
     * @returns {string}
     */
    protected renderBaseClass(): string {
        return `ant-row ant-form ant-form-${this.props.layout}`;
    }

    /**
     * Content传递的数据
     * @returns {IFormContentProps}
     */
    protected contentProvider(): IFormContentProps {
        const {hideRequiredMark, labelAlign, labelWidth, itemCol, colon, size} = this.props;
        return {
            hideRequiredMark: hideRequiredMark,
            labelAlign: labelAlign,
            labelWidth: labelWidth,
            itemCol: itemCol,
            colon: colon,
            size: size
        }
    }

    /**
     * 渲染表单
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {
        return <div className={this.renderBaseClass()}>
            <FormContent.Provider value={this.contentProvider()}>
                {
                    this.props.children
                }
            </FormContent.Provider>
        </div>
    }
}
