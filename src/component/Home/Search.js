import React, {Component} from "react";
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
    render(){
        return(
            <>
                <div id="search">
                    <div className="logo">
                        <span>D!</span>
                    </div>
                    <div id="heading">
                        Find Best Place Near You
                    </div>
                    <div id="dropdown">
                        <select onChange={this.handleCity}>
                            <option>----SELECT LOCATION----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select id="restSelect">
                            <option>----SELECT Restaurants----</option>
                            
                            {this.renderRest(this.state.restData)}
                        </select>
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
export default Search;