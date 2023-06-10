import React, {Component} from "react";
import { withRouter } from "react-router-dom";
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
    responsiveNav=()=>{
        const topNav = document.getElementById('myTopNav');
        if(topNav.className==='topnav'){
            topNav.className += " responsive";
        }
        else{
            topNav.className = 'topnav';
        }
    }
    handleLogout=()=>{
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('loginStatus',"LoggedOut");
        sessionStorage.removeItem('ltk');
        // sessionStorage.removeItem('menu');
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
                    <Link to="" className="znavLink nav-link">
                        <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                    </Link>
                    <button className="znavLink" onClick={this.handleLogout}>Log out</button>
                </>
            )
        }
        else{
            return(
                <>
                    <Link to="/login" className="znavLink">
                        <span className="glyphicon glyphicon-log-in"></span> Log in
                    </Link>
                
                    <Link to="/register" className="znavLink">
                        <span className="glyphicon glyphicon-user"></span> Sign up
                    </Link>
                </>
            )
        }
    }
    render(){
        return(
            <div className="zomhead">
                <header className="zheader">
                    <nav className="topnav" id="myTopNav">
                        <div id="brand">
                            <Link to="/">Zomapp</Link>
                        </div>
                       
                        <div id="social">
                            {this.conditionalHeader()}
                        </div>
                        <button className="pr_icon" onClick={this.responsiveNav}><i class="fa-solid fa-user"></i></button>
                    </nav>
                </header>
            </div>
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
export default withRouter(Header);