import React, { Component } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import LoginComponent from '../LoginPage/LoginComponent'
import RegistrationComponent from '../RegistrationPage/RegistrationComponent'
import createHistory from "history/createBrowserHistory"

const PrivateRoute = ({ component: Component, ...rest }) => (
		 <Route {...rest} render={(props) => (
		    props.authentication === false
		      ? console.log(props)
		      : console.log(props)
		  )} />
);

const history = createHistory({
  basename: "/employeeapp"
})


console.log(history)


class RouterComponent extends Component{
	
	render(){
		return <Router history={history}> 
				<Switch>
					<Route exact 
						path="/" 
						render = {(props)=>{
							
							return <LoginComponent 
								onSubmit={this.props.loginsubmit}
								authdetails ={this.props.authentication}
								logindetail={this.props}
								history = {history}
							/> 
						}}
					/>
					
					<Route 
						path="/login" 
						render = {(props)=>{
							return <LoginComponent 
								onSubmit={this.props.loginsubmit}
								authdetails ={this.props.authentication}
								logindetail={this.props}
								history = {history}
							/> 
						}}
					/>
					
					<Route 
						path="/register" 
						render = {(props)=>{
							return <RegistrationComponent 
								onSubmit={this.props.registersubmit}
								authdetails ={this.props.authentication}
								history = {history}
							/> 
						}}
					/>


					<PrivateRoute  path="/dashboard"  component={RegistrationComponent} props={this.props} />
				
				</Switch>
		</Router>
	}
}
export default RouterComponent;
