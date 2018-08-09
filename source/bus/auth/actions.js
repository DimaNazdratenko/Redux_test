// Types
import { types } from "./types";

export const authAction = {
    // Sync
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },

    // Async
    signupAsync: (userData) => {
        return {
            type:    types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
};
