// import { combineReducers } from "redux"
// import { ActionTypes, actions, postActions } from "./redux/types/posts"
// const initialState:ActionTypes ={
// postList:[],
// error:null,
// isLoading: false
// }

// const reducer = (state = initialState, action: actions) => {
//   switch (action.type) {
//     case postActions.postsSuccess:
//       return {
//         postList: action.payload,
//         error: null,
//         isLoading: false
//       }
//     case postActions.postDenied:
//       return {
//         postList: [],
//         error: action.payload,
//         isLoading: false
//       }
//     case postActions.postLoading:
//       return {
//         postList: [],
//         error: null,
//         isLoading: true
//       }
//     default:
//       return state
//   }
// }
//  export const rootReducer = combineReducers({
//   posts:reducer
// })

// const requestPost = () => {
//   return { type: 'POST_LOADING' }
// };

// const requestPostSuccess = (data) => {
//   return { type: 'POST_SUCCESS', postList: data.massage, }
// };

// const requestPostError = () => {
//   return { type: "POST_DENIED",
// }
// };


// const fetchPost = (dispatch) => {
//   dispatch(requestPost());
//   return fetch('http://localhost:3000')
//     .then(res => res.json())
//     .then(
//       data => dispatch(requestPostSuccess(data)),
//       error => dispatch(requestPostError())
//     );
// };
// export const store = configureStore(rootReducer)