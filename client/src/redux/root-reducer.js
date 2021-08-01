import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [], //! reducer to persist
};

const rootReducer = combineReducers({}); // reducerName : reducerNameReducer

export default persistReducer(persistConfig, rootReducer);
