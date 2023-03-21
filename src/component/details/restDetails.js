import React,{Component} from 'react';
import axios from 'axios';
const restUrl ="http://3.17.216.66:4000/details";
class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            details:""
        }
    }
    render(){
        return(
            <>
<img src={this.state.details.restaurant_thumb}></img>
            </>
        )
    }
    async componentDidMount(){
        let restId = this.props.location.search.split("=")[1];
        let restResponse = await axios.get(`${restUrl}/${restId}`);
        this.setState({details:restResponse.data[0]})
    }
}
export default Details;