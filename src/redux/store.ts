import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import watchRequestPost from "./sagas/postsSaga";

const sagaMiddleware = createSagaMiddleware()
export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
})

sagaMiddleware.run(watchRequestPost)