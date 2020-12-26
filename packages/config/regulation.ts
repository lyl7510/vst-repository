import {IRegular, IRegulation} from "../comps/form/interface/index";

const regulation: IRegulation = {
    regular: {
        required: (value: any): boolean => {
            return value !== null && value !== undefined && /\S/g.test(value);
        },
        telphone: /^[1][0-9]{10}$/,
        integer: /^[1-9][0-9]*$/,
        float: /^\d*(?:\.\d{0,2})?$/,
        int: /^[0-9]*$/,
        image: /.jpg$|.jpeg$|.gif$|.png$/i,
        email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    },
    /**
     * 注入正则表达式
     * @param {IRegular} regular
     */
    inject: function (regular: IRegular) {
        this.regular = Object.assign(regular, this.regular);
    }
};

export default regulation;
