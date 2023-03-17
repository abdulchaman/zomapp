import React, {Component} from "react";
import QuickDisplay from './QuickDisplay';
const url = "http://3.17.216.66:4000/quicksearch";
class QuickSearch extends Component{
    constructor(){
        super();
        this.state={
            mealType:''
        }
    }
    render(){
        return(
            <>
                <QuickDisplay mealData={this.state.mealType}></QuickDisplay>
            </>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=> this.setState({mealType:data}))
    }
}
export default QuickSearch;