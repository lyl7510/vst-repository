import * as React from 'react';
import * as PropTypes from "prop-types";
import axios from "axios";
import BaseComponent, {MessageType} from "./../../vst/page/BaseComponent";
import IResult from "./../../vst/interface/IResult";
import Upload,{UploadProps, RcFile, RcCustomRequestOptions} from "./../../comps/upload";
import {Button, Icon} from "./../../comps";
import projectConfig from "./../../config/ProjectConfig";
import regular from "./../../comps/form/regular";
import "./style";


export interface UploadComponentProps extends UploadProps {
    verify?: string;
    max?: number;
    value?: string;
}

export interface UploadComponentState {
    fileList: any[];
}

export default class UploadComponent extends BaseComponent<UploadComponentProps, UploadComponentState> {

    public url: string = projectConfig.upload;

    public static defaultProps = {
        max: 1
    };

    public static contextTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        setResetFieldFun: PropTypes.func
    };

    constructor(props: UploadComponentProps) {
        super(props);
        this.state = {
            fileList: []
        }
    }

    public requestFile(id: string): void {
        if (id) {
            this.requestData(projectConfig.getFile, {ID: id}).then((result: IResult) => {
                if (result.code === 100) {
                    this.setState({
                        fileList: [result.data]
                    })
                }
            });
        } else {
            this.setState({
                fileList: []
            })
        }

    }

    public componentWillMount(): void {
        const {value, setResetFieldFun} = this.context;
        this.requestFile(value);
        if (setResetFieldFun) {
            setResetFieldFun(this.resetField.bind(this));
        }
    }

    private resetField(defaultValue: any): void {
        defaultValue = defaultValue == "" || defaultValue == null ? undefined : defaultValue;
        this.requestFile(defaultValue);
        const {onChange} = this.context;
        onChange && onChange(defaultValue, false);
    }

    public onChange(value: string): void {
        const {onChange} = this.context;
        onChange && onChange(value, true);
    }

    public beforeUpload(file: RcFile, fileList: RcFile[]): boolean | PromiseLike<void> {
        const {verify} = this.props;
        if (fileList.length > this.props.max) {
            super.message("上传文件数量超过了最大数量", MessageType.ERROR);
            return false;
        }
        if (verify) {
            const regExp = regular[verify] as RegExp;
            return regExp.test(file.name);
        }
        return true;
    }

    public customRequest(options: RcCustomRequestOptions): void {
        const forms = new FormData();
        forms.append('file', options.file);
        axios.post(this.url, forms, {
            headers: {'Content-Type': 'multipart/form-data'}
        }).then((result: any) => {
            if (result.code === 100) {
                const fileList = [];
                fileList.push(result.data);
                this.setState({
                    fileList
                });
                this.onChange(result.data.ID);
            }
        });
    }

    public delete(item: any): void {
        let {fileList} = this.state;
        for (let i = 0; i < fileList.length; i++) {
            if (fileList[i] === item) {
                fileList.splice(i, 1);
                break;
            }
        }
        this.onChange(null);
        this.setState({
            fileList
        });
    }

    public render(): JSX.Element {
        const {fileList} = this.state;
        return (
            <React.Fragment>
                <Upload action={this.url} defaultFileList={fileList} beforeUpload={this.beforeUpload.bind(this)}
                        customRequest={this.customRequest.bind(this)} showUploadList={false}>
                    <Button><Icon type="upload"/>点击上传</Button>
                </Upload>
                <div className="ant-upload-list ant-upload-list-text">
                    {
                        fileList.map((item) => {
                            return <div key={item.ID}>
                                <div
                                    className="ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-text">
                                    <div className="ant-upload-list-item-info">
                                        <span>
                                            <Icon className="anticon anticon-paper-clip" type="file"/>
                                            <span
                                                className="ant-upload-list-item-name ant-upload-list-item-name-icon-count-1"
                                                title={item.FILE_NAME}>{item.FILE_NAME}</span>
                                            <span className="ant-upload-list-item-card-actions">
                                                <a title="删除文件" onClick={this.delete.bind(this, item)}>
                                                    <i aria-label="图标: delete" title="删除文件"
                                                       className="anticon anticon-delete">
                                                        <Icon type="delete"/>
                                                    </i>
                                                </a>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </React.Fragment>)
    }

}