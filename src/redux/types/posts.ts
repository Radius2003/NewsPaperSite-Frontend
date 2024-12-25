export interface Post {
id:number,
ownerId:number,
text:string,
title: string,
image:string,
createdAt:string,
updatedAt:string,
owner: Owner,
tags: Tag[],
}

export interface Owner {
  id: number,
  name: string,
  email: string,
  avatar?: string,
}

export interface Tag {
  id:number,
  tagTitle:string,
}


export enum postActions{
postsSuccess = "POST_SUCCESS",
postDenied = "POST_DENIED",
postLoading = "POST_LOADING"
}
export interface ActionTypes{
  postList:[],
  error:null|string,
  isLoading: boolean,
}
interface PostSuccess{
 type: postActions.postsSuccess
 payload:Post[]
}
interface PostDenied{
  type: postActions.postDenied
  payload:null|string,
}
interface PostLoading{
  type: postActions.postLoading
}
export type actions = PostSuccess | PostDenied | PostLoading