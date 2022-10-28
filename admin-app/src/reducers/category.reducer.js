import { categoryConstants } from "../actions/constants";

const initState = {
    loading: false,
    categories: [],
    error: null
};

const buildNewCategories = (parentId, categories, category) => {
    let mycategories = [];
    for (let cat of categories) {
        if (cat._id == parentId) {
            mycategories.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, [...cat.children, {
                    _id: category.id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children
                }], category) : []
            })
        } else {
            mycategories.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, cat.children, category) : []
            })
        }

    }
    return mycategories;
}

export default (state = initState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            const updatedCategories = buildNewCategories(action.payload.category.parentId, state.categories, action.payload.category);
            state = {
                ...state,
                categories: updatedCategories,
                loading: false
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initState,
            }
            break;
    }
    return state;
}