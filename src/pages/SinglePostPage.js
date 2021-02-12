import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSinglePost } from "../actions/singlePostActions";

const SinglePostPage = ({ dispatch, loading, postId, postData, hasErrors }) => {
  useEffect(
    (postId) => {
      dispatch(fetchSinglePost(postId));
    },
    [dispatch]
  );

  const renderPost = () => {
    if (loading) return <p>Loading Posts...</p>;
    if (hasErrors) return <p>An Error Occurred</p>;
    return (
      <section>
        <h1>{postId}</h1>
        <h2>{postData.title}</h2>
        <p>{postData.body.substring(0, 100)}</p>
        <Link to="/posts">Back To List</Link>
      </section>
    );
  };
  return renderPost();
};

const mapStateToProps = (state) => ({
  loading: state.singlePost.loading,
  postData: state.singlePost.postData,
  hasError: state.singlePost.hasError,
});

export default connect(mapStateToProps)(SinglePostPage);
