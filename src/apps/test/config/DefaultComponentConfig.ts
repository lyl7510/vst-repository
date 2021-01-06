import {IDefaultProps} from "@packages/config/ComponentConfig";
import {IResult} from "@packages/pages/BaseComponent";

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
    },
    modal: {
        okText: "确定",
        cancelText: "取消",
        okType: "primary",
        destroyOnClose: true,
        maskClosable: false
    },
    input: {
        allowClear: true
    },
    upload: {
        action: "http://172.18.255.251:7001/api/admin/upload",
        dealData: function (result: IResult) {
            if (result.returnCode === 0) {
                return {
                    uid: result.bean.id,
                    name: result.bean.name
                };
            } else {
                return null;
            }
        }
    }
};
export default defaultComponentConfig;
