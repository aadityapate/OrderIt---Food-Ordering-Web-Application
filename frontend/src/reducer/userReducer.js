// Reducer for managing authentication related state

import { 
    CLEAR_ERRORS,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST, 
    LOAD_USER_SUCCESS, 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAILURE,
    REGISTER_USER_REQUEST, 
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_FAILURE,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILURE,
    UPDATE_PASSWORD_RESET,
    UPDATE_PROFILE_FAILURE, 
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_SUCCESS
} from "../constants/userConstant";

export const authReducer = (
    state = {
        user: null,
        loading: false,
        isAuthenticated: false,
        data: {},
    },
    action
) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
            };
        
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
            };

        case LOGIN_FAILURE:
        case REGISTER_USER_FAILURE:
        case LOAD_USER_FAILURE:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

        case LOGOUT_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            case UPDATE_PASSWORD_REQUEST:
                return {
                    ...state,
                    loading: true,
                };
        case UPDATE_PROFILE_SUCCESS:
            case UPDATE_PASSWORD_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    isUpdated: action.payload,
                };
        case UPDATE_PROFILE_RESET:
            case UPDATE_PASSWORD_RESET:
                return {
                    ...state,
                    isUpdated: false,
                };
        case UPDATE_PROFILE_FAILURE:
            case UPDATE_PASSWORD_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
            case NEW_PASSWORD_REQUEST:
                return {
                    ...state,
                    loading: true,
                    error: null,
                };
            case NEW_PASSWORD_SUCCESS:
                return {
                    ...state,
                    success: action.payload,
                };
            case FORGOT_PASSWORD_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    message: action.payload,
                };
            case FORGOT_PASSWORD_FAILURE:
                case NEW_PASSWORD_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        error: action.payload,
                    };
                    case CLEAR_ERRORS:
                        return {
                            ...state,
                            error: null,
                        };
    default:
        return state;
    }
};
