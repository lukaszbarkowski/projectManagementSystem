import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Topbar from 'components/Topbar/Topbar'
import Menu from 'components/Menu/Menu'

import './App.scss'

import * as Routes from '_constants/routing'

import Home from 'components/Home/Home'
import Projects from 'components/Projects/Projects'
import Settings from 'components/Settings/Settings'
import Project from 'components/Project/Project'

const App = () => {
  return (
    <Router>
      <Topbar />
      <Menu />
      <Route exact path={Routes.HOME} component={Home}/>
      <Route exact path={Routes.PROJECTS} component={Projects}/>
      <Route exact path={Routes.SETTINGS} component={Settings}/>
      <Route exact path={Routes.PROJECT} component={Project}/>
    </Router>
  );
}

export default App;
