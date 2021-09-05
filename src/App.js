import React from 'react';
import {Route, Switch} from 'react-router-dom';
import config from './config';
import Landing from './Pages/Landing'
import './App.css';

 
function App(){ 
  const path = config.PATH_LOCATIONS

  return(
    <Switch>  
      <Route component={Landing} exact path={path.root} /> 
    </Switch>  
  )
}

export default App;