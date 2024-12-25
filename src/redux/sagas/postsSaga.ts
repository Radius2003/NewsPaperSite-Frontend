import { call, put, takeLatest } from "redux-saga/effects";
import { Post, postActions } from "../types/posts";
import { requestPostError, requestPostSuccess } from "../actions/postAction";
import { getAll } from "../../api/posts";
import { AxiosError, AxiosResponse } from "axios";

function* fetchPostAsync(){
  try {
    const posts: AxiosResponse<Post[]> = yield call(getAll);
    yield put(requestPostSuccess(posts.data));
 } catch(error) {
    yield put(requestPostError((error as AxiosError).message));
 }
}
function* watchRequestPost(){
 yield takeLatest(postActions.postLoading, fetchPostAsync)
}
export default watchRequestPost