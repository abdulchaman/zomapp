import React,{Component} from "react";
import Header from '../../Header';
const url="http://3.17.216.66:5000/api/auth/register";
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"kritika",
            email:"kritika@gmail.com",
            phone:98531245,
            password:"123"
        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleRegister=()=>{
        fetch(`${url}`,{
            method:"POST",
            headers:{
                "accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push(`/`))
    }
    render(){
        return(
            <>
                <Header></Header>
                <div className="container">
                    <div className="row">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <center><h2>Register</h2></center>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <label>Name</label>
                                            <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Email</label>
                                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Phone</label>
                                            <input className="form-control" name="phone" value={this.state.phone    } onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Password</label>
                                            <input className="form-control" name="password" value={this.state.password} onChange={this.handleChange}></input>
                                        </div>
                                    </div>
                                    <button className="btn btn-success" onClick={this.handleRegister}>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Register;