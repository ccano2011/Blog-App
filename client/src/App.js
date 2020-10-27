import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import Posts from "./screens/Posts/Posts";
import PostCreate from "./screens/PostCreate/PostCreate";
import PostDetail from "./screens/PostDetail/PostDetail";
import PostEdit from "./screens/PostEdit/PostEdit";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id" component={PostDetail} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
      </Switch>
    </div>
  );
}

export default App;
