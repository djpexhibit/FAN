import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { claimReducer } from "../reducers/claimReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    claim: claimReducer
  });
