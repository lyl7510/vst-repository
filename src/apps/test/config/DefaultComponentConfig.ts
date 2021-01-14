import {IDefaultProps} from "@packages/config/ComponentConfig";
import axios from "@packages/utils/axios";

const BASE_URL = "http://172.18.255.251:7001/api/admin";

const uploadUrl = BASE_URL + "/upload";
const imageUrl = BASE_URL + "/image?id=";

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
        allowClear: false
    },
    upload: {
        action: uploadUrl,
        multiple: true,
        id: "id",
        fileName: "file_name"
    },
    editor: {
        controls: [
            'undo', 'redo', 'separator',
            'font-size', 'line-height', 'letter-spacing', 'separator',
            'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
            'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
            'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
            'link', 'separator', 'hr', 'separator',
            'media', 'separator',
            'clear'
        ],
        media: {
            uploadFn: (param: any) => {
                let formData = new FormData();
                formData.append("file", param.file);
                axios.post(uploadUrl, formData, {
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then((result: any) => {
                    param.success({
                        url: imageUrl + result.data.ID,
                        meta: {
                            id: result.data.ID,
                            title: result.data.FILE_NAME,
                            alt: result.data.FILE_NAME,
                            loop: false, // 指定音视频是否循环播放
                            autoPlay: false, // 指定音视频是否自动播放
                            controls: true, // 指定音视频是否显示控制栏
                            poster: imageUrl + result.data.ID
                        }
                    });
                });
            }
        }
    }
};
export default defaultComponentConfig;
