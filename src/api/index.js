import initAxios from "../utils/request";

const request = (reqType = "get", url, parmas) => {
    //*拆
    const config = {
        method: reqType,
        url: url,
        data: parmas
    }
    //*合
    //*==加工config的method，转换大小写，助于使用==
    // config.method = config.method.toLowerCase();

    //*==加工config的url，补充"/"
    // config.url[0] !== "/" ? config.url[0] += "/" : null;
    // config.url[0] !== "/" && (config.url[0] += "/");
    for(let i in config) {
        if(i === "method") {
            config[i] = config[i].toLowerCase();
        }
        if(i === "url") {
            let parmasUrl = config[i];
            if(parmasUrl[0] !== "/") {
                parmasUrl += "/"
            }
        }
    }

    return new Promise((resolve, reject) => {
        initAxios(config).then(res => {
            //*...
            //* eg: 加载loading(成功)
            resolve(res);
        }).catch(err => {
            //!...
            //* eg: 加载loading(失败)
            reject(err);
        })
    })
    
}


//?   /api/standingbook/list

saveMenu({
    ...params
}).then(() => {
    this.$message.success("新增成功!");
})

export function saveMenu(params) {
    // axios.get("www.baidu.com", params)
    // axios.post("www.baidu.com", params)
    // axios.put("www.baidu.com", params)
    // axios.delete("www.baidu.com", params)

    request("get", "standingbook/list", params)
}
// export saveMenu("getList") {
//     request("getList")
// }