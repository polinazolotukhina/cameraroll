import { combineReducers } from 'redux';
import ImgReducer from './imgReducer';

export default combineReducers({
    img: ImgReducer
});
