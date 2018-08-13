// Core
import { takeEvery, all, call } from "redux-saga/effects";

//Types
import { types } from "../types";

// Workers
import { signup, login, logout, authenticate, initialize } from "./workers";

function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}
function* watchLogin () {
    yield takeEvery(types.LOGIN_ASYNC, login);
}
function* watchLogout () {
    yield takeEvery(types.LOGOUT_ASYNC, logout);
}
function* watchAuthenticate () {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}
function* watchInitialize () {
    yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLogin), call(watchLogout), call(watchAuthenticate), call(watchInitialize)]);
}
