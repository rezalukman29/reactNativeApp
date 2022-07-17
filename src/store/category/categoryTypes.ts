export const FETCH_CATEGORY = "FETCH_CATEGORY";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_FAILED = "FETCH_CATEGORY_FAILED";

export interface FetchCategoryI {
    type: typeof FETCH_CATEGORY;
}

export interface FetchCategorySuccessI {
    type: typeof FETCH_CATEGORY_SUCCESS;
    payload: any;
}

export interface FetchCategoryFailedI {
    type: typeof FETCH_CATEGORY_FAILED;
    payload: any;
}