import React, {Component} from "react";
import axios from "axios";
const url = "http://3.17.216.66:4000/filter";
class CostFilter extends Component{
    costFilter = (event)=>{
        let mealId = this.props.mealId;
        let cost = event.target.value.split("-");
        let lCost=cost[0];
        let hCost = cost[1];
        let costUrl="";
        if(event.target.value===""){
            costUrl=`${url}/${mealId}`;
        }
        else{
            costUrl=`${url}/${mealId}?hcost=${hCost}&lcost=${lCost}`
        }
        axios.get(costUrl)
        .then((res)=>{this.props.restPerCost(res.data)})
    }
    render(){
        return(
            <>
                <center><h3>Cost Filter</h3></center>
                <div style={{marginLeft:"15%"}} onChange={this.costFilter}>
                    <label className="radio">
                        <input type="radio" name="cost" value=""></input>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="100-300"></input>100-300
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="301-600"></input>301-600
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="601-1000"></input>601-1000
                    </label>
                </div>
            </>
        )
    }
}
export default CostFilter;