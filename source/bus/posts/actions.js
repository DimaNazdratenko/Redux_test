// Types
import {
    FETCH_POSTS_ASYNC,
    FILL_POSTS,
    CREATE_POST_ASYNC,
    CREATE_POST
} from "./types";

// Instruments
import { api } from "../../REST";

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};

export const createPost = (post) => {
    return {
        type:    CREATE_POST,
        payload: post,
    };
};

export const createPostAsync = (comment) => {
    return {
        type:    CREATE_POST_ASYNC,
        payload: comment,
    };
};
