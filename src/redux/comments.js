import {COMMENTS} from '../shared/comments';
import * as actionTypes from './ActionTypes';
export const Comments = (state={errMess: null, comments: []}, action) => {
    switch(action.type) {
        case actionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload}

        case actionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload}
            
        case actionTypes.ADD_COMMENT:
            var comment =  action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log(comment);
            return state.concat(comment);
        default:
            return state;
    }
};