import { all } from "redux-saga/effects";

import claimSagas from "./claimSaga";

export default function* rootSaga() {
  yield all([...claimSagas]);
}
