import { UpdateLocationI, UPDATE_LOCATION } from "./userTypes";

interface LocationPropsI {
    latitude: any;
    longitude: any;
    city: string;
    state: string;
    country: string;
}

export interface UserDetailsI {
    name: string;
    username: string;
    email: string;
    avatar: string;
    latitude: any;
    longitude: any;
    preference: any;
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
        name: "",
        username: "",
        email: "",
        avatar: "",
        latitude: "",
        longitude: "",
        preference: "",
    },
    isLogin: false
}

type UserAction = UpdateLocationI 

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
 
                default:
                    return state;
    }
}

export default userReducer