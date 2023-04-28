import React, {Component} from "react";
import './header.css';
import {Link} from "react-router-dom";
const url="http://3.17.216.66:5000/api/auth/userinfo";
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            userData:''
        }
    }
    handleLogout=()=>{
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('loginStatus',"LoggedOut");
        sessionStorage.removeItem('ltk');
        this.setState({userData:''});
        this.props.history.push(`/`)
    }
    conditionalHeader=()=>{
        if(sessionStorage.getItem('ltk') !== null){
            let data=this.state.userData;
            let outputArray = [data.name,data.email,data.phone];
            sessionStorage.setItem('userInfo',outputArray);
            sessionStorage.setItem('loginStatus',"LoggedIn");
            return(
                <>
                    <Link to="" className="btn btn-info">
                        <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                    </Link>&nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}>Log Out</button>
                </>
            )
        }
        else{
            return(
                <>
                    <Link to="/login" className="btn btn-success">
                        <span className="glyphicon glyphicon-log-in"></span> LogIn
                    </Link>&nbsp;
                    <Link to="/register" className="btn btn-info">
                        <span className="glyphicon glyphicon-user"></span> Register
                    </Link>
                </>
            )
        }
    }
    render(){
        return(
            <header>
                <div id="brand">
                    Developer Funnel
                </div>
                <div id="social">
                    {this.conditionalHeader()}
                </div>
            </header>
        )
    }
    componentDidMount(){
        fetch(url, {
            method:"GET",
            headers:{
                "x-access-token":sessionStorage.getItem('ltk')
            }
        })
        .then((res)=>res.json())
        .then((data)=>{this.setState({userData:data})})
    }
}
export default Header;