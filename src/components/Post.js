import React from "react";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  const postId = "/posts/" + post.id;
  return (
    <article className="post-excerpt">
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}</p>
      <Link to={postId}>Show Post</Link>
    </article>
  );
};
