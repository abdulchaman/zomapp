import React, {Component} from 'react';
import axios from "axios";
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
        restaurantList:'',
        modalIsOpen:false
       }
    }
    setDataPerFilter=(data)=>{
        this.setState({restaurantList:data})
    }
    openModal=()=> {
        this.setState({modalIsOpen:true})
        // setIsOpen(true);
      }
    
    closeModal=()=> {
        this.setState({modalIsOpen:false})
        // setIsOpen(false);
      }
    render(){
        return(
            <>
                <Header></Header>
                <div id="mainListing">
                    {/* <div id="filter">
                        <div className="filter_col">
                            <div className="fl_mn"><h3>Filters</h3></div>
                            <hr></hr>
                            <CuisineFilter mealId={this.props.match.params.mealId} restPerCuisine={(data)=>this.setDataPerFilter(data)}></CuisineFilter>
                            <CostFilter mealId={this.props.match.params.mealId} restPerCost={(data)=>this.setDataPerFilter(data)}></CostFilter>
                        </div>
                    </div> */}
                    <div className='filter_modal'>
                        <button className='flt_btn' onClick={this.openModal}><i class="fa-solid fa-filter"></i> Filter</button>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal"
                        >
                            <div className='mdl_flt_wrp'>
                                <button className='cls_mdl' onClick={this.closeModal}><i class="fa-solid fa-xmark"></i></button>
                                <div className='flt_con'>
                                    <div className='flt_ttl'>Filter</div>
                                    <div className='flt_tab'>
                                        <Tabs>
                                            <TabList>
                                                <Tab>Cuisine Filter</Tab>                                                      
                                                <Tab>Cost Filter</Tab>
                                            </TabList>
                                            <TabPanel>
                                                <CuisineFilter mealId={this.props.match.params.mealId} restPerCuisine={(data)=>this.setDataPerFilter(data)}></CuisineFilter>
                                            </TabPanel>
                                            <TabPanel>
                                                <CostFilter mealId={this.props.match.params.mealId} restPerCost={(data)=>this.setDataPerFilter(data)}></CostFilter> 
                                            </TabPanel>
                                        </Tabs> 
                                    </div>
                                    <button className='apply_btn'>Apply</button>
                                </div>
                            </div>
                        </Modal>
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