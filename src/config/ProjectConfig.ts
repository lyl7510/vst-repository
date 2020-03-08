import IErrorConfig from "../vst/interface/IErrorConfig";

export class ProjectConfig {
    public projectCode = "";
    public basePath = "/api";
    public upload = "/system/upload";
    public getFile = "/system/getFile";
    public getDownload = "/system/download";
    public getImage = "/system/image?id=";
    public errorConfig: IErrorConfig = {};

    public setProjectCode(projectCode: string): void {
        this.projectCode = projectCode;
    }

    public assignError(errorConfig: IErrorConfig): void {
        this.errorConfig = Object.assign(this.errorConfig, errorConfig);
    }
}

const projectConfig = new ProjectConfig();
export default projectConfig;