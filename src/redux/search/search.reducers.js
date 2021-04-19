import { changeSearchText } from "./search.utils";
const INITIAL_STATE = { searchText: "", used: false };

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return { ...state, searchText: changeSearchText(action.payload) };
    case "TOGGLE_USED":
      return { ...state, used: true };
    default:
      return state;
  }
};

export default searchReducer;
