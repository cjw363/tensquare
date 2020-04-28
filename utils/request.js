import axios from 'axios'
// 创建axios实例
const service = axios.create({
    baseURL: ' http://192.168.209.128:7300/mock/5ea427d3155cd33e00ae64ef', // api的base_url
    timeout: 30000 // 请求超时时间
  })
export default service
