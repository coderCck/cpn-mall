import axios from "axios";

//initAxios  axios  初始化
//baseURL 每次请求的时候在url之前带上的路径
//timeout 超时时间
const initAxios = axios.creat({
    baseURL:"/api",
    timeout:70000,
    header:{

    }
})

initAxios.interceptors.request.use(config =>{
    console.log(config);
    return config
})

initAxios.interceptors.respones.use(config =>{
    console.log(config);
    return config
}),err =>{
    console.log(err);
    return err;
}

export default initAxios;