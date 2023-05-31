import { GET_USER_INFO, SAVE_USER_INFO } from "./actions";

const userInfo = {
  userName: "",
  phone: "",
  city: "",
};

const userReducerInfo = (state = userInfo, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,

        userInfo: action.payload,
      };
    case SAVE_USER_INFO:
      return {
        ...state,
        userName: action.payload.userName,
      };

    default:
      return state;
  }
};
export default userReducerInfo;
