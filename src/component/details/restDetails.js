import React,{Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';
import "./details.css";
import Header from '../../Header';
import MenuDisplay from './displayMenu';
const restUrl ="http://3.17.216.66:4000/details";
const menuUrl ="http://3.17.216.66:4000/menu";
class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            details:"",
            menuList:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1,
            userItem:''
        }
    }
    addToCart=(data)=>{
        this.setState({userItem:data})
    }
    proceed = ()=>{
        sessionStorage.setItem('menu', this.state.userItem);
        sessionStorage.setItem('restName',this.state.details.restaurant_name)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }
    render(){
        let {details} = this.state;
        return(
            <>
                <Header></Header>
                <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={details.restaurant_thumb}></img>
                        </div>
                    </div>
                    <div className="tileContent">
                        <div className="content">
                            <div className='rest_name'><h1>{details.restaurant_name}</h1></div>
                            <div className='rest_txt'><p>Best Taste of Fresh Chai with Samosa At your Door or DineIn</p></div>
                            <div className="cfeedback"><span>231 Customers Reviews</span></div>
                            <div className='avrg_rtng'>Rating <span className='rtng_xt'>{details.average_rating} <i class="fa-solid fa-star"></i></span></div>
                            <div className='rset_icon'>
                                <div className="icons">
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png"/>
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png"/>
                                </div>
                            </div>
                        </div>
                        <Tabs>
                            <TabList>
                                <Tab>About</Tab>                                                      
                                <Tab>Contact</Tab>
                            </TabList>
                            <TabPanel>
                                <h2 className='tab_rest_name'>{details.restaurant_name}</h2>
                                <p className='tab_rest_para'>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen </p>
                            </TabPanel>
                            <TabPanel>
                                <h4 className='tb_rs_add'>{details.address}</h4>
                                <h4 className='tb_rs_add'>Phone Number: {details.contact_number}</h4>
                            </TabPanel>
                        </Tabs> 
                    </div>
                    <div className='menu_cnt'>
                        <div className='menu_ttl'><h3>Menu</h3></div>
                        <MenuDisplay menuData={this.state.menuList} finalOrder={(data)=>this.addToCart(data)}></MenuDisplay>
                        <div className="rest_btn">
                            <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</Link>&nbsp;
                            <button className='btn btn-success' onClick={this.proceed}>Proceed</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    async componentDidMount(){
        let restId = this.props.location.search.split("=")[1];
        let restResponse = await axios.get(`${restUrl}/${restId}`);
        let menuResponse = await axios.get(`${menuUrl}/${restId}`);
        this.setState({details:restResponse.data[0], menuList:menuResponse.data})
    }
}
export default Details;