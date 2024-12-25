import { Post } from "../redux/types/posts"
import instance from "./axios"

export const getAll = () => {
  return instance.get<Post[]>('/posts')
}
