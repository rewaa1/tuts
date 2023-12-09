import { ADD_ARTICLE } from "../Constants/action-types";


export const addPost = newPost => {
    return {
        type: ADD_ARTICLE,
        payload: newPost
    }
}