import * as React from "react";
import * as PropTypes from "prop-types";
import Upload, {UploadProps} from "antd/es/upload";
import {RcFile, UploadState} from "antd/es/upload/interface";

import "antd/es/upload/style/index.css";

export interface ArtUploadProps extends UploadProps {
  value?: string | string[];
}

export default class ArtUpload extends React.Component<ArtUploadProps, UploadState> {

  public static contextTypes = {
    onChange: PropTypes.func
  };

  constructor(props: ArtUploadProps) {
    super(props);
  }

  /**
   * 上传之前接口
   * @param {RcFile} file
   * @param {RcFile[]} FileList
   */
  protected beforeUpload(file: RcFile, FileList: RcFile[]) {
    console.log(file, FileList);
  }

  public render(): React.ReactNode {
    return (<Upload {...this.props} beforeUpload={this.beforeUpload.bind(this)}>
      {this.props.children}
    </Upload>)
  }

};
