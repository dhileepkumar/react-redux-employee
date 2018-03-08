import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from '../LoginPage/LoginComponent'
import RegistrationComponent from '../RegistrationPage/RegistrationComponent'

class RouterComponent extends Component{
	
	render(){
		console.log('Route',this.props);
		return <Router basename={'/employeeapp/'}> 
				<Switch>
					<Route exact 
						path="/" 
						render = {(props)=>{
							
							return <LoginComponent 
								onSubmit={this.props.loginsubmit}
							/> 
						}}
					/>
					
					<Route exact 
						path="/login" 
						render = {(props)=>{
							return <LoginComponent 
								onSubmit={this.props.loginsubmit}
							/> 
						}}
					/>
					
					<Route exact 
						path="/register" 
						render = {(props)=>{
							return <RegistrationComponent 
								onSubmit={this.props.loginsubmit}
							/> 
						}}
					/>
				
				</Switch>
		</Router>
	}
}
export default RouterComponent;
