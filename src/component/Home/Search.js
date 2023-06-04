import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import './search.css';
let lUrl = "http://3.17.216.66:4000/location";
let restUrl = "http://3.17.216.66:4000/restaurant?stateId=";
class Search extends Component{
    constructor(){
        super();
        this.state={
            location:'',
            restData:''
        }
    }
    renderCity=(data)=>{
        if(data){

            return data.map((item)=>{
                return (
                    <option value={item.state_id} key={item.location_id}>{item.state}</option>
                )
            })
        }
    }
    handleCity=(event)=>{
        let stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=> this.setState({restData:data}))
    }
    renderRest=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.restaurant_id} key={item._id}>{item.restaurant_name}</option>
                )
            })
        }
    }
    handleRest=(event)=>{
        this.props.history.push(`/details?restId=${event.target.value}`)
    }
    render(){
        return(
            <>
                <div id="search">
                    <div className="search-wrap">
                        <div className="logo">
                            <h1>Zomapp</h1>
                        </div>
                        <div id="heading">
                            <h2>Discover the best food & drinks near to you</h2>
                        </div>
                        <div class="search-container">
                            <div className="sr-con-wp">
                                <div className="sc-city">
                                    <span className="glyphicon glyphicon-map-marker"></span>
                                    <select onChange={this.handleCity} className="sr-slct">
                                        <option>Select location</option>
                                        {this.renderCity(this.state.location)}
                                    </select>
                                </div>
                                <div className="sr-ln"></div>
                                <div className="sc-rest">
                                    <div className="sr-rst-icon"><span className="glyphicon glyphicon-search"></span></div>
                                    <select id="restSelect" onChange={this.handleRest} className="sr-slct sr-slct-rst">
                                        <option>Select Restaurant</option>         
                                        {this.renderRest(this.state.restData)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        fetch(lUrl,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=> this.setState({location:data}))
    }
}
export default withRouter(Search);