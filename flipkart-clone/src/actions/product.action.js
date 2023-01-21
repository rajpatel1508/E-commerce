import axiosInstance from "../helpers/axios"
import { productConstants } from "./constants"

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axiosInstance.get(`/products/${slug}`)
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            })
        }
    }
}

export const getProductPage = (payload) => {
    return async dispatch => {
        const { cid, type } = payload.params;
        const res = await axiosInstance.get(`/page/${cid}/${type}`);
        dispatch({ type: productConstants.GET_PRODUCTS_PAGE_REQUEST });
        if (res.status === 200) {
            const { page } = res.data;
            dispatch({
                type: productConstants.GET_PRODUCTS_PAGE_SUCCESS,
                payload: { page }
            });
        } else {
            const { error } = res.data;
            dispatch({
                type: productConstants.GET_PRODUCTS_PAGE_FAILURE,
                payload: { error }
            });
        }
    }
}

export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
        try {
            const { productId } = payload.params;
            
            const res = await axiosInstance.get(`/product/${productId}`);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });

        } catch (error) {
            console.log("getProductDetailsById")
            console.log(error)
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error }
            });
        }
    }
}