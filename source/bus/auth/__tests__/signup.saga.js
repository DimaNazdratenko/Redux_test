// Core
import { put, apply } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";

// Instruments
import { api } from "../../../REST";
import { authActions } from "../../auth/actions";
import { uiActions } from "../../ui/actions";
import { signup } from "../saga/workers";

const signupAction = authActions.signupAsync(__.userProfile);

const saga = cloneableGenerator(signup)(signupAction);
let clone = null;
