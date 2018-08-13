// Core
import { fromJS, List } from "immutable";

// Instruments
import { types } from "./types";

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_POSTS:
            return fromJS(action.payload);

        case types.CREATE_POST:
            return state.unshift(fromJS(action.payload));

        // case types.REMOVE_POST:
        //     console.log('~~~~~~~~ state: ', state);
        //
        //     return state.filter((post) => {
        //         console.log('~~~~~~~~ post: ', post._root.entries[0][1]);
        //         // console.log('~~~~~~~~ post.id: ', post.id);
        //         console.log('~~~~~~~~ action.payload: ', action.payload);
        //         console.log('~~~~~~~~ post.id != action.payload: ', post._root.entries[0][1] != action.payload);
        //
        //         return post._root.entries[0][1] != action.payload
        //     });

        case types.CLEAR_POSTS:
            return state.clear();

        default:
            return state;
    }
};
