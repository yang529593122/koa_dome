import {get, post} from './api'

export const requestIndex = (data) => {
    return get('/article/list',data).then((res) => {
         return res.data
    })
}