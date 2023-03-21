import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import ListingApi from './component/listing/listingApi';
import Details from './component/details/restDetails';

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header></Header>
            <Route exact path="/" component={Home}></Route>
            <Route path="/listing/:mealId" component={ListingApi}></Route>
            <Route path="/details" component={Details}></Route>
            <Footer></Footer>
        </BrowserRouter>
    )
}
export default Routing;