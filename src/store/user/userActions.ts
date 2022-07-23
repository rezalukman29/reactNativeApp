import { ActionCreator, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Dispatch } from "redux";
import GenericService from '../../service/generic';
import { LOGIN_REQUEST, LOGIN_SUCCESS, UPDATE_LOCATION } from './userTypes';

export const UpdateLocation = (payload: any) => {
    return {
        type: UPDATE_LOCATION,
        payload
    };
};

export const loginSuccess = (payload: any) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
};

export const formLoginRequest = (payload: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const service = new GenericService(`users/email`);
            const result = await service.getByParams(payload.email);
            return Promise.resolve(result)
        } catch (error) {
            console.log(error)
            return Promise.reject(error);
        }
    };
}




