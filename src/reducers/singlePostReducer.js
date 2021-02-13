import * as actions from "../actions/singlePostActions";

export const initialState = {
  postData: [],
  loading: true,
  hasError: false,
};

export default function singlePostReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_SINGLE_POST:
      return { ...state, loading: true };
    case actions.GET_SINGLE_POST_SUCCESS:
      return {
        ...state,
        postData: action.postData,
        loading: false,
        hasError: false,
      };
    case actions.GET_SINGLE_POST_FAILURE:
      return { ...state, hasError: true };
    default:
      return state;
  }
}
