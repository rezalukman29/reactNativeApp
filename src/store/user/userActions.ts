import { ActionCreator, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Dispatch } from "redux";
import GenericService from '../../service/generic';
import { LoginErrorI, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, UPDATE_LOCATION } from './userTypes';

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

export const loginError = (error: any) => {
    return {
        type: LOGIN_ERROR,
        error
    };
};

export const loginRequest = (payload: any) => {
    return {
        type: LOGIN_REQUEST,
        payload
    };
};


export const formLoginRequest = (payload: any) => {
    return async (dispatch: Dispatch) => {
        dispatch(loginRequest(true))
        try {
            const service = new GenericService(`users/email`);
            const result: any = await service.getByParams(payload.email);
            if (result.success) {
                if (result.data.password === payload.password) {
                    dispatch(loginSuccess(result.data))
                    return Promise.resolve(result.success)
                } else {
                    dispatch(loginError({
                        email: "", password: "Wrong password"
                    }))
                }

            } else {
                console.log("ERRROORR")
                dispatch(loginError({
                    email: result.message, password: ""
                }))
            }
            // return Promise.resolve(result)
        } catch (error) {
            console.log(error)
            return Promise.reject(error);
        }
    };
}




