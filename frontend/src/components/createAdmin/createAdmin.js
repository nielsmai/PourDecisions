import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router';

export default class CreateAdmin extends Component {
    constructor(props) {
        super(props)

        this.setLoginPassword = this.setLoginPassword.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state ={
            password: '',
            email: '',
            redirect: false
        }
    }

    onSubmit(e){
        e.preventDefault()

        const username = 'admin'
        const email = this.state.email
        const password = this.state.password

        axios.post('http://localhost:5000/users/register',{
            username : username,
            password : password,
            email: email
        }).then(()=>this.setState({redirect: true}))
    }
    setLoginPassword = (e) => this.setState({password: e.target.value})
    setEmail = (e) => this.setState({email: e.target.value})
    renderErrorMessage = (name) => name && <div className="error">{name}</div>

    render () {
        if (redirect) return <Redirect to='account/login'/>

        return (
            <div className="login">
            <form onSubmit={this.onSubmit}>
                <div>
                <div className="boxLogInAccount">
                    <div className="row">
                    <div className="columnLeft">
                        <h1></h1>
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
                            {this.renderErrorMessage("pass")}
                        </div>
                        <div className="formBottom">
                            <div>
                            <h4 className="password">Password</h4>
                            </div>
                            <input type="text" name="pass" required placeholder="password" onChange={(e)=> this.setLoginPassword(e)}
                            />
                            {this.renderErrorMessage("pass")}
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