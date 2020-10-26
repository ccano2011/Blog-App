import React from 'react'
import Home from './screens/Home/Home'
import { Route, Switch } from 'react-router-dom'
import Posts from './screens/Posts/Posts'
import PostCreate from './screens/PostCreate/PostCreate'
import PostEdit from './screens/PostEdit/PostEdit'
import PostDetail from './screens/PostDetail/PostDetail'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exaxt path="/posts" component={Posts} />
        <Route exact path="/add-post" component={PostCreate} />
        {/* <Route exact path="/post/:id/edit" component={PostEdit} /> */}
        {/* <Route exact path="/post/:id" component={PostDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;