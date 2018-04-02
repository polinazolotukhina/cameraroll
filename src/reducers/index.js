import { combineReducers } from 'redux';
import ImgReducer from './ImgReducer';

export default combineReducers({
    img: ImgReducer
});
