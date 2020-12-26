import {IModel, IRule} from "./interface/index";
import {isArray, isString, isFunction, isRegExp} from "../../utils/ToolUtils";
import regulation from "../../config/regulation";

export type BooleanString = boolean | string;
/**
 * 判断验证规则中是否包含required
 * @param {IRule | IRule[]} rule
 * @returns {boolean}
 */
const isRequired = function (rule: IRule | IRule[]): boolean {
  if (rule) {
    if (isArray(rule)) {
      const rls = rule as IRule[];
      for (let rl of rls) {
        if (isString(rl.validator)) {
          const validator = rl.validator as string;
          if (validator.includes('required')) {
            return true;
          }
        }
      }
    } else {
      const rl = rule as IRule;
      if (isString(rl.validator)) {
        const validator = rl.validator as string;
        return validator.includes('required');
      }
    }
  }
  return false;
};
export {isRequired};

/**
 * 验证单条记录
 * @param value
 * @param {IRule} rule
 * @returns {boolean}
 */
const validRule = function (value: any, rule: IRule, model: IModel): Promise<BooleanString> {
  return new Promise<BooleanString>((resolve, reject) => {
    //如果是字符串
    if (isString(rule.validator)) {
      const validator = rule.validator as string;
      const regulars: string[] = validator.split("|");
      let result: BooleanString = true;

      //如果包含双重判断
      if(regulars && regulars.length > 1){
        result = false;
        for (var i = 0; i < regulars.length; i++) {
          if (regulation.regular[regulars[i]]) {
            if (isFunction(regulation.regular[regulars[i]])) {
              const fun = regulation.regular[regulars[i]] as Function;
              result = fun(value, rule, model);
              if (result == true) {
                break;
              }
            } else {
              const regular = regulation.regular[regulars[i]] as RegExp;
              if (regular.test(value)) {
                result = true;
                break;
              }
            }
          } else {
            reject(`cannot find validator is "${regulars[i]}"`);
            break;
          }
        }
        if(result === false){
          resolve(rule.message);
        }else{
          resolve(result);
        }
      }else{
        if (isFunction(regulation.regular[validator])) {
          const fun = regulation.regular[validator] as Function;
          result = fun(value, rule, model);
          if (result !== true) {
            result = rule.message;
          }
        } else {
          const regular = regulation.regular[validator] as RegExp;
          if (!regular.test(value)) {
            result = rule.message;
          }
        }
        resolve(result);
      }

      //如果是函数
    } else if (isFunction(rule.validator)) {
      const validator = rule.validator as Function;
      validator(value, rule, resolve, model);
      //如果是正则表达式
    } else if (isRegExp(rule.validator)) {
      const validator = rule.validator as RegExp;
      const result: BooleanString = validator.test(value) ? true : rule.message;
      resolve(result);
      //其他情况报错
    } else {
      reject('callback function are not executed!');
    }
  });
};

/**
 * 验证所有记录
 * @param value
 * @param {IRule | IRule[]} rule
 * @param {IModel} model
 * @returns {Promise<boolean>}
 */
const validator = async function (value: any, rule: IRule | IRule[], model: IModel): Promise<BooleanString> {
  let result: BooleanString = true;
  if (rule) {
    if (isArray(rule)) {
      const rules = rule as IRule[];
      for (var i = 0; i < rules.length; i++) {
        result = await validRule(value, rules[i], model);
        if(result !== true){
          break;
        }
      }
    } else {
      return await validRule(value, rule as IRule, model);
    }
  }
  return result;
};

export default validator;


