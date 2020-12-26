import * as React from "react";
import {CSSProperties} from "react";
import * as PropTypes from "prop-types";
import {FormContent} from "./content/FormContent";
import {IFormContentProps, IModel, IRule} from "./interface/index";
import {isString} from "../../utils/ToolUtils";
import validator, {BooleanString, isRequired} from "./validator";
import ComponentConfig from "@packages/config/ComponentConfig";

export interface FormItemProps {
    //表单名称，会作为表单字段 id 前缀使用
    name?: string;
    //label 标签的文本
    label?: string;
    //设置子元素 label htmlFor 属性
    htmlFor?: string;
    //必填样式设置。如不设置，则会根据校验规则自动生成
    required?: boolean;
    //label 标签布局
    itemCol?: number;
    //左侧label位置
    labelAlign?: "left" | "right";
    //左侧label宽度
    labelWidth?: number;
    //是否显示左侧冒号：
    colon?: boolean;
    //验证规则
    rule?: IRule | IRule[],
    //验证函数
    validate?: () => Promise<boolean>;
}

export interface FormItemState {
    message?: string;
}

export default class FormItem extends React.Component<FormItemProps, FormItemState> {

    public static contextTypes = {
        defaultModel: PropTypes.object,
        model: PropTypes.object,
        push: PropTypes.func,
        setModel: PropTypes.func
    };

    public static childContextTypes = {
        onChange: PropTypes.func
    };

    public static defaultProps = ComponentConfig.defaultProps.formItem;

    constructor(props: FormItemProps) {
        super(props);
        this.state = {};
    }

    private value: any;

    /**
     * 向下传递对象
     * @returns {{model: IModel; push: (name: string, item: FormItem) => void; setModel: (name: string, value: any) => void}}
     */
    protected getChildContext(): { onChange: (value: any) => void } {
        return {
            onChange: this.onChange.bind(this)
        };
    }

    /**
     * 子节点发生变化，触发的函数
     */
    protected onChange(value: any): void {
        if (this.props.name) {
            this.value = value;
            this.context.setModel(this.props.name, value);
            this.validateField();
        }
    }

    /**
     * 渲染根样式
     * @param {IFormContentProps} form
     * @returns {string}
     */
    protected renderBaseClass(form: IFormContentProps): string {
        const itemCol = this.props.itemCol ? this.props.itemCol : form.itemCol;
        return `ant-form-item ant-col ant-col-${itemCol}`;
    }

    /**
     * 自定义宽度
     * @param {IFormContentProps} form
     * @returns {React.CSSProperties}
     */
    protected renderWidth(form: IFormContentProps): CSSProperties {
        const labelWidth = this.props.labelWidth ? this.props.labelWidth : form.labelWidth;
        return {width: labelWidth + "px"};
    }

    /**
     * 渲染label标签样式
     * @param {IFormContentProps} form
     * @returns {string}
     * ant-form-item-required form-item-left ant-form-item-no-colon
     */
    protected renderLabelClass(form: IFormContentProps): string {
        const colon = this.props.colon || form.colon ? "ant-form-item-no-colon" : "";
        const required = this.isRequire(form) ? "ant-form-item-required" : "";
        return `${required} ${colon}`;
    }

    /**
     * 判断是否含有×标示
     * @param {IFormContentProps} form
     * @returns {boolean}
     */
    protected isRequire(form: IFormContentProps): boolean {
        if (this.props.required) {
            return true;
        }
        if (this.props.required === false) {
            return false;
        }
        if (form.hideRequiredMark) {
            return false;
        }
        return isRequired(this.props.rule);
    }

    /**
     * 渲染左侧label内容
     * @param {IFormContentProps} form
     * @returns {JSX.Element}
     */
    protected renderLabel(form: IFormContentProps): JSX.Element {
        const {label} = this.props;
        return label ? <div className={"ant-form-item-label"} style={this.renderWidth(form)}>
            <label className={this.renderLabelClass(form)} title={label}>{label}</label>
        </div> : null;
    }

    protected renderControlClass(): string {
        const error = this.state.message ? "has-error" : "";
        return `ant-form-item-control ${error}`;
    }

    /**
     * 验证函数
     * @returns {Promise<boolean>}
     */
    public async validateField(): Promise<boolean> {
        const result: BooleanString = await validator(this.value, this.props.rule, this.context.model);
        if (isString(result)) {
            const rst = result as string;
            this.setState({
                message: rst
            });
            return false;
        } else {
            if (this.state.message) {
                this.setState({
                    message: null
                });
            }
            return true
        }
    }

    /**
     * 设置表单值
     * @param {IModel} model
     */
    public setFieldValue(model: IModel): void {
        this.value = model[this.props.name];
        if (this.state.message) {
            this.setState({
                message: null
            });
        }
    }

    /**
     * 重置表单
     */
    public resetField(): void {
        if (this.props.name && this.state.message) {
            this.setState({
                message: null
            });
        }
    }

    /**
     * 提示错误信息
     * @param {string} message
     */
    public showMessage(message: string): void {
        this.setState({
            message: message
        });
    }

    /**
     * 钩子函数，保存函数对象
     */
    public componentDidMount(): void {
        if (this.props.rule && this.props.name) {
            this.value = this.context.defaultModel[this.props.name];
            this.context.push(this.props.name, this);
        }
    }

    /**
     * 渲染内容
     * @returns {JSX.Element}
     */
    public render(): JSX.Element {
        const value = this.props.name && this.context.model ? this.context.model[this.props.name] : undefined;
        const {message} = this.state;
        return (
            <FormContent.Consumer>
                {(form: IFormContentProps) => (
                    <React.Fragment>
                        <div className={this.renderBaseClass(form)}>
                            {
                                this.renderLabel(form)
                            }
                            <div className={this.renderControlClass()}>
                <span className={"ant-form-item-children"}>
                  {
                      React.Children.map(this.props.children, (item: any) => {
                          return React.cloneElement(item, {
                              value: value
                          });
                      })
                  }
                </span>
                                {message ? <div className="ant-form-explain">{message}</div> : null}
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </FormContent.Consumer>
        )
    }
}
