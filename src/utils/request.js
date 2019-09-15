import axios from "axios"

const request = axios.create({
  // /db.json >  通过 axios > /dev-api/db.json >  通过 代理转发（vue.config.js）》 http://localhost:8001/db.json
  // baseURL: '/dev-api', 
  baseURL: 'http://mengxuegu.com:7300/mock/5d477ccbfacc296cd6834fe5', 
  // baseURL: '/',
  timeout: 5000 // 请求超时，5000毫秒
})

export default request