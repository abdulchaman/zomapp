import React,{Component} from "react";
import Header from '../../Header';
const url="http://3.17.216.66:5000/api/auth/login";
class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"kritika",
            password:"123",
            message:''
        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleLogin=()=>{
        fetch(`${url}`,{
            method:"POST",
            headers:{
                "accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.auth===false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem("ltk",data.token)
                this.props.history.push(`/`)
            }
        })
    }
    render(){
        return(
            <>
                <Header></Header>
                <div className="container">
                    <div className="row">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <center><h2>Login</h2></center>
                            </div>
                            <div className="panel-body">
                                    <h3>{this.state.message}</h3>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <label>Email</label>
                                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Password</label>
                                            <input className="form-control" name="password" value={this.state.password} onChange={this.handleChange}></input>
                                        </div>
                                    </div>
                                    <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Login;