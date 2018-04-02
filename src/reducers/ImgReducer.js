import { IMG_SAVE } from '../constants/actionTypes';
import initialState from './initialState';

export default function ImgReducer(state = initialState.img, action) {
    switch (action.type) {
        case IMG_SAVE:
            return {
                ...state,
                img: action.img
            };

        default:
            return state;
    }
}
