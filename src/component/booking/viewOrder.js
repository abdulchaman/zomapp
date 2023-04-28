import React, {Component} from "react";
import axios from "axios";
import Header from '../../Header';
import Display from "./displayOrder";
const placeOrder = "http://localhost:9870/orders";
class ViewOrder extends Component{
    constructor(props){
        super(props);
        let email=sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:''
        this.state={
            orders:"",
            email:email
        }
    }
    render(){
        return(
            <>
                <Header></Header>
                <Display orderData={this.state.orders}></Display>
            </>
        )
    }
    componentDidMount(){
        axios.get(`${placeOrder}?email=${this.state.email}`, {method:"GET"})
        .then((res)=> this.setState({orders:res.data}))
    }
}
export default ViewOrder;