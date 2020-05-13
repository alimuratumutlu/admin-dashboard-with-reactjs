import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    content_title: ''
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.CONTENT_TITLE:
            return {
                ...state,
                content_title: action.payload
            }
            default:
                return state
    }
}


export default postReducer;