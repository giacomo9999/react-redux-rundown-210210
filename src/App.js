// External imports
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Local imports
import NavBar from "./components/NavBar";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "../src/pages/SinglePostPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route path="/posts/:postId" component={SinglePostPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
