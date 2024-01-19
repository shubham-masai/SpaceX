import axios from "axios";
import {
  GET_FAILURE,
  GET_REQUEST,
  GET_SIGNIN_SUCCESS,
  GET_SIGNUP_SUCCESS,
  GET_ALL_DATA_SUCCESS
} from "./actionTypes";

const url = `https://spacex-backend.vercel.app/`;
export async function signInUser(dispatch, userData) {
  try {
    dispatch({ type: GET_REQUEST });
    const res = await axios.post(`${url}users/login`, userData);

    localStorage.setItem("spacextoken", res.data.token);
    dispatch({ type: GET_SIGNIN_SUCCESS, payload: res.data.token });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: GET_FAILURE, payload: error.response.data.message });
  }
}


export async function signUpuser(dispatch, userData) {
  try {
    dispatch({ type: GET_REQUEST });
    const res = await axios.post(`${url}users/signup`, userData);
    dispatch({ type: GET_SIGNUP_SUCCESS, payload: res.data.token });
    localStorage.setItem("spacextoken", res.data.token);
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_FAILURE, payload: error.response.data.message });
  }
}

export async function getAllData(dispatch) {
  try {
    dispatch({ type: GET_REQUEST });
    const res = await axios.get("https://api.spacexdata.com/v3/capsules");
    console.log(res.data);
    dispatch({ type: GET_ALL_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_FAILURE, payload: error.response.data.message });
  }
}