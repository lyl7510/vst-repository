import Modal from "antd/es/modal";
import {ModalFuncProps} from "antd/es/modal/Modal";
import {isString} from "../../../utils/ToolUtils";

import "antd/es/modal/style/index.css";

const {confirm} = Modal;

const confirmation = function (options: ModalFuncProps | string): Promise<any> {
  return new Promise(function (resolve, reject) {
    let option: ModalFuncProps = {};
    if (isString(options)) {
      option.title = "消息提示";
      option.content = options as string;
    } else {
      option = options as ModalFuncProps;
    }
    option.onCancel = () => {
      reject();
    };
    option.onOk = () => {
      resolve();
    };
    confirm(option);
  });
};

export default confirmation
