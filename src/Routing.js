import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from './Footer';
import Home from './component/Home/Home';
import ListingApi from './component/listing/listingApi';
import Details from './component/details/restDetails';
import PlaceOrder from "./component/booking/placeOrder";
import ViewOrder from "./component/booking/viewOrder";
import Login from "./component/login/login";
import Register from "./component/login/register";

const Routing = () =>{
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route path="/listing/:mealId" component={ListingApi}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/placeOrder/:restName" component={PlaceOrder}></Route>
            <Route path="/viewBooking" component={ViewOrder}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Footer></Footer>
        </BrowserRouter>
    )
}
export default Routing;