import React from "react";
import { Link } from "react-router-dom";

const SinglePostPage = (props) => (
  <section>
    <h1>{props.match.params.postId}</h1>
    <h2>Single Post Page</h2>
    <Link to="/posts">Back To List</Link>
  </section>
);

export default SinglePostPage;
