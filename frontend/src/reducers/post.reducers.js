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

export const faceMatchReducer = (state = {}, action) => {
  switch (action.type) {
    case FACE_MATCH_REQUEST:
      return { loading: true, faceMatched: false };
    case FACE_MATCH_SUCCESS:
      return {
        loading: false,
        faceMatched: true,
      };
    case FACE_MATCH_FAIL:
      return {
        loading: false,
        error: action.payload,
        faceMatched: false,
      };
    default:
      return state;
  }
};

export const verifiedUserReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_VERIFIED_DATA_REQUEST:
      return { verifyingLoading: true, isVerified: false };
    case STORE_VERIFIED_DATA_SUCCESS:
      return {
        verifyingLoading: false,
        user: action.payload,
        isVerified: true,
      };
    case STORE_VERIFIED_DATA_FAIL:
      return {
        verifyingLoading: false,
        error: action.payload,
        isVerified: false,
      };
    default:
      return state;
  }
};

export const listingReducer = (state = { listing: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_LISTING:
      console.log(payload.result);
      return { listing: [...state.listing, payload] };
    case RETRIEVE_LISTING_BY_LANDLORD:
      return payload;
    default:
      return state;
  }
};

// export const ocrKTPReducer = (state = {}, action) => {
//   switch (action.type) {
//     case OCR_KTP_REQUEST:
//       return { loadingg: true };
//     case OCR_KTP_SUCCESS:
//       return { loadingg: false, ...action.payload, successMessage: true };
//     case OCR_KTP_FAIL:
//       return {
//         loadingg: false,
//         error: action.payload,
//         successMessage: false,
//       };
//     default:
//       return state;
//   }
// };
