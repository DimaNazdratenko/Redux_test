// Core
import { combineReducers } from "redux";

// Reducers
import { authReducer as auth } from "../bus/auth/reducer";
import { uiReducer as ui } from "../bus/ui/reducer";
import { postsReducer as posts } from "../bus/posts/reducer";

export const rootReducer = combineReducers({
    auth,
    ui,
    posts,
});
