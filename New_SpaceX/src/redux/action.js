import axios from "axios";
import { GET_REQUEST, GET_SIGNIN_SUCCESS, GET_SIGNUP_SUCCESS, GET_ALL_DATA_SUCCESS, GET_FAILURE } from "./actionType";

const url = `https://spacex-backend.vercel.app/`;
 
export async function loginUser(dispatch, userData, navigate) {
    try {
        dispatch({ type: GET_REQUEST });
        const res = await axios.post(`${url}users/login`, userData);

        if (res && res.data && res.data.token) {
            dispatch({ type: GET_SIGNIN_SUCCESS, payload: res.data.token });
            localStorage.setItem("spacextoken", res.data.token);
            navigate("/capsules");
        } else {
            dispatch({ type: GET_FAILURE, payload: "Invalid response format" });
        }
    } catch (error) {
        dispatch({ type: GET_FAILURE, payload: error.response?.data?.message || "An error occurred" });
    }
}
export async function signUpuser(dispatch, userData, navigate) {
    try {
        dispatch({ type: GET_REQUEST });
        const res = await axios.post(`${url}users/signup`, userData);
        dispatch({ type: GET_SIGNUP_SUCCESS, payload: res.data.token });
        localStorage.setItem("spacextoken", res.data.token);
        navigate('/capsules');
    } catch (error) {
        dispatch({ type: GET_FAILURE, payload: error.response.data.message });
    }
}
