export function request(config) {

  const instance = axios.create({
    baseURL: 'http://47.92.39.166:3000/'
  })

  //请求
  instance.interceptors.request.use(config => {
    return config//这里返回出去  不然拦截下来了你不放 后面的就没了
  }, err => {
    return err
  })
  //拦截响应
  instance.interceptors.response.use(config => {
    return config.data///这里返回出去  不然拦截下来了你不放 后面的就没了
  }, err => {
    console.log(err)
    return err
  });


  return instance(config)
}