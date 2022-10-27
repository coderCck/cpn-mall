import initAxios from '../utils/request';

const request = (reqType = "get",url,parmas) =>{
    const config ={
        methods: reqType,
        url:url,
        data:parmas,
    }
    config.method = config.method.toLowerCase();
    config.url[0] !== "/" ? config.url[0] += "/" : null;
    //config.url[0] !=="/" &&(config.url[0] += "/")
    
    return new Promise((resolve,reject) =>{
        initAxios(config).then(res =>{
            resolve(res);
        }).catch(err =>{
            reject(err);
        })
    })
    
};

// export request("getList") {
//     http:('getList')
// }; 