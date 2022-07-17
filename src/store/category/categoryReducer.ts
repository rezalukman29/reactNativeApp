import { FetchCategoryFailedI, FetchCategoryI, FetchCategorySuccessI, FETCH_CATEGORY, FETCH_CATEGORY_SUCCESS } from "./categoryTypes";

export interface CategoryStateI {
    isLoadingCategory: boolean;
    category: Array<any>;
}

const CategoryState: CategoryStateI = {
    isLoadingCategory: false,
    category: []
}

type CategoryAction = FetchCategoryI |
FetchCategorySuccessI |
FetchCategoryFailedI ;

const categoryReducer = (state = CategoryState, action: CategoryAction) => {
    switch (action.type) {
        case FETCH_CATEGORY:
            return {
                ...state,
                isLoadingCategory: true
            };
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                isLoadingCategory: false,
                category: action.payload
            }
                default:
                    return state;
    }
}

export default categoryReducer