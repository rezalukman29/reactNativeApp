export const FETCH_PLACES = "FETCH_PLACES";
export const FETCH_PLACES_SUCCESS = "FETCH_PLACES_SUCCESS";
export const FETCH_PLACES_FAILED = "FETCH_PLACES_FAILED";

export const FETCH_PLACES_NEARBY = "FETCH_PLACES_NEARBY";
export const FETCH_PLACES_NEARBY_SUCCESS = "FETCH_PLACES_NEARBY_SUCCESS";

export interface FetchPlacesI {
    type: typeof FETCH_PLACES;
    payload: boolean
}

export interface FetchPlacesSuccessI {
    type: typeof FETCH_PLACES_SUCCESS;
    payload: any;
}

export interface FetchPlacesFailedI {
    type: typeof FETCH_PLACES_FAILED;
    payload: any;
}

export interface FetchPlacesNEarbyI {
    type: typeof FETCH_PLACES_NEARBY;
    payload: boolean
}

export interface FetchPlacesNearbySuccessI {
    type: typeof FETCH_PLACES_NEARBY_SUCCESS;
    payload: any
}