interface Ierror {
    [name: string]: string;
}

class ProjectConfig {
    private projectCode: string;
    private errorConfig: Ierror = {

    };

    public setProjectCode(projectCode: string): void {
        this.projectCode = projectCode;
    }

    public getProjectCode(): string {
        return this.projectCode;
    }

    public assignError(errorConfig: Ierror): void {
        this.errorConfig = Object.assign(this.errorConfig, errorConfig);
    }

    public getErrorConfig(): Ierror {
        return this.errorConfig;
    }

    public getBasePath(): string {
        return "/api";
    }

    public getUpload(): string {
        return this.getBasePath() + "/system/upload";
    }

    public getFile(): string {
        return "/system/getFile";
    }

    public getDownload(): string {
        return this.getBasePath() + "/system/download";
    }

    public getImage(): string {
        return this.getBasePath() + "/system/image?id=";
    }

}

const projectConfig = new ProjectConfig();

export default projectConfig