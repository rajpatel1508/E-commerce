import { cartConstants, userConstants } from "./constants";
import axiosIntance from "../helpers/axios";

export const getAddress = () => {
    return async (dispatch) => {
        try {
            const res = await axiosIntance.post(`/user/getaddress`);
            dispatch({ type: userConstants.GET_USER_ADDRESS_REQUEST });
            if (res.status === 200) {
                const {
                    userAddress: { address },
                } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_SUCCESS,
                    payload: { address },
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log("getaddress")
            console.log(error);
        }
    };
};

export const addAddress = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axiosIntance.post(`/user/address/create`, { payload });
            dispatch({ type: userConstants.ADD_USER_ADDRESS_REQUEST });
            if (res.status === 201) {
                const {
                    address: { address },
                } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ADDRESS_SUCCESS,
                    payload: { address },
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ADDRESS_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log("getaddress")
            console.log(error);
        }
    };
};

export const addOrder = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axiosIntance.post(`/addOrder`, payload);
            dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST });
            if (res.status === 201) {
                const { order } = res.data;
                dispatch({
                    type: cartConstants.RESET_CART,
                });
                dispatch({
                    type: userConstants.ADD_USER_ORDER_SUCCESS,
                    payload: { order },
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ORDER_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log("addorder")
            console.log(error);
        }
    };
};

export const getOrders = () => {
    return async (dispatch) => {
        try {
            const res = await axiosIntance.get(`/getOrders`);
            dispatch({ type: userConstants.GET_USER_ORDER_REQUEST });
            if (res.status === 200) {
                const { orders } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_SUCCESS,
                    payload: { orders },
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log("getorders")
            console.log(error);
        }
    };
};

// single order with complete info and delivery location
export const getOrder = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axiosIntance.post(`/getOrder`, payload);
            dispatch({ type: userConstants.GET_USER_ORDER_DETAILS_REQUEST });
            if (res.status === 200) {
                const { order } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_DETAILS_SUCCESS,
                    payload: { order },
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_DETAILS_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log("getorder")
            console.log(error);
        }
    };
};