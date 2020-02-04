import {
  LOAD_CLAIMS_SUCCESS,
  LOAD_CLAIM_DETAILS_SUCCESS,
  UPDATE_STATUS_SUCCESS
} from "../actions/claimAction";

const initialState = {
  claims: [],
  selectedClaim: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CLAIMS_SUCCESS:
      return {
        ...state,
        claims: action.claims
      };
    case LOAD_CLAIM_DETAILS_SUCCESS:
      return {
        ...state,
        selectedClaim: action.selectedClaim
      };
    case UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        isStatusUpdated: action.isStatusUpdated
      };
    default:
      return state;
  }
};

export { reducer as claimReducer };
