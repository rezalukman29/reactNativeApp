export const UPDATE_LOCATION = "UPDATE_LOCATION";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR;"


export interface UpdateLocationI {
    type: typeof UPDATE_LOCATION;
    payload: any
}

export interface LoginRequestI {
    type: typeof LOGIN_REQUEST;
    payload: any
}

export interface LoginSuccessI {
    type: typeof LOGIN_SUCCESS;
    payload: any
}

export interface LoginErrorI {
    type: typeof LOGIN_ERROR;
    payload: any
}

