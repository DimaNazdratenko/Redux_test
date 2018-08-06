// Core
import { takeEvery, all, call } from "redux-saga/effects";

//Types
import { types } from "../types";

// Workers
import { createPost, fillPosts } from "./workers";

function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

function* watchFillPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fillPosts);
}

export function* watchPosts () {
    yield all([call(watchCreatePost), call(watchFillPosts)]);
}
