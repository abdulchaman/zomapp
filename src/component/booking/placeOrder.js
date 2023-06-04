import React, {Component} from "react";
import Header from '../../Header';
import "./placeOrder.css";
const url="http://3.17.216.66:4000/menuItem";
const placeOrder="http://localhost:9870/orders";
class PlaceOrder extends Component{
    constructor(props){
        super(props);
        let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]
        this.state={
            id:Math.floor(Math.random()*100000),
            hotelName:this.props.match.params.restName,
            name:sessionData[0],
            email:sessionData[1],
            address:"YRT 45/13",
            phone:sessionData[2],
            cost:'',
            menuItem:''
        
        }
    }
    handleChange=(event)=>{
            this.setState({[event.target.name]:event.target.value})
    }
    handleCheckout = ()=>{
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(placeOrder, {
            method:"POST",
            headers:{
                "accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push(`/viewBooking`))
       
    }
    renderItem = (data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}></img>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs. {item.menu_price}</h4>
                    </div>
                )
            })
        }
    }
   
    render(){
        if(sessionStorage.getItem('ltk') !== null){
            return(
                <>
                    <Header></Header>
                    <div className="container">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1>Your Order from {this.state.hotelName} Restaurant</h1>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <div className="row">
                                        <input type="hidden" name="cost" value={this.state.cost}></input>
                                        <input type="hidden" name="id" value={this.state.id}></input>
                                        <input type="hidden" name="hotelName" value={this.state.hotelName}></input>
                                        <div className="form-group col-md-6">
                                            <label>Name</label>
                                            <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Email</label>
                                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Phone</label>
                                            <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Address</label>
                                            <input className="form-control" name="address" value={this.state.address} onChange={this.handleChange}></input>
                                        </div>
                                    </div>
                                    {this.renderItem(this.state.menuItem)}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2>Total Price is Rs. {this.state.cost}</h2>
                                        </div>
                                    </div>
                                    <button className="btn btn-success" onClick={this.handleCheckout}>Checkout</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else{
            return(
                <>
                    <Header></Header>
                    <center><h2>Login First to Place the order</h2></center>
                </>
            )
        }
    }
    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu');
        let orderId =[];
        menuItem.split(',').map((item)=>{
            orderId.push(parseInt(item));
            return "ok";
        })
        fetch(`${url}`,{
            method:'POST',
            headers:{
                "accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(orderId)
        })
        .then((res)=>res.json())
        .then((data)=>{
            let totalPrice = 0;
            data.map((item)=>{
                totalPrice = totalPrice + Number(item.menu_price);
                return "ok";
            })
            this.setState({menuItem:data, cost:totalPrice})
        })
    }
}
export default PlaceOrder;