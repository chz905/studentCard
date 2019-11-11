import {
  request
} from "./http.js"

let url = '/safe/list'



export const getOpenid = (data) => request("POST", url, data)