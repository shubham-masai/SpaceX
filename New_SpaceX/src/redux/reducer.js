import { GET_REQUEST, GET_SIGNIN_SUCCESS, GET_SIGNUP_SUCCESS, GET_ALL_DATA_SUCCESS, GET_FAILURE } from "./actionType";

const initialState = {
  isAuth: false,
  token: null,
  isLoading: false,
  isError: false,
  spacexData: [],
  errorMessage: null
};

export function reducer(state = initialState, { type, payload }) {

  if (type === GET_REQUEST) {
    return { ...state, isLoading: true, isError: false };
  }

  if (type === GET_FAILURE) {
    return { ...state, isError: true, isLoading: false, errorMessage: payload };
  }

  if (type === GET_SIGNIN_SUCCESS) {
    return { ...state, token: payload, isAuth: true, isError: false, isLoading: false };
  }

  if (type === GET_SIGNUP_SUCCESS) {
    return { ...state, token: payload, isAuth: true, isError: false, isLoading: false };
  }

  if (type === GET_ALL_DATA_SUCCESS) {
    return { ...state, spacexData: payload, isError: false, isLoading: false }
  }

  if (type === 'SET_PAGE') {
    return { ...state, currentPage: payload };
  }
  return state;
}
