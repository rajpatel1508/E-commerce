import { authConstants } from "../actions/constants"

const initstate = {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
    authenticate: localStorage.getItem('token') ? true : false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
}

export default (state = initstate, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initstate
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...initstate,
                error: action.payload.error,
                loading: false
            }
            break;
        case authConstants.SIGNUP_REQUEST:
            break;
        case authConstants.SIGNUP_SUCCESS:
            break;
        case authConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
            };
            break;
    }
    return state;
}