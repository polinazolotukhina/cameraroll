import {
    MOVIES_REQUEST,
    MOVIES_SUCCESS,
    MOVIES_FAILURE,
    MOVIE_SELECT,
    FAVOURITES_FETCH,
} from '../constants/actionTypes';
import initialState from './initialState';

function toggle(item, newItem) {
    if (item == newItem) {
        return '';
    }
        return newItem;
}

export default function moviesReducer(state = initialState.movies, action) {
    switch (action.type) {
        case MOVIES_REQUEST:
            return {
              ...state,
              isLoading: true,
              error: null
          };

        case MOVIES_SUCCESS:
            return {
              isLoading: false,
              error: null,
              data: action.data,
          };

        case MOVIES_FAILURE:
            return {
              ...state,
              isLoading: false,
              error: action.data,
          };
        case MOVIE_SELECT:
            return {
            ...state,
            selectedMovie: toggle(state.selectedMovie, action.selectedMovie)
        };
        case FAVOURITES_FETCH:
            return {
                ...state,
                favourites: action.favourites
            };
        default:
            return state;
    }
}
