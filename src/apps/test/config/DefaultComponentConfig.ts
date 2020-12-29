import {IDefaultProps} from "@packages/config/ComponentConfig";

const defaultComponentConfig: IDefaultProps = {
    button: {
        loading: false,
        ghost: false,
        block: false,
        htmlType: "button"
    },
    form: {
        layout: "inline",
        hideRequiredMark: false,
        labelAlign: "right",
        labelWidth: 120,
        itemCol: 12,
        colon: false,
        size: "middle"
    },
    table: {
        bordered: true
    }
};
export default defaultComponentConfig;
