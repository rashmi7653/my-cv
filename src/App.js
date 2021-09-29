import React from 'react';
import './App.css';
import home from './components/home.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Route exact path="/" component={home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/education" component={Education} />
          <Route path="/achievements" component={Achievements} />
        </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
