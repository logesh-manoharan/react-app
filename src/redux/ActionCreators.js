import * as actionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';


import { baseurl } from '../shared/baseurl';

//here fetchDishes returns the function 
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseurl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
}

export const fetchComments = () => (dispatch) => {
    return fetch(baseurl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
}

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseurl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
}


export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const promosLoading = () => ({
    type: actionTypes.PROMOS_LOADING
})



export const dishesFailed = (errmess) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errmess
})

export const commentsFailed = (errmess) => ({
    type: actionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const promosFailed = (errmess) => ({
    type: actionTypes.PROMOS_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: actionTypes.ADD_DISHES,
    payload: dishes
})

export const addComments = (comments) => ({
    type: actionTypes.ADD_COMMENTS,
    payload: comments
})

export const addPromos = (promos) => ({
    type: actionTypes.ADD_PROMOS,
    payload: promos
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