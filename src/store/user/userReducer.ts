import { LoginSuccessI, LOGIN_SUCCESS, UpdateLocationI, UPDATE_LOCATION } from "./userTypes";

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

export interface UserStateI {
    location: LocationPropsI;
    userDetails: UserDetailsI;
    isLogin: boolean;
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
    isLogin: false
}

type UserAction = UpdateLocationI | LoginSuccessI

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
            };

        default:
            return state;
    }
}

export default userReducer