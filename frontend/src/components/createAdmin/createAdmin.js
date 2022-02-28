import React, { Component } from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';

export default class CreateAdmin extends Component {
    constructor(props) {
        super(props)

        this.setPassword = this.setPassword.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.state ={
            password: '',
            email: '',
            redirect: false,
            emailErr:'',
            passErr:'',
        }
    }
    onSubmit(e){
        e.preventDefault()
        if (this.validate()) {
            const username = 'admin'
            const email = this.state.email
            const password = this.state.password

            axios.post('http://localhost:5000/users/register',{
                username : username,
                password : password,
                email: email
            }).then(()=>this.setState({redirect: true}))  
        }
        
    }
    validate(){
        let emailErr = ''
        let passErr = ''
        if (/.+@.+\.[A-Za-z]+$/.test(this.state.email) === false ){
            emailErr = "Invalid Email"
        } 
        if(!this.state.password || this.state.password.length < 8){
            passErr = "Invalid Password"
        }
        if (emailErr || passErr) {
            this.setState ({emailErr: emailErr,passErr: passErr})
            return false
        }
        return true
    }

    setPassword = (e) => this.setState({password: e.target.value})
    setEmail = (e) => this.setState({email: e.target.value})
    render () {
        if(this.state.redirect)return <Navigate to="/account/login" replace={true}/>
        return (
            <div className="login">
            <form onSubmit={this.onSubmit}>
                <div>
                <div className="boxLogInAccount">
                    <div className="row">
                    <div className="columnLeft">
                        <h1> </h1>
                    </div>
                    <div className="columnRight">
                        <div>
                        <h1 className="loginTitle">Create Admin</h1>
                        <div>
                            <div>
                            <h4 className="username">Username</h4>
                            </div>
                            <div>
                            <h4 className="username">admin</h4>
                            </div>
                        </div>
                        <div className="formBottom">
                            <div>
                            <h4 className="password">Email</h4>
                            </div>
                            <input type="text" name="pass" required placeholder="email" onChange={(e)=> this.setEmail(e)}
                            />
                            <span className='error'>{this.state.emailErr}</span>
                        </div>
                        <div className="formBottom">
                            <div>
                            <h4 className="password">Password</h4>
                            </div>
                            <input type="text" name="pass" required placeholder="password" onChange={(e)=> this.setPassword(e)}
                            />
                            <span className='error'>{this.state.passErr}</span>
                        </div>
                        
                        <div className="loginButton">
                            <button type="submit" className="loginConfirm">Create</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
            </div>
        )
    }
}