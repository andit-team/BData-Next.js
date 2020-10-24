import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../src/page/Home'
import Service from '../src/page/Service'
import About from '../src/page/About'
import ServiceDetails from '../src/page/ServiceDetails'
import Project from '../src/page/Project'
import ProjectDetails from '../src/page/ProjectDetails'
import Header from '../src/layout/Header'
import Footer from '../src/layout/Footer'
import Cta from '../src/layout/Cta'
import CopyRight from '../src/layout/CopyRight'


const App=()=> {
  return (
    <>
     <BrowserRouter>
     <Router>
     <Header/>
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/service' exact component={Service} />
        <Route path='/servicedetails' exact component={ServiceDetails} />
        <Route path='/about' exact component={About} />
        <Route path='/project' exact component={Project} />
        <Route path='/projectDetails' exact component={ProjectDetails} />
        
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
