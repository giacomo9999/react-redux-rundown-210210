import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSinglePost } from "../actions/singlePostActions";

const SinglePostPage = ({ match, dispatch, postData, loading, hasError }) => {
  useEffect(() => {
    const { postId } = match.params;
    dispatch(fetchSinglePost(postId));
  }, [dispatch, match]);

  const renderPost = () => {
    console.log(postData);
    if (loading) return <p>Loading Posts...</p>;
    if (hasError) return <p>An Error Occurred</p>;
    return (
      <section>
        <h2>POST {postData.id}</h2>
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
