import { Action } from "../../../assets/svg";
import { LoginErrorI, LoginRequestI, LoginSuccessI, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, UpdateLocationI, UPDATE_LOCATION } from "./userTypes";

interface LocationPropsI {
    latitude: any;
    longitude: any;
    city: string;
    state: string;
    country: string;
}

export interface UserDetailsI {
    id: string;
    name: string;
    username: string;
    email: string;
    avatar: string;
    latitude: any;
    longitude: any;
    interest: any;
}

export interface errorLoginI {
    email: string,
    password: string
}

export interface UserStateI {
    location: LocationPropsI;
    userDetails: UserDetailsI;
    isLogin: boolean;
    errorLogin: errorLoginI;
    isLoading: boolean;
}

const UserState: UserStateI = {
    location: {
        latitude: null,
        longitude: null,
        city: "",
        state: "",
        country: ""
    },
    userDetails: {
        id: "",
        name: "",
        username: "",
        email: "",
        avatar: "",
        latitude: null,
        longitude: null,
        interest: "",
    },
    isLogin: false,
    errorLogin: {
        email: "",
        password: ""
    },
    isLoading: false,
}

type UserAction = UpdateLocationI | LoginSuccessI | LoginErrorI | LoginRequestI

const userReducer = (state = UserState, action: UserAction) => {
    switch (action.type) {
        case UPDATE_LOCATION:
            return {
                ...state,
                location: {
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude,
                    city: action.payload.city,
                    state: action.payload.state,
                    country: action.payload.country
                }
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                userDetails: {
                    id: action.payload.id,
                    name: action.payload.name,
                    username: action.payload.username,
                    email: action.payload.email,
                    avatar: action.payload.avatar,
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude,
                    interest: action.payload.interest,
                },
                isLogin: true,
                isLoading: false,
                errorLogin: {
                    email: "",
                    password: ""
                }
            };

        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: action.payload
            };

        case LOGIN_ERROR:
            console.log("REDUCER :", action.error)
            return {
                ...state,
                errorLogin: {
                    email: action.error.email,
                    password: action.error.password,
                },
                isLogin: false,
                isLoading: false
            };

        default:
            return state;
    }
}

export default userReducer