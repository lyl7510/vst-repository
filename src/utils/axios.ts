import axios from 'axios';
import projectConfig from "../config/ProjectConfig";

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

axios.interceptors.response.use((response: any) => {
    if (response.status === 200) {
        if (response.data.code === 100 || !projectConfig.getErrorConfig()[response.data.code]) {
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response.data.code);
        }
    } else {
        return Promise.reject('系统错误,请稍后再试')
    }
}, (error) => {
    return Promise.reject(error)
})

export default axios;

