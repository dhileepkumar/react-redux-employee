import React, { Component } from 'react';
import HeadingComponent from '../Shared/HeadingComponent'
import BlockTitle from '../Shared/FromElements/Block/Title/BlockTitle'
import Input from '../Shared/FromElements/Input/Input'
import Button from '../Shared/FromElements/Button/Button'
import AuthService from '../Services/AuthServices';

/* login from details */
const loginfrom_details =[

	{id:'employeeid',
	type:'text',
	name:'employeeid', 
	placeholder:'Enter Your ID'},
	
	{id:'employeepassword',
	type:'password',
	name:'password', 
	placeholder:'Enter Your Password'}
	
];

/* login from details */
const loginfrom_button_details =[
	{type:'submit',
	classname:'pull-right',
	colorclass:'btn-primary',
	buttonsize:'btn-sm',
	displaytext:"Let's Login",
	icon:'<i className="fa fa-check"></i>'}
	
];

class LoginComponent extends Component {
	
  constructor(props){
	  super(props);
	  this.Auth = new AuthService();
  }
 
  onSubmit = (e) => {
	  this.validateFrom();
	  e.preventDefault();
  }
  
  validateFrom = () => {
	   console.log(this.props.loginprops);
  }
  
  render() {
    return <div id="login-container">
			<HeadingComponent pageheading={'Employee Login Page'}/>
            <div className="block animation-fadeInQuickInv">
				<BlockTitle panneltitle={'Employee Details'} pagelink={'register'}/>
                <form id="form-login" onSubmit={this.onSubmit} className="form-horizontal">
					<Input loginfrom={loginfrom_details} inputchange={this.props.loginchange}/>
					<Button buttondetails={loginfrom_button_details}/>
                </form>
            </div>
        </div>
	}
}

export default LoginComponent;
