import { ActionTypes, actions, postActions } from "../types/posts"

const initialState:ActionTypes ={
postList:[],
error:null,
isLoading: false
}

const reducer = (state = initialState, action: actions) => {
  switch (action.type) {
    case postActions.postsSuccess:
      return {
        postList: action.payload,
        error: null,
        isLoading: false
      }
    case postActions.postDenied:
      return {
        postList: [],
        error: action.payload,
        isLoading: false
      }
    case postActions.postLoading:
      return {
        postList: [],
        error: null,
        isLoading: true
      }
    default:
      return state
  }
}
export default reducer