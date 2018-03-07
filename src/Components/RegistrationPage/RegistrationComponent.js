import React, { Component } from 'react';
import HeadingComponent from '../Shared/HeadingComponent'
import BlockTitle from '../Shared/FromElements/Block/Title/BlockTitle'
import Input from '../Shared/FromElements/Input/Input'
import Button from '../Shared/FromElements/Button/Button'

/* login from details */
const from_details =[

	{id:'employeename',
	type:'text',
	name:'employeename', 
	placeholder:'Enter Your Name'},
	
	{id:'employeeemail',
	type:'email',
	name:'employeeemail', 
	placeholder:'Enter Your Email'},
	
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
const button_details =[
	{type:'submit',
	classname:'pull-right',
	colorclass:'btn-success',
	buttonsize:'btn-sm',
	displaytext:"Let's Register",
	icon:'<i className="fa fa-check"></i>'}
	
];

class LoginComponent extends Component {

  render() {
    return <div id="login-container">
			<HeadingComponent pageheading={'Employee Registration Page'} />
            <div className="block animation-fadeInQuickInv">
				<BlockTitle panneltitle={'Employee Registration Details'} pagelink={'login'}/>
                <form id="form-login" action="#" method="post" className="form-horizontal">
					<Input loginfrom={from_details}/>
					<Button buttondetails={button_details}/>
                </form>
            </div>
        </div>
  
  
  }
}

export default LoginComponent;
