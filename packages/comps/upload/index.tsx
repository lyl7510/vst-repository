import * as React from "react";
import * as PropTypes from "prop-types";
import Upload, {UploadProps} from "antd/es/upload";
import {RcFile, UploadFile, UploadState} from "antd/es/upload/interface";
import ComponentConfig from "@packages/config/ComponentConfig";

import "antd/es/upload/style/index.css";

export interface ArtUploadProps extends UploadProps {
    value?: Array<UploadFile>;
}

export default class ArtUpload extends React.Component<ArtUploadProps, UploadState> {

    public static contextTypes = {
        onChange: PropTypes.func
    };

    public static defaultProps = ComponentConfig.defaultProps.upload;

    constructor(props: ArtUploadProps) {
        super(props);
    }

    /**
     * 上传之前接口
     * @param {RcFile} file
     * @param {RcFile[]} FileList
     */
    protected beforeUpload(file: RcFile, fileList: RcFile[]) {
        if (this.context.onChange) {
            const newFiles = this.props.value || [];
            return new Promise((resolve, reject) => {
                this.context.onChange(newFiles.concat(fileList), true).then((result: boolean) => {
                    result ? resolve() : reject();
                }).catch(() => {
                    reject();
                });
            });
        } else {
            this.props.beforeUpload && this.props.beforeUpload(file, fileList);
            return true;
        }
    }

    public render(): React.ReactNode {
        return (<Upload {...this.props} fileList={this.props.value} beforeUpload={this.beforeUpload.bind(this)}>
            {this.props.children}
        </Upload>)
    }

};
