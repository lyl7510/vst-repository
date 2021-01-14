import * as React from "react";
import * as PropTypes from "prop-types";
import Upload, {UploadProps} from "antd/es/upload";
import {RcFile, UploadFile, UploadChangeParam} from "antd/es/upload/interface";

import ComponentConfig from "@packages/config/ComponentConfig";

import "antd/es/upload/style/index.css";

export interface ArtUploadProps extends UploadProps {
    value?: UploadFile[];
}

export default class ArtUpload extends React.Component<ArtUploadProps, {}> {

    public static contextTypes = {
        onChange: PropTypes.func,
        changeModel: PropTypes.func
    };

    public static defaultProps = ComponentConfig.defaultProps.upload;

    constructor(props: ArtUploadProps) {
        super(props);
    }

    /**
     * 是否需要更新dom
     */
    public shouldComponentUpdate(nextProps: ArtUploadProps): boolean {
        return nextProps.value !== this.props.value;
    }

    /**
     * 上传之前接口,验证判断
     * @param {RcFile} file
     * @param {RcFile[]} FileList
     */
    protected async beforeUpload(file: RcFile, fileList: RcFile[]) {
        //如果在表单内使用
        if (this.context.onChange) {
            let newFiles = this.props.value || [];
            newFiles = newFiles.concat(file);
            const result = await this.context.onChange(newFiles, true);
            //如果表单内容通过
            if (result) {
                //用户自定义上传前操作
                if (this.props.beforeUpload) {
                    const beforeUploadResult = await this.props.beforeUpload(file, fileList);
                    if (beforeUploadResult) {
                        this.context.changeModel(newFiles);
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    this.context.changeModel(newFiles);
                    return true;
                }
            } else {
                return false;
            }
        }
        return this.props.beforeUpload ? this.props.beforeUpload(file, fileList) : true;
    }

    /**
     * 发生变化触发的函数
     * @param info
     * @private
     */
    private onChange(info: UploadChangeParam<UploadFile>): void {
        if (info.file.status === "done") {
            if (this.context.onChange) {
                const newFiles: UploadFile[] = this.props.value;
                newFiles.pop();
                newFiles.push(this.responseData(info.file));
                this.context.changeModel(newFiles);
            }
        }
        this.props.onChange && this.props.onChange(info);
    }

    /**
     * 默认返回数据格式和upload组件格式不一致
     * @param uploadFile
     * @private
     */
    private responseData(uploadFile: UploadFile): UploadFile {
        const id: string = ComponentConfig.defaultProps.upload.id ? ComponentConfig.defaultProps.upload.id : "id";
        const fileName: string = ComponentConfig.defaultProps.upload.id ? ComponentConfig.defaultProps.upload.fileName : "name";
        return {
            uid: uploadFile.response.bean[id],
            size: uploadFile.size,
            name: uploadFile.response.bean[fileName],
            fileName: uploadFile.fileName,
            lastModified: uploadFile.lastModified,
            lastModifiedDate: uploadFile.lastModifiedDate,
            url: uploadFile.fileName,
            status: uploadFile.status,
            percent: uploadFile.percent,
            thumbUrl: uploadFile.thumbUrl,
            originFileObj: uploadFile.originFileObj,
            error: uploadFile.error,
            response: uploadFile.response,
            linkProps: uploadFile.linkProps,
            type: uploadFile.type,
            preview: uploadFile.preview
        }
    }

    public render(): React.ReactNode {
        const {value, ...other} = this.props;
        return (<Upload {...other} fileList={value} beforeUpload={this.beforeUpload.bind(this)}
                        onChange={this.onChange.bind(this)}>
            {this.props.children}
        </Upload>)
    }

};
