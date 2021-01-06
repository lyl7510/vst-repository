import {IModel, IRule, RegularType} from "@packages/comps/form/interface/index";

export interface IRegular {
    [name: string]: RegularType
}

const regulationConfig: IRegular = {
    repass: (value: any, rule: IRule, model: IModel) => {
        return value === model[rule.equal];
    },
    length: (value: any, rule: IRule) => {
        if (!value || value.length === 0) {
            return false;
        } else {
            return rule.min <= value.length && value.length <= rule.max ? true : false;
        }
    },
    xlsxFile: (value: any, rule: IRule) => {
        if (!value || value.length === 0) {
            return false;
        }
        if (value && rule.max && value.length > rule.max) {
            return false;
        }
        for (let i = 0; i < value.length; i++) {
            if (!/.xlsx$|.xls$/i.test(value[i].name)) {
                    return false;
            }
        }
        return true;
    }
};

export default regulationConfig;
