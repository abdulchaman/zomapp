import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header></Header>
            <Route exact path="/" component={Home}></Route>
            <Footer></Footer>
        </BrowserRouter>
    )
}
export default Routing;