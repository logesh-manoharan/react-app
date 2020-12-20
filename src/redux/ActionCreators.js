import * as actionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';

//here fetchDishes returns the function 
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {dispatch(addDishes(DISHES));}, 2000);
}

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: actionTypes.ADD_DISHES,
    payload: dishes
})


export const addComment = (dishId, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})