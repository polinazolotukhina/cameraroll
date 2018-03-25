import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';
import ImgReducer from './ImgReducer';

export default combineReducers({
    movies: MoviesReducer,
    img: ImgReducer
});
