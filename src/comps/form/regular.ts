import {IruleItem} from "./Form";

interface Iregular {
    [name: string]: RegExp | Function;
}

const regular: Iregular = {
    required: (rule: IruleItem, value: any): boolean => {
        return value !== null && value !== undefined && /\S/g.test(value);
    },
    telphone: /^[1][0-9]{10}$/,
    integer: /^[1-9][0-9]*$/,
    image: /.jpg$|.jpeg$|.gif$|.png$/i
}

export default regular;