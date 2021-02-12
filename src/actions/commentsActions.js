export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

export const getComments = () => ({ type: GET_COMMENTS });

export const getCommentsSuccess = (commentData) => ({
  type: GET_COMMENTS_SUCCESS,
  commentData: commentData,
});

export const getCommentsFailure = () => ({ type: GET_COMMENTS_FAILURE });

export function fetchComments(postId) {
  return async (dispatch) => {
    dispatch(getComments());
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const data = await response.json();
      dispatch(getCommentsSuccess(data));
    } catch (err) {
      dispatch(getCommentsFailure());
    }
  };
}
