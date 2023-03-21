import React, {Component} from 'react';
import axios from "axios";
import './listing.css'
import ListingDisplay from './ListingDisplay';
const url = "http://3.17.216.66:4000/restaurant?mealtype_id=";

class ListingApi extends Component{
    constructor(props){
        super(props)
       this.state={
        restaurantList:''
       }
    }
    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">

                        </div>
                        <ListingDisplay restData={this.state.restaurantList}></ListingDisplay>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId', mealId);
        axios.get(`${url}${mealId}`)
        .then((res)=> this.setState({restaurantList:res.data}))
    }
}
export default ListingApi;