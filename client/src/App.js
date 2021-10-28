import React from 'react';
import './App.css';

import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import List from './Components/WorkSpace';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/workspace" component={List} />
        </Switch>
        <Footer />
      </Router>




    </div>
  );
}

export default App;



