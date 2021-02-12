import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./home/components/AppsInfo"
import Twitter from "./twitter/components/Twitter"
import Facebook from "./facebook/components/Facebook"
import Instagram from "./instagram/components/Instagram"
import Contact from './home/components/Contact';
import ResultadoTw from './resultados/components/ResultadoFinal_Tw';
import ResultadoFb from './resultados/components/ResultadoFinal_Fb';
import ResultadoIg from './resultados/components/ResultadoFinal_Ig';

const App = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />   
      <Route path='/Contact' component={Contact} /> 
      <Route path='/Twitter' component={Twitter} />    
      <Route path='/Facebook' component={Facebook} /> 
      <Route path='/Instagram' component={Instagram} /> 
      <Route path='/Twitter/ResultadoTw' component={ResultadoTw} />
      <Route path='/Twitter/ResultadoFb' component={ResultadoFb} />
      <Route path='/Twitter/ResultadoIg' component={ResultadoIg} />
    </Switch>
  );
}
export default App;