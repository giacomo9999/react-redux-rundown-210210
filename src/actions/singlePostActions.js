export const GET_SINGLE_POST = "GET_SINGLE_POST";
export const GET_SINGLE_POST_SUCCESS = "GET_SINGLE_POST_SUCCESS";
export const GET_SINGLE_POST_FAILURE = "GET_SINGLE_POST_FAILURE";

export const getSinglePost = (postId) => ({
  type: GET_SINGLE_POST,
  postId: postId,
});

export const getSinglePostSuccess = (postData) => ({
  type: GET_SINGLE_POST_SUCCESS,
  postData: postData,
});

export const getSinglePostFailure = () => ({
  type: GET_SINGLE_POST_FAILURE,
});

export function fetchSinglePost(postId) {
  return async (dispatch) => {
    dispatch(getSinglePost(postId));
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );
      const data = await response.json();
      dispatch(getSinglePostSuccess(data));
    } catch (err) {
      dispatch(getSinglePostFailure());
    }
  };
}
