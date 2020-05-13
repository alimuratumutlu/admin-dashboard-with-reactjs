import notificationReducer from './notification'
import postReducer from './post'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    notification_reducer: notificationReducer,
    post_reducer: postReducer,
})

export default rootReducer;