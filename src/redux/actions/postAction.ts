import { Post, actions, postActions } from "../types/posts";

export const requestPost = ():actions => {
  return { type: postActions.postLoading }
};

export const requestPostSuccess = (posts:Post[]):actions => {
  return { type: postActions.postsSuccess, payload:posts}
};

export const requestPostError = (err: string):actions => {
  return { type: postActions.postDenied,  payload:err}
};
