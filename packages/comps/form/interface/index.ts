export interface IModel {
  [name: string]: any;
}

type ValidatorType = ((value: any, option: any, model: IModel) => boolean | Promise<boolean>) | string | RegExp;

export interface IRule {
  validator: ValidatorType,
  message: string;
  equal?: string;
  max?: number;
  min?: number
}

/**
 * 表单基础内容
 */
export interface IFormContentProps {
  //是否显示必填标签
  hideRequiredMark?: boolean;
  //左侧label位置
  labelAlign?: "left" | "right";
  //左侧label宽度
  labelWidth?: number;
  //item 标签布局
  itemCol?: number;
  //是否显示左侧冒号：
  colon?: boolean;
  //设置字段组件的尺寸
  size?: "small" | "middle" | "large";
}

/**
 * 配置验证规则内容
 */
export type RegularType = ((value: any, rule?: IRule, model?: IModel) => boolean) | RegExp;

export interface IRegular {
  [name: string]: RegularType
}

export interface IRegulation {
  regular: IRegular,
  inject: (regular: IRegular) => void;
}

export interface IFormResult {
  valid: boolean;
  bean?: IModel;
}
