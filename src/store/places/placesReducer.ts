import {
    FetchPlacesI,
    FetchPlacesSuccessI,
    FetchPlacesFailedI,
    FETCH_PLACES,
    FETCH_PLACES_SUCCESS,
    FETCH_PLACES_FAILED,
    FETCH_PLACES_NEARBY,
    FetchPlacesNEarbyI,
    FetchPlacesNearbySuccessI,
    FETCH_PLACES_NEARBY_SUCCESS
} from "./placesTypes";

export interface PlacesStateI {
    isLoadingPlaces: boolean;
    placesData: any;
    moreLoading: boolean;
    error: string;
    moreError: string;
    isListEnd: boolean;
    isLoadingNearby: boolean;
    placesNearby: any;

}

const PlacesState: PlacesStateI = {
    isLoadingPlaces: false,
    placesData: {},
    moreLoading: false,
    error: "",
    isListEnd: false,
    moreError: "",
    isLoadingNearby: false,
    placesNearby: []
}

type PlacesAction = FetchPlacesI |
    FetchPlacesSuccessI |
    FetchPlacesFailedI |
    FetchPlacesNEarbyI |
    FetchPlacesNearbySuccessI

const placesReducer = (state = PlacesState, action: PlacesAction) => {
    switch (action.type) {
        case FETCH_PLACES:
            return {
                ...state,
                isLoadingPlaces: true
            };
        case FETCH_PLACES_SUCCESS:
            return {
                ...state,
                isLoadingPlaces: false,
                placesData: action.payload
            }
        case FETCH_PLACES_NEARBY:
            return {
                ...state,
                isLoadingNearby: action.payload
            };
        case FETCH_PLACES_NEARBY_SUCCESS:
            return {
                ...state,
                isLoadingNearby: false,
                placesNearby: action.payload
            }
        default:
            return state;
    }
}

export default placesReducer