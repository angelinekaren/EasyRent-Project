import {
  RETRIEVE_ALL_LISTINGS,
  ADD_FAVORITES,
  RETRIEVE_ALL_FAVORITES,
  DELETE_FAVORITES,
} from "../constants/tenant.constants";

import axios from "axios";

export const getAllListingsTenants = () => async (dispatch) => {
  return await axios.get(`/api/listing/getAllListings`).then(
    (res) => {
      console.log(res.data);
      dispatch({ type: RETRIEVE_ALL_LISTINGS, payload: res.data });
      return Promise.resolve();
    },
    (err) => {
      console.log(err);
      return Promise.reject();
    }
  );
};

export const deleteFavorites = (id) => async (dispatch, getState) => {
  const {
    userLogin: { user },
  } = getState();

  const {
    tenants: { favorites },
  } = getState();

  const config = {
    headers: {
      Authorization: user.accessToken,
    },
  };

  return await axios
    .delete(`/api/tenants/${id}`, config)
    .then(() => {
      dispatch({ type: DELETE_FAVORITES, payload: { id } });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const listingFavorites = (id) => async (dispatch, getState) => {
  const {
    userLogin: { user },
  } = getState();

  return await axios
    .post(`/api/tenants/${id}`, null, {
      headers: { Authorization: user.accessToken },
    })
    .then(() => {
      dispatch({ type: ADD_FAVORITES, payload: { id } });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllFavorites = () => async (dispatch, getState) => {
  const {
    userLogin: { user },
  } = getState();

  const config = {
    headers: {
      Authorization: user.accessToken,
    },
  };

  return await axios
    .get(`/api/tenants/getAllFavorites`, config)
    .then((res) => {
      dispatch({ type: RETRIEVE_ALL_FAVORITES, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
