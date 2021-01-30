import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Demo from '../Demo';

import Home from 'screens/Home';
import Swipe from 'screens/Swipe';
import Favourites from 'screens/Favourites';
import Navbar from '../Navbar';
import Footer from '../Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        
        {/* Remove the demo route if your app is ready! */}
        <Route path='/demo' component={Demo} />

        {/* Create your app routes here  */}
        <Route path='/Swipe' component={Swipe} />
        <Route path='/Favourites' component={Favourites} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default hot(App);
