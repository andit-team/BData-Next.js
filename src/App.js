import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../src/page/Home'
import Service from '../src/page/Service'
import About from '../src/page/About'
import ServiceDetails from '../src/page/ServiceDetails'
import Project from '../src/page/Project'
import ProjectDetails from '../src/page/ProjectDetails'
import Blog from '../src/page/Blog'
import BlogDetails from '../src/page/BlogDetails'
import Shop from '../src/page/Shop'
import ShopDetails from '../src/page/ShopDetails'
import Cart from '../src/page/Cart'
import CheckOut from '../src/page/CheckOut'
import Login from '../src/page/Login'
import Register from '../src/page/Register'
import ResetPassword from '../src/page/ResetPassword'
import Contact from '../src/page/Contact'
import Faqs from '../src/page/Faqs'
import Error from '../src/page/Error'
import ScrollToTop from "./helpers/ScrollToTop";
import Header from '../src/layout/Header'
import Footer from '../src/layout/Footer'
import Cta from '../src/layout/Cta'
import CopyRight from '../src/layout/CopyRight'


const App=()=> {
  return (
    <>
     <BrowserRouter>
     <Router>
    <ScrollToTop>
     <Header/>
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/service' exact component={Service} />
        <Route path='/servicedetails' exact component={ServiceDetails} />
        <Route path='/about' exact component={About} />
        <Route path='/project' exact component={Project} />
        <Route path='/projectdetails' exact component={ProjectDetails} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/blogdetails' exact component={BlogDetails} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/shopdetails' exact component={ShopDetails} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/checkout' exact component={CheckOut} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/resetpassword' exact component={ResetPassword} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/faqs' exact component={Faqs} />
        <Route exact component={Error} />
      </Switch>
      <Cta/>
      <Footer/>
      <CopyRight/>
      </ScrollToTop>
      </Router>
     </BrowserRouter>
    </>
  );
}

export default App;
