import { createStore } from "redux";

const userStatusReducer = (state = { status: false }, action) => {
  if (action.type === "logIn") {
    return {
      status:true
    };
  }
  if(action.type==='logOut'){
      return{
          status:false
      }
  }
  return state;
};

const store = createStore(userStatusReducer);
export default store;
