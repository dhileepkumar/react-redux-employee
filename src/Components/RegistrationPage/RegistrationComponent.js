import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form'
import HeadingComponent from '../Shared/HeadingComponent'
import BlockTitle from '../Shared/FromElements/Block/Title/BlockTitle'
import Button from '../Shared/FromElements/Button/Button'
import AppValidation from '../../Validations/Validations'

/* login from details */
const button_details = {
	type:'submit',
	classname:'pull-right',
	colorclass:'btn-success',
	buttonsize:'btn-sm',
	displaytext:"Let's Register"
}


const loginfrom_button_clear ={
	type:'submit',
	classname:'pull-right',
	colorclass:'btn-primary',
	buttonsize:'btn-sm',
	displaytext:"Clear Form"
};



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
	<div className="col-xs-12 ">
      <input {...input} placeholder={label} type={type} className="form-control"/>
      <div className="text-danger">{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
    </div>
  </div>
)


const FormDetails = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props.details
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
	  <Field name="email" type="email" component={renderField} label="E - Mail"/>
      <Field name="username" type="text" component={renderField} label="Username"/>
      <Field name="password" type="password" component={renderField} label="password"/>

      <div className="form-group">
	   <div className="col-xs-12 text-right">
			<Button buttondetails={button_details}  disabled={submitting}/>
			<Button buttondetails={loginfrom_button_clear} disabled={pristine || submitting} 
			click={reset}/>
        </div>
      </div>
    </form>
  )
}

class RegisterComponent extends Component {
  componentWillMount(){
	  this.show_block=this.props.authdetails.signupalready;
	
  }
  componentWillUpdate(nextProps, nextState){
	 this.show_block= nextProps.authdetails.signupalready;
  }
  render() {
    return <div id="login-container">
			<HeadingComponent pageheading={'Employee Registration Page'} />
			<div className={this.show_block ? 'block animation-fadeInQuickInv hidden' : 'block animation-fadeInQuickInv '}>
					<BlockTitle panneltitle={'Employee Details'} pagelink={'login'}/>
					<FormDetails details={this.props}/>
			</div>
			<div className={this.show_block ? 'block animation-fadeInQuickInv ' : 'block animation-fadeInQuickInv hidden'}>
					<BlockTitle panneltitle={'You Already registred your account . Please Sign in'} pagelink={'login'}/>
			</div>
			
        </div>
  
  
  }
}

export default reduxForm({
	form : 'RegisterFrom',
	validate : AppValidation.ValidateRegisterForm,
	warn: AppValidation.RegisterFromWarnings,
})(RegisterComponent);
