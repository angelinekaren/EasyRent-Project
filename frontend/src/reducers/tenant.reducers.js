import {
  RETRIEVE_ALL_LISTINGS,
  RETRIEVE_ALL_FAVORITES,
  DELETE_FAVORITES,
  ADD_FAVORITES,
} from "../constants/tenant.constants";

const initialState = {
  listOfListings: [],
  favorites: [],
};

export const tenantsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_ALL_LISTINGS:
      return { ...state, listOfListings: payload };
    case ADD_FAVORITES:
      return { ...state, favorites: [...(state.favorites || []), payload] };
    case DELETE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (listOfListings) => listOfListings.id !== payload.id
        ),
      };
    case RETRIEVE_ALL_FAVORITES:
      return payload;
    default:
      return state;
  }
};
