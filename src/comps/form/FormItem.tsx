import * as React from 'react';
import {IRuleItem} from "./Form";
import * as ToolUtils from "./../../utils/ToolUtils";
import regular from "./regular";

import * as PropTypes from "prop-types";
import {debug} from "webpack";

export interface FormItemProps {
    label?: string;
    prop?: string;
    span?: number;
}

export interface FormItemState {
    message?: string
}

export default class FormItem extends React.Component<FormItemProps, FormItemState> {

    public static childContextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    public static contextTypes = {
        model: PropTypes.object,
        rules: PropTypes.object,
        addItemField: PropTypes.func,
        setModel: PropTypes.func
    };

    public static defaultProps: FormItemProps = {
        span: 8
    };

    public value: any;
    public defaultValue: any;
    public rule: IRuleItem | IRuleItem[];
    public resetFieldFun: (defaultValue: any) => void;

    constructor(props: FormItemProps) {
        super(props);
        this.state = {
            message: ""
        };
    }

    private setResetFieldFun(resetFieldFun: (defaultValue: any) => void): void {
        this.resetFieldFun = resetFieldFun;
    }

    public resetField(): void {
        if (this.resetFieldFun && ToolUtils.isFunction(this.resetFieldFun)) {
            this.resetFieldFun(this.defaultValue);
        }
        this.setState({
            message: ""
        });
        const {setModel} = this.context;
        if (setModel && ToolUtils.isFunction(setModel)) {
            setModel(this.props.prop, this.defaultValue);
        }
    }

    public getChildContext(): { value: any, onChange: (value: any) => void, setResetFieldFun: (defaultValue: any) => void } {
        const {prop} = this.props;
        const {model} = this.context;
        return {
            value: model[prop],
            onChange: this.onChange.bind(this),
            setResetFieldFun: this.setResetFieldFun.bind(this),
        };
    }

    public validate(): boolean {
        if (this.rule) {
            if (ToolUtils.isArray(this.rule)) {
                return this.validRuleArray(this.rule as IRuleItem[], this.value);
            } else {
                return this.validRule(this.rule as IRuleItem, this.value);
            }
        } else {
            return true;
        }
    }

    public showMessage(message: string): void {
        this.setState({
            message
        });
    }

    private onChange(p_value: any): void {
        this.value = p_value;
        const {setModel} = this.context;
        if (setModel && ToolUtils.isFunction(setModel)) {
            setModel(this.props.prop, p_value);
        }
        this.validate();
    }

    private validRegular(regu: RegExp | Function, rule: IRuleItem, value: any): boolean {
        if (ToolUtils.isFunction(regu)) {
            const {model} = this.context;
            const verify = regu as Function;
            return verify(rule, value, model);
        } else {
            const verify = regu as RegExp;
            return verify.test(value);
        }
    }

    private validRule(rule: IRuleItem, value: any): boolean {
        let result = false;
        if (!ToolUtils.isNull(rule)) {
            if (ToolUtils.isString(rule.verify)) {
                let verify = rule.verify as string;
                if (verify.includes("|")) {
                    const vers = verify.split("|");
                    for (let i = 0; i < vers.length; i++) {
                        const res = this.validRegular(regular[vers[i]], rule, value);
                        if (res) {
                            result = true;
                            break;
                        }
                    }
                    if (!result) {
                        this.setState({message: rule.message});
                    }
                } else {
                    result = this.validRegular(regular[verify], rule, value);
                    if (!result) {
                        this.setState({message: rule.message});
                    }
                }
            } else {
                let verify = rule.verify as RegExp;
                result = verify.test(value);
                if (!result) {
                    this.setState({
                        message: rule.message
                    });
                }
            }
        }
        if (result) {
            this.setState({
                message: ""
            });
        }
        return result;
    }

    private isRequire(): boolean {
        if (!ToolUtils.isNull(this.rule)) {
            if (ToolUtils.isArray(this.rule)) {
                const rules = this.rule as IRuleItem[];
                for (let i = 0; i < rules.length; i++) {
                    if (ToolUtils.isString(rules[i].verify)) {
                        if ((rules[i].verify as string).indexOf("required") > -1) {
                            return true;
                        }
                    }
                }
                return
            } else {
                if (ToolUtils.isString((this.rule as IRuleItem).verify)) {
                    if (((this.rule as IRuleItem).verify as string).indexOf("required") > -1) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    private validRuleArray(rules: IRuleItem[], value: any): boolean {
        let result = true;
        for (let i = 0; i < rules.length; i++) {
            result = this.validRule(rules[i], value);
            if (!result) {
                break;
            }
        }
        return result;
    }

    public componentWillMount(): void {
        const {prop} = this.props;
        const {model, rules, addItemField} = this.context;
        if (prop) {
            this.defaultValue = this.value = model[prop];
            this.rule = rules[prop];
            addItemField(prop, this);
        }
    }

    private renderBaseClass(): string {
        return this.state.message ? `ant-form-item ant-form-item-with-help ant-col ant-col-${this.props.span}` : `ant-form-item ant-col ant-col-${this.props.span}`;
    }

    private renderLabel(): JSX.Element {
        if (this.props.label) {
            return <div className="ant-form-item-label">
                <label className={this.isRequire() ? "ant-form-item-required" : ""}>
                    {this.props.label}
                </label>
            </div>
        } else {
            return null;
        }
    }

    private renderControlClass(): string {
        return this.state.message ? "ant-form-item-control has-error" : "ant-form-item-control";
    }

    private renderWrapperClass(): string {
        return this.props.label ? "ant-form-item-control-wrapper has-label" : "ant-form-item-control-wrapper";
    }

    render(): JSX.Element {
        const {message} = this.state;
        return (<div className={this.renderBaseClass()}>
            {this.renderLabel()}
            <div className={this.renderWrapperClass()}>
                <div className={this.renderControlClass()}>
                    <div className="ant-form-item-children">
                        {this.props.children}
                    </div>
                    <div className="ant-form-explain">{message}</div>
                </div>
            </div>
        </div>)
    }

}