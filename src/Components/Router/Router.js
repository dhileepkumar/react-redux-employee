import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from '../LoginPage/LoginComponent'
import RegistrationComponent from '../RegistrationPage/RegistrationComponent'

class RouterComponent extends Component{
	render(){
		return <Router basename={'/employeeapp/'}> 
				<Switch>
					<Route exact 
						path="/" 
						render = {(props)=>{
							return <LoginComponent 
								loginprops={this.props.login}
								loginchange={this.props.loginchange}
							/> 
						}}
					/>
					
					<Route exact 
						path="/login" 
						render = {(props)=>{
							return <LoginComponent 
								loginprops={this.props.login}
								loginchange={this.props.loginchange}
							/> 
						}}
					/>
					
					<Route exact 
						path="/register" 
						render = {(props)=>{
							return <RegistrationComponent 
								registerprops={this.props.register}
								registerchange={this.props.registerchange}
							/> 
						}}
					/>
				
				</Switch>
		</Router>
	}
}
export default RouterComponent;
