import {
  FACE_MATCH_REQUEST,
  FACE_MATCH_SUCCESS,
  FACE_MATCH_FAIL,
  STORE_VERIFIED_DATA_REQUEST,
  STORE_VERIFIED_DATA_SUCCESS,
  STORE_VERIFIED_DATA_FAIL,
  ADD_LISTING,
  RETRIEVE_LISTING_BY_LANDLORD,
} from "../constants/post.constants";
import { useState } from "react";
import axios from "axios";

import { SET_MESSAGE, SET_DATA } from "../constants/user.constants";

import { postService } from "../services/posts.service";
import { useSelector } from "react-redux";
import dataReducers from "../reducers/data.reducers";

export const faceMatchLandlord =
  (image1, image2) => async (dispatch, getState) => {
    const {
      faceMatch: { faceMatched },
    } = getState();

    dispatch({ type: FACE_MATCH_REQUEST });

    const delay = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const checkStatus = async () => {
      let status;
      let data;

      do {
        data = await postService.faceMatch(image1, image2).catch((err) => {
          const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
          dispatch({
            type: FACE_MATCH_FAIL,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
          return Promise.reject();
        });

        status = data.data.job.result.status;
        await delay(1000);
        // console.log(data);
        console.log(status);
        console.log("hai");
      } while (["success", "incompleted"].includes(status) !== true);

      console.log(data.data.message);
      if (data.data.message === "Face Match Liveness Success") {
        dispatch({ type: FACE_MATCH_SUCCESS });
        dispatch({ type: SET_MESSAGE, payload: data.data.message });

        return await Promise.resolve();
      } else {
        dispatch({
          type: FACE_MATCH_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: data.data.message,
        });
        return Promise.reject();
      }
    };

    if (!faceMatched) {
      await checkStatus().then(() => console.log("wait"));
    }
  };

export const storeVerifiedData = (formData) => async (dispatch, getState) => {
  dispatch({ type: STORE_VERIFIED_DATA_REQUEST });

  const {
    userLogin: { user },
  } = getState();

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: user.accessToken,
    },
  };

  return await axios
    .post("/api/landlordVerified/landlordVerification", formData, config)
    .then(
      (res) => {
        dispatch({
          type: STORE_VERIFIED_DATA_SUCCESS,
          payload: { user: res.data },
        });
        dispatch({ type: SET_MESSAGE, payload: res.data.message });
        localStorage.setItem("user", JSON.stringify(res.data));
        return Promise.resolve();
      },
      (err) => {
        const message =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        dispatch({
          type: STORE_VERIFIED_DATA_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
};

export const addListing = (details) => (dispatch, getState) => {
  const {
    userLogin: { user },
  } = getState();

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: user.accessToken,
    },
  };

  return axios.post("/api/listing/addListing", details, config).then(
    (res) => {
      dispatch({ type: ADD_LISTING, payload: res.data });
      dispatch({ type: SET_MESSAGE, payload: res.data.message });
      return Promise.resolve();
    },
    (err) => {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const getListingsByLandlord = () => async (dispatch, getState) => {
  const {
    userLogin: { user },
  } = getState();

  const config = {
    headers: {
      Authorization: user.accessToken,
    },
  };

  return await axios.get("/api/listing/getAllUserListing", config).then(
    (res) => {
      dispatch({ type: RETRIEVE_LISTING_BY_LANDLORD, payload: res.data });
      return Promise.resolve();
    },
    (err) => {
      console.log(err);
      return Promise.reject();
    }
  );
};
