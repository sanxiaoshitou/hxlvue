import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 10000
// axios.defaults.baseURL = 'http://hxl2hzl.com:5000'
axios.defaults.baseURL = 'http://localhost:5000'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export default {
    fetchGet(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                params: {
                    params
                }
            }).then((res) => {          //这里使用了ES6的语法
                resolve(res.data)
            }).catch((error) => {
                console.log(error)       //请求失败返回的数据
                reject(error)
            })
        });
    },
    fetchPost(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'Post',
                url: url,
                header:{
                    'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
                },
                params: {
                    params
                }
            }).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        });
    }
}


