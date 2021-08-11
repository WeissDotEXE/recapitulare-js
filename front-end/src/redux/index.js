// import { createSlice, configureStore } from "@reduxjs/toolkit";
// //import { createStore } from "redux";
// //import { persistStore } from "redux-persist";
// const initialState = { status: false };

// const userSlice = createSlice({
//   name: "userStatus",
//   initialState,
//   reducers: {
//     userStatus(state) {
//       state.status= !state.status;
//     },
//   },
// });

// // const userStatusReducer = (state = initialState, action) => {
// //   if (action.type === "userStatus") {
// //     return {
// //       status: !state.status,
// //     };
// //   }
// //   return state;
// // };



// const store = configureStore({
//   reducer:{user:userSlice.reducer}
// });
// export const userActions=userSlice.actions;
// export default store;

import { createStore } from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
const initialState = { status: false };



const userStatusReducer = (state = initialState, action) => {
  if (action.type === "userStatus") {
    return {
      status: !state.status,
    };
  }
  return state;
};

const persistConfig={
  key:'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, userStatusReducer);

const store = createStore(persistedReducer);
const persistor=persistStore(store);
export default store;