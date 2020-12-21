import * as actionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';


import { baseurl } from '../shared/baseurl';

//here fetchDishes returns the function 
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseurl + 'dishes')
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error '+response.status+':'+response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const fetchComments = () => (dispatch) => {
    return fetch(baseurl + 'comments')
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error '+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)))
}

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseurl + 'promotions')
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error '+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)))
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

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    //getting the content to update to the comment
    return fetch(baseurl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error'+response.status+': '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {console.log("Post Comments: "+error.message); 
                    alert("Your comment could not be posted\nError: "+error.message)});

}