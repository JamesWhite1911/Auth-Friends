import React from 'react'
import { Route, Link, Switch, useHistory } from 'react-router-dom';

import Login from './components/Login'
import FriendsList from './components/FriendsList'

import PrivateRoute from './utils/PrivateRoute'

function App() {
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    history.push("/login");
  }

  return (
    <div className="App">
      <nav>
        <Link to='/login'>
          Login
        </Link>
        <Link onClick={logout}>
          Logout
        </Link>
        <Link to='/friends'>
          Friends List
        </Link>
      </nav>
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
