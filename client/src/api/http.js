import {get, post} from './api'

export const requestIndex = () => {
    return get('/article/list').then((res) => {
         return res.data
    })
}