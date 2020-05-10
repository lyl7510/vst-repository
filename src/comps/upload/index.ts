import Upload, {UploadProps, RcFile} from "antd/es/upload";
import {RcCustomRequestOptions} from "antd/es/upload/interface";
import "antd/es/upload/style";
import {match} from "react-router-dom";
interface UploadComponentProps extends UploadProps{
    match?: match<any>
}
export {UploadComponentProps as UploadProps, RcFile, RcCustomRequestOptions};
export default Upload;