import { SHOW_LOADER } from './types';

export const showLoader = async (dispatch) => {
    dispatch({
        type: SHOW_LOADER
    })
}