import firebase from 'firebase';
const queryString = require('query-string');
import * as types from '../constants/actionTypes';

function saveImg(img) {
    return {
        type: types.IMG_SAVE,
        img
    };
}

export function viewImg(img) {
    return dispatch => {
        dispatch(saveImg(img));
    };
}

function moviesRequest() {
    return {
        type: types.MOVIES_REQUEST,
        isLoading: true,
        error: null
    };
}

function moviesSuccess(json) {
    return {
        type: types.MOVIES_SUCCESS,
        data: json,
        isLoading: false,
        error: null
    };
}

function moviesFailure(json) {
    return {
        type: types.MOVIES_FAILURE,
        isLoading: false,
        error: json
    };
}

//================================    FETCH    =======================================

export function getMovies(params, partUrl) {
    const API_KEY = '79eb5f868743610d9bddd40d274eb15d';
    const parameters = {
        ...params,
        api_key: API_KEY
    };

    const query = queryString.stringify(parameters);
    const url = `https://api.themoviedb.org${partUrl}${query}`;
    console.log(url);
    return dispatch => {
        dispatch(moviesRequest());
        fetch(url)
            .then(response => {
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(moviesSuccess(items)))
            .catch(error => dispatch(moviesFailure(error)));
    };
}

//===============================    SELECT    ========================================
function movieSelc(movie) {
    return {
        type: types.MOVIE_SELECT,
        selectedMovie: movie
    };
}

export function selectMovie(m) {
    return dispatch => {
        dispatch(movieSelc(m));
    };
}

//============================       FAVOURITES       ===============================

export const toggleFavourites = movie => {
    const query = firebase
        .database()
        .ref('movies')
        .orderByKey();
    let count = 0;
    let key;
    return dispatch => {
        query.once('value').then(snapshot => {
            snapshot.forEach(childSnapshot => {
                const childData = childSnapshot.val();
                if (childData.id == movie.id) {
                    count++;
                    key = childSnapshot.key;
                }
            });
            if (count > 0) {
                firebase
                    .database()
                    .ref(`/movies/${key}`)
                    .remove()
                    .then(() => {
                        dispatch({ type: types.MOVIE_REMOVE_FROM_DB });
                    });
            } else {
                firebase
                    .database()
                    .ref('/movies')
                    .push(movie)
                    .then(() => {
                        dispatch({ type: types.MOVIE_SAVE_TO_DB });
                    });
            }
        });
    };
};

export const removeFromFavourites = movieID => {
    console.log('movieID', movieID);
    return dispatch => {
        firebase
            .database()
            .ref(`/movies/${movieID}`)
            .remove()
            .then(() => {
                dispatch({ type: types.MOVIE_REMOVE_FROM_DB });
            });
    };
};
export const favouritesFetch = () => {
    return dispatch => {
        firebase
            .database()
            .ref('movies')
            .on('value', snapshot => {
                dispatch({
                    type: types.FAVOURITES_FETCH,
                    favourites: snapshot.val()
                });
            });
    };
};
