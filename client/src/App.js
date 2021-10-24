import React  from 'react';
import './App.css';

import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import List  from './Components/WorkSpace';



function App() {
  return (
    <div className="App">

<Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/workspace" component={List} />
    </Switch>
  </Router>


          

    </div>
  );
}

export default App;



