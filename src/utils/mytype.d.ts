import { AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig } from 'axios'

export interface AuthorType {
  loginname: string
  avatar_url: string
}

declare const cho: string

export interface ResponseDataType {
  author: AuthorType
  author_id: string
  content: string
  create_at: string
  good: boolean
  id: string
  last_reply_at: string
  reply_count: number
  tab: string
  title: string
  top: boolean
  visit_count: number
}

export interface ResponseType {
  success: boolean
  data: Array<ResponseDataType>
}
