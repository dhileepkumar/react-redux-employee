import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';


class PrivateRoute extends Component{
	componentWillMount(){
		this.authdetails = this.props.privatedetails.authentication;
		this.propdetails = this.props;
	}
	componentWillUpdate(nextProps, nextState){
		this.authdetails = nextProps.privatedetails.authentication;
		this.propdetails = nextProps.privatedetails;
	}

	PrivateRoute = ({ component: Component, ...rest }) => (
	  <Route {...rest} render={(props) => (
	    fakeAuth.isAuthenticated === true
	      ? <Component {...props} />
	      : <Redirect to={{
	          pathname: '/login',
	          state: { from: props.location }
	        }} />
	  )} />
	)

	render(){
				console.log(this.authdetails)
				return  <PrivateRoute />
	}
}

export default PrivateRoute;


