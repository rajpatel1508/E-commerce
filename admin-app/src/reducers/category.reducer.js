import { categoryConstants } from "../actions/constants";

const initState = {
    loading: false,
    categories: [],
    error: null
};

const buildNewCategories = (parentId, categories, category) => {
    let mycategories = [];

    if (parentId == undefined) {
        return [
            ...categories,
            {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                children: []
            }
        ];
    }
    // console.log(categories);
    for (let cat of categories) {
        
        if (cat._id == parentId) {
            const newCategory = {
                _id: category.id,
                name: category.name,
                slug: category.slug,
                parentId: category.parentId,
                children: []
            }
            mycategories.push({
                ...cat,
                children: cat.children.length > 0 ? [...cat.children, newCategory] : [newCategory] 
            })
        } else {
            mycategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
            })
        }

    }
    return mycategories;
}

export default (state = initState, action) => {
    // console.log(action.payload.categories)
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
            const updatedCategories = buildNewCategories(action.payload.categories.parentId, state.categories, action.payload.categories);
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