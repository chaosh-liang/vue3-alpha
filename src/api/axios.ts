import Axios, { AxiosResponse } from 'axios'
import { AuthorType, ResponseDataType, ResponseType } from '@/utils/mytype'

const inst = Axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
})

inst.interceptors.response.use(
  // use(onFulfilled?: (value: V) => V | Promise<V>, onRejected?: (error: any) => any): number;
  function(result: AxiosResponse): AxiosResponse<ResponseType> {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return result
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default inst
