import { createStore } from "redux";

const initialState = { status: false };

const userStatusReducer = (state = initialState, action) => {
  if (action.type === "userStatus") {
    return {
      status: !state.status,
    };
  }
  return state;
};

const store = createStore(userStatusReducer);
export default store;
