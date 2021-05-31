import {get, post} from './api'

export const requestIndex = (data) => {
    return get('/article/list',data).then((res) => {
         return res.data
    })
}
export const login = (data) => {
    return post('/user/login',data).then((res) => {
        return res.data
    })
}