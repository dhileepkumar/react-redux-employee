import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import HeadingComponent from '../Shared/HeadingComponent'
import BlockTitle from '../Shared/FromElements/Block/Title/BlockTitle'
import Button from '../Shared/FromElements/Button/Button'
import AppValidation from '../../Validations/Validations'



/* login from details */
const loginfrom_button_details ={
	type:'submit',
	classname:'pull-right',
	colorclass:'btn-primary',
	buttonsize:'btn-sm',
	displaytext:"Let's Login"
};

const loginfrom_button_clear ={
	type:'submit',
	classname:'pull-right',
	colorclass:'btn-primary',
	buttonsize:'btn-sm',
	displaytext:"Clear Form"
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
	<div className="col-xs-12">
      <input {...input} placeholder={label} type={type} className="form-control"/>
      <div className="text-danger">{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
    </div>
  </div>
)

const SyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props.details
  console.log(props)
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Field name="username" type="text" component={renderField} label="Username"/>
      <Field name="password" type="password" component={renderField} label="password"/>

      <div className="form-group">
	   <div className="col-xs-12">
			<Button buttondetails={loginfrom_button_details} disabled={submitting}/>
			<Button buttondetails={loginfrom_button_clear} disabled={pristine || submitting} 
			click={reset}/>
        </div>
      </div>
    </form>
  )
}

class LoginComponent extends Component {

  render() {
    return <div id="login-container">
			<HeadingComponent pageheading={'Employee Login Page'}/>
            <div className="block animation-fadeInQuickInv">
				<BlockTitle panneltitle={'Employee Details'} pagelink={'register'}/>
               	<SyncValidationForm details={this.props}/>
            </div>
        </div>
	}
}

export default reduxForm({
  form: 'LoginForm',  // a unique identifier for this form
  validate : AppValidation.ValidateLoginForm, // <--- validation function given to redux-form
  warn:AppValidation.LoginFromWarnings // <--- warning function given to redux-form
})(LoginComponent)

