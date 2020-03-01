import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import auth from 'reducers/auth';

export default combineReducers({
    comments:commentsReducer,
    auth:auth
})