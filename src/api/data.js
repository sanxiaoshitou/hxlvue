import http from './public.js'

//极客文章
export const yiBaiList = (params) => {
    return http.fetchGet('/yibao/list', params)
}

export const yiBaiDetails = (params) => {
    return http.fetchGet('/yibao/details', params)
}
//web早报
export const caiBaoList = (params) => {
    return http.fetchGet('/caibao/list', params)
}

export const caiBaoDetails = (params) => {
    return http.fetchGet('/caibao/details', params)
}
export const test = (params) =>{


    return http.fetchPost("/yibao/testPost",params);
}


