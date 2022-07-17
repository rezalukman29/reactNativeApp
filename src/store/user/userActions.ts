import { ActionCreator, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Dispatch } from "redux";
import GenericService from '../../service/generic';
import { UPDATE_LOCATION } from './userTypes';

export const UpdateLocation = (payload: any) => {
    return {
        type: UPDATE_LOCATION,
        payload
    };
};

// export const formUpdateLocation = () => {
//     return async (dispatch: Dispatch) => {
//         try {
//             const service = new GenericService(`places`);
//             const result = await service.get();
//             dispatch(fetchPlacesSuccess(result))
//             return Promise.resolve(result)
//         } catch (error) {
//             console.log(error)
//             return Promise.reject(error);
//         }
//     };
// }




