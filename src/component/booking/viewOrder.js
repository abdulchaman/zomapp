import React, {Component} from "react";
import axios from "axios";
import Display from "./displayOrder";
const placeOrder = "http://localhost:9870/orders";
class ViewOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            orders:""
        }
    }
    render(){
        return(
            <>
                <Display orderData={this.state.orders}></Display>
            </>
        )
    }
    componentDidMount(){
        axios.get(placeOrder, {method:"GET"})
        .then((res)=> this.setState({orders:res.data}))
    }
}
export default ViewOrder;