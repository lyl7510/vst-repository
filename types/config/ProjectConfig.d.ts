import IErrorConfig from "../vst/interface/IErrorConfig";
export declare class ProjectConfig {
    projectCode: string;
    basePath: string;
    upload: string;
    editorUpload: string;
    getFile: string;
    getDownload: string;
    getImage: string;
    errorConfig: IErrorConfig;
    setProjectCode(projectCode: string): void;
    assignError(errorConfig: IErrorConfig): void;
}
declare const projectConfig: ProjectConfig;
export default projectConfig;
