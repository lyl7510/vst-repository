import Vst, {Component} from "../../vst/index";
import VstForm, {IruleItem} from "./Form";
import * as ToolUtils from "./../../utils/ToolUtils";
import regular from "./regular";

import * as PropTypes from "prop-types";

export interface IvstFormItemProps {
    label?: string;
    prop?: string;
    span?: number;
}

export interface IvstFormItemState {
    rule?: IruleItem | IruleItem[];
    value?: any;
    message?: string
}

export default class VstFormItem extends Component<IvstFormItemProps, IvstFormItemState> {

    public static contextTypes = {
        formComponent: PropTypes.any
    }

    public static defaultProps: IvstFormItemProps = {
        span: 24
    };

    constructor(props: IvstFormItemProps) {
        super(props);
        this.state = {
            message: ""
        }
    }

    public validate(): boolean {
        const value = this.getParent().props.model[this.props.prop];
        const rules = this.state.rule;
        if (ToolUtils.isArray(rules)) {
            return this.validRuleArray(rules as IruleItem[], value);
        } else {
            return this.validRule(rules as IruleItem, value);
        }
    }

    public showMessage(message: string): void {
        this.setState({
            message
        });
    }

    private validRegular(regu: RegExp | Function, rule: IruleItem, value: any): boolean {
        if (ToolUtils.isFunction(regu)) {
            const verify = regu as Function;
            return verify(rule, value);
        } else {
            const verify = regu as RegExp;
            return verify.test(value);
        }
    }

    private validRule(rule: IruleItem, value: any): boolean {
        let result = false;
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
        if (result) {
            this.setState({
                message: ""
            });
        }
        return result;
    }

    private validRuleArray(rules: IruleItem[], value: any): boolean {
        let result = true;
        for (let i = 0; i < rules.length; i++) {
            result = this.validRule(rules[i], value);
            if (!result) {
                break;
            }
        }
        return result;
    }

    public getParent(): VstForm {
        return this.context.formComponent;
    }

    public componentDidMount(): void {
        const {prop} = this.props;
        const parent = this.getParent();
        const {model, rules} = parent.props;
        if (prop) {
            parent.addItemField(prop, this);
            this.setState({
                rule: rules[prop],
                value: model[prop]
            });
        }
    }

    private renderBaseClass(): string {
        return `ant-form-item ant-col ant-col-${this.props.span}`;
    }

    private renderLabel(): Vst.Element {
        if (this.props.label) {
            return <div className="ant-form-item-label"/>
        } else {
            return null;
        }
    }

    private renderErrorClass(): string {
        return this.state.message ? "ant-form-item-control has-error" : "ant-form-item-control";
    }

    render(): Vst.Element {
        const {message} = this.state;
        return (<div className={this.renderBaseClass()}>
            {this.renderLabel()}
            <div className={this.renderErrorClass()}>
                <div className="ant-form-item-children">
                    {this.props.children}
                </div>
                <div className="ant-form-explain">{message}</div>
            </div>
        </div>)
    }

}