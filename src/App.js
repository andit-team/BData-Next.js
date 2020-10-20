import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../src/page/Home'
import Service from '../src/page/Service'
import ServiceDetails from '../src/page/ServiceDetails'
import Footer from '../src/layout/Footer'
import Cta from '../src/layout/Cta'
import CopyRight from '../src/layout/CopyRight'


function App() {
  return (
    <>
     <BrowserRouter>
     <Router>
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/service' exact component={Service} />
        <Route path='/servicedetails' exact component={ServiceDetails} />
      </Switch>
      <Cta/>
      <Footer/>
      <CopyRight/>
      </Router>
     </BrowserRouter>
    </>
  );
}

export default App;
