import { call, put, takeEvery, fork } from "redux-saga/effects";
import {
  LOAD_CLAIMS,
  LOAD_CLAIMS_SUCCESS,
  LOAD_CLAIM_DETAILS,
  LOAD_CLAIM_DETAILS_SUCCESS,
  UPDATE_STATUS,
  UPDATE_STATUS_SUCCESS
} from "../actions/claimAction";

import config from "../config.json";

export function* fetchClaimList() {
  const endpoint = `${config.server_url}${config.api_version}/claim`;
  const response = yield call(fetch, endpoint);
  const data = yield response.json();

  yield put({ type: LOAD_CLAIMS_SUCCESS, claims: data });
}

export function* fetchClaimDetails(payload) {
  const endpoint = `${config.server_url}${config.api_version}/claim/${payload.claimNo}`;
  const response = yield call(fetch, endpoint);
  const data = yield response.json();

  yield put({ type: LOAD_CLAIM_DETAILS_SUCCESS, selectedClaim: data });
}

export function* updateClaimStatus(payload) {
  console.log("id", payload.id, "status", payload.status);

  let body = {};
  body.status = payload.status;

  const endpoint = `${config.server_url}${config.api_version}/claim/${payload.id}`;
  const response = yield call(fetch, endpoint, {
    method: "PUT",
    headers: {
      Accept: "application/json, application/xml, text/plain, text/html, *.*",
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      status: payload.status
    })
  });
  const data = yield response.json();

  yield put({ type: UPDATE_STATUS_SUCCESS, isStatusUpdated: data.success });
}

function* watchLogin() {
  yield takeEvery(LOAD_CLAIMS, fetchClaimList);
  yield takeEvery(LOAD_CLAIM_DETAILS, fetchClaimDetails);
  yield takeEvery(UPDATE_STATUS, updateClaimStatus);
}

const claimSagas = [fork(watchLogin)];

export default claimSagas;
