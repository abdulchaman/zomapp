import React, {Component} from 'react';
import axios from "axios";
import './listing.css'
import ListingDisplay from './ListingDisplay';
import CuisineFilter from "../filter/cuisineFilter";
import CostFilter from "../filter/costFilter";
import Header from '../../Header';
const url = "http://3.17.216.66:4000/restaurant?mealtype_id=";

class ListingApi extends Component{
    constructor(props){
        super(props)
       this.state={
        restaurantList:''
       }
    }
    setDataPerFilter=(data)=>{
        this.setState({restaurantList:data})
    }
    render(){
        return(
            <>
                <Header></Header>
                <div id="mainListing">
                    <div id="filter">
                        <div className="filter_col">
                            <div className="fl_mn"><h3>Filters</h3></div>
                            <hr></hr>
                            <CuisineFilter mealId={this.props.match.params.mealId} restPerCuisine={(data)=>this.setDataPerFilter(data)}></CuisineFilter>
                            <CostFilter mealId={this.props.match.params.mealId} restPerCost={(data)=>this.setDataPerFilter(data)}></CostFilter>
                        </div>
                    </div>
                    <ListingDisplay restData={this.state.restaurantList}></ListingDisplay>
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