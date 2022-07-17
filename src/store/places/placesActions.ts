import { ActionCreator, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Dispatch } from "redux";
import GenericService from '../../service/generic';
import { FETCH_PLACES, FETCH_PLACES_SUCCESS, FETCH_PLACES_FAILED, FETCH_PLACES_NEARBY, FETCH_PLACES_NEARBY_SUCCESS } from './placesTypes';

export const fetchPlaces = (payload: boolean) => {
    return {
        type: FETCH_PLACES,
        payload
    };
};

export const fetchPlacesSuccess = (payload: any) => {
    return {
        type: FETCH_PLACES_SUCCESS,
        payload
    };
};

export const fetchPlacesFailed = (payload: any) => {
    return {
        type: FETCH_PLACES_FAILED,
        payload
    };
};

export const formFetchPlaces = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchPlaces(true))
        try {
            const service = new GenericService(`places`);
            const result = await service.get();
            dispatch(fetchPlacesSuccess(result))
            return Promise.resolve(result)
        } catch (error) {
            console.log(error)
            return Promise.reject(error);
        }
    };
}

export const fetchPlacesNearby = (payload: boolean) => {
    return {
        type: FETCH_PLACES_NEARBY,
        payload
    };
};

export const fetchPlacesNearbySuccess = (payload: any) => {
    return {
        type: FETCH_PLACES_NEARBY_SUCCESS,
        payload
    };
};

export const formFetchPlacesNearby = (latitude: any, longitude: any) => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchPlacesNearby(true))
        try {
            const service = new GenericService(`places/nearby`);
            const result = await service.getResouceNearbyResource(latitude, longitude);
            dispatch(fetchPlacesNearbySuccess(result.data))
            return Promise.resolve(result.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error);
        }
    };
}

// export const formFetchPlaces = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
//     // Invoke API
//     return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
//         return new Promise<void>(async (resolve) => {
//             dispatch(fetchPlaces(true))
//             try {
//                 const service = new GenericService(`places`);
//                 const result = await service.get();
//                 dispatch(fetchPlacesSuccess(result))
//                 return Promise.resolve(result)
//             } catch (error) {
//                 console.log(error)
//                 return Promise.reject(error);
//             }

//         })
//     }
// }

// export const formFetchPlaces = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
//     return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
//         return new Promise<void>(async () => {
//             dispatch(fetchPlaces(true))
//             try {
//                 const service = new GenericService(`places`);
//                 const result = await service.get();
//                 dispatch(fetchPlacesSuccess(result.data))
//                 return Promise.resolve(result.data)
//             } catch (error) {
//                 console.log(error)
//                 return Promise.reject(error);
//             }
//         });
//     };
// };
