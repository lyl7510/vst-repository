import {IModel, IRule, RegularType} from "@packages/comps/form/interface/index";

export interface IRegular {
    [name: string]: RegularType
}

const regulationConfig: IRegular = {
    repass: (value: any, rule: IRule, model: IModel) => {
        return value === model[rule.equal];
    }
};

export default regulationConfig;
