import * as actions from "../actions/commentsActions";

export const initialState = {
  commentData: [],
  loading: false,
  hasError: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return { ...state, loading: true };
    case actions.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        commentData: action.commentData,
        loading: false,
        hasError: false,
      };
    case actions.GET_COMMENTS_FAILURE:
      return { ...state, hasError: true };
    default:
      return state;
  }
}
