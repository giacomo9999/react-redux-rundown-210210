import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSinglePost } from "../actions/singlePostActions";
import { fetchComments } from "../actions/commentsActions";

const SinglePostPage = ({
  match,
  dispatch,
  postData,
  commentData,
  loading,
  hasError,
}) => {
  useEffect(() => {
    const { postId } = match.params;
    dispatch(fetchSinglePost(postId));
    dispatch(fetchComments(postId));
    console.log("singlePostPage useEffect...", postId);
  }, [dispatch, match]);

  const renderComments = () => {
    if (loading.comments) return <p>Loading Comments...</p>;
    if (hasError.comments) return <p>An Error Occurred</p>;
    return commentData.map((comment, index) => (
      <aside className="comment" key={index}>
        <h2>{comment.title}</h2>
        <h3>{comment.email}</h3>
        <p>{comment.body}</p>
      </aside>
    ));
  };

  const renderPost = () => {
    console.log("singlePostPage renderPost...", postData);
    if (loading.singlePost) return <p>Loading Posts...</p>;
    if (hasError.singlePost) return <p>An Error Occurred</p>;
    return postData.id ? (
      <section>
        <h2>POST {postData.id}</h2>
        <h2>{postData.title}</h2>
        <p>{postData.body.substring(0, 100)}</p>
        <Link to="/posts">Back To List</Link>
      </section>
    ) : (
      <section>
        <h2>Not A Valid Post ID</h2>
        <Link to="/posts">Back To List</Link>
      </section>
    );
  };
  return (
    <section>
      {renderPost()}
      {renderComments()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  commentData: state.comments.commentData,
  postData: state.singlePost.postData,
  loading: {
    singlePost: state.singlePost.loading,
    comments: state.comments.loading,
  },
  hasError: {
    singlePost: state.singlePost.hasError,
    comments: state.comments.hasError,
  },
});

export default connect(mapStateToProps)(SinglePostPage);
