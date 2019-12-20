interface Ierror {
    [name: string]: string;
}

class ProjectConfig {
    private projectCode: string;
    private errorConfig: Ierror = {
        "151": "找不到登录项目",
        "152": "项目已停用",
        "153": "登录用户不能为空",
        "154": "找不到登录用户",
        "155": "登录账户已被删除",
        "156": "登录用户已停用",
        "157": "密码不能为空",
        "158": "密码错误",
        "159": "验证码不能为空",
        "160": "验证码错误",

        "301": "请删除项目下人员后再删除项目",
        "302": "项目标示已经存在",
        "303": "请删除角色下人员后再删除角色",
        "304": "用户名已经存在，请重新输入",
        "305": "字典值已经存在",
        "306": "请先删除部门下人员",
        "400": "找不到相应的请求",
        "500": "请先删除店铺下书籍后再删除店铺"
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