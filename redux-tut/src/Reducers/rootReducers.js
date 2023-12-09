import { ADD_ARTICLE } from "../Constants/action-types"



const initialState = {
    posts:[
        {
            id: 1,
            title: ' post ',
            content: 'content'
        }

    ]
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ARTICLE:
            return{
                post: [ ...state.posts, action.payload]
            }
            default:
                return state
    }

}
export default rootReducer;