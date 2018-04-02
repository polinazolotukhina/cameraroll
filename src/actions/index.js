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
