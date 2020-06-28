/// <reference types="react" />
import * as PropTypes from "prop-types";
import BaseComponent from "./../../vst/page/BaseComponent";
import { UploadProps, RcFile, RcCustomRequestOptions } from "./../../comps/upload";
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
    url: string;
    static defaultProps: {
        max: number;
    };
    static contextTypes: {
        value: PropTypes.Requireable<any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        setResetFieldFun: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: UploadComponentProps);
    requestFile(id: string): void;
    componentWillMount(): void;
    private resetField(defaultValue);
    onChange(value: string): void;
    beforeUpload(file: RcFile, fileList: RcFile[]): boolean | PromiseLike<void>;
    customRequest(options: RcCustomRequestOptions): void;
    delete(item: any): void;
    render(): JSX.Element;
}
