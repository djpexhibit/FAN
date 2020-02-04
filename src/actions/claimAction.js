export const LOAD_CLAIMS_SUCCESS = "CLAIM/LOAD_CLAIMS_SUCCESS";
export const LOAD_CLAIMS = "CLAIM/LOAD_CLAIMS";
export const LOAD_CLAIM_DETAILS = "CLAIM/LOAD_CLAIM_DETAILS";
export const LOAD_CLAIM_DETAILS_SUCCESS = "CLAIM/LOAD_CLAIM_DETAILS_SUCCESS";
export const UPDATE_STATUS = "CLAIM/UPDATE_STATUS";
export const UPDATE_STATUS_SUCCESS = "CLAIM/UPDATE_STATUS_SUCCESS";

export const loadClaims = () => ({ type: LOAD_CLAIMS });
export const loadClaimsSuccess = () => ({ type: LOAD_CLAIMS_SUCCESS });
export const loadClaimDetails = claimNo => ({
  type: LOAD_CLAIM_DETAILS,
  claimNo
});
export const loadClaimDetailsSuccess = () => ({
  type: LOAD_CLAIM_DETAILS_SUCCESS
});
export const updateStatus = (id, status) => ({
  type: UPDATE_STATUS,
  id,
  status
});
export const updateStatusSuccess = isStatusUpdated => ({
  type: UPDATE_STATUS_SUCCESS,
  isStatusUpdated
});
