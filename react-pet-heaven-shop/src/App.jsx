import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pets from './components/pages/Pets';
import About from './components/pages/About';
import Dogs from './components/pages/Dogs';
import Cats from './components/pages/Cats';
import Birds from './components/pages/Birds';
import Others from './components/pages/Others';
import Adoption from './components/pages/Adoption';
import Releasing from './components/pages/Releasing';
import Register from './components/pages/Register';





function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>    
        <Route path='/' exact component={Home} />
        <Route path='/Pets' component={Pets} />
        <Route path='/Dogs' component={Dogs} />
        <Route path='/Cats' component={Cats} />
        <Route path='/Birds' component={Birds} />
        <Route path='/Others' component={Others} />
        <Route path='/Adoption' component={Adoption}/>
        <Route path='/About' component={About} />
        <Route path="/Releasing" component={Releasing} />
        <Route path='/Register' component={Register} />



        </Switch>
      </Router>
    </>
  );
}

export default App;
