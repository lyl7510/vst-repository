import {IForm, IRuleItem} from "./Form";

export interface Iregular {
    [name: string]: RegExp | Function;
}

const regular: Iregular = {
    required: (rule: IRuleItem, value: any): boolean => {
        return value !== null && value !== undefined && /\S/g.test(value);
    },
    telphone: /^[1][0-9]{10}$/,
    integer: /^[1-9][0-9]*$/,
    float:/^\d*(?:\.\d{0,2})?$/,
    int:/^[0-9]*$/,
    image: /.jpg$|.jpeg$|.gif$|.png$/i,
    repass: function (rule: IRuleItem, value: any , model:IForm) {
        return value == model[rule.equal];
    }
};

export default regular;