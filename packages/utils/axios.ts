import axios from 'axios';

axios.interceptors.response.use((response: any) => {
    if (response.status === 200) {
        if (response.data.returnCode === 0) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response.data);
        }
    } else {
        return Promise.reject('系统错误,请稍后再试');
    }
}, (error) => {
    return Promise.reject(error);
});

export default axios;

