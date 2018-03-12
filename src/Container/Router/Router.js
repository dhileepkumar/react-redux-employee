import React, { Component } from 'react';
import {Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import LoginComponent from '../../Container/LoginPage/LoginComponent'
import RegistrationComponent from '../../Container/RegistrationPage/RegistrationComponent'
import DashboardComponent from '../../Container/DashboardPage/DashboardComponent'
import createHistory from "history/createBrowserHistory"
const history = createHistory({basename: "/employeeapp" })
const PrivateRoute = ({component: Component, isAuthenticated, ...rest }) => { 
           if(isAuthenticated) {
           		return <Component {...this.props} /> 
           }
           console.log('auth details',isAuthenticated);
           return <Redirect to="/login" />
           
        }
    
class RouterComponent extends Component{	
	componentWillMount(){
		this.privateprops = this.props.authentication
	}

	componentWillUpdate(nextProps, nextState){
		this.privateprops = nextProps.authentication
	}
	render(){
		console.log('details name',this.privateprops)
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
						render = {(props)=> {
							return <RegistrationComponent 
								onSubmit={this.props.registersubmit}
								authdetails ={this.props.authentication}
								logindetail={this.props}
								history = {history}
							/> 
						}}
					/>


					  <PrivateRoute path={"/Dashboard"} component={DashboardComponent} isAuthenticated={this.privateprops} />
				
				</Switch>
		</Router>
	}
}
export default RouterComponent;
