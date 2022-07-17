import { Dispatch } from 'redux';
import GenericService from '../../service/generic';
import { FETCH_CATEGORY, FETCH_CATEGORY_FAILED, FETCH_CATEGORY_SUCCESS } from './categoryTypes';

export const fetchCategory = () => {
    return {
        type: FETCH_CATEGORY,
    };
};

export const fetchCategorySuccess = (payload: any) => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload
    };
};

export const fetchCategoryFailed = (payload: any) => {
    return {
        type: FETCH_CATEGORY_FAILED,
        payload
    };
};

export const formFetchCategory = () => {
    return async (dispatch: Dispatch) => {
        try {
            const service = new GenericService(`category`);
            const result = await service.get();
            dispatch(fetchCategorySuccess(result.data))
            return Promise.resolve(result.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error);
        }
    };
}