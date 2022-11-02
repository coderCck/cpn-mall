import axios from "axios";
//*==initAxios==
/**
 * @params_axios初始化
 * @param_baseURL_每次请求的时候在url之前都会带上的路径
 * @param_timeout_超时时间
 * @param_headers_请求头
 */
const initAxios = axios.create({
    baseURL: "/api",
    timeout: 70000,
    headers: {
        contentType: "application/json"
    }
});

initAxios.interceptors.request.use(config => {
    console.log(config);
    return config
});

initAxios.interceptors.response.use(config => {
    console.log(config);
    return config
}, err => {
    console.log(err);
    return err;
});

export default initAxios;