export interface IModel {
    [name: string]: any;
}
declare type ValidatorType = ((value: any, option: any, model: IModel) => boolean | Promise<boolean>) | string | RegExp;
export interface IRule {
    validator: ValidatorType;
    message: string;
    equal?: string;
    max?: number;
    min?: number;
}
export interface IFormContentProps {
    hideRequiredMark?: boolean;
    labelAlign?: "left" | "right";
    labelWidth?: number;
    itemCol?: number;
    colon?: boolean;
    size?: "small" | "middle" | "large";
}
declare type RegularType = ((value: any, rule?: IRule, model?: IModel) => boolean) | RegExp;
export interface IRegular {
    [name: string]: RegularType;
}
export interface IRegulation {
    regular: IRegular;
    inject: (regular: IRegular) => void;
}
export interface IFormResult {
    valid: boolean;
    bean?: IModel;
}
export {};
