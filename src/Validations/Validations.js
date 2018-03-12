const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const AppValidation = {
	
	/* login form validations */
	 ValidateLoginForm(values){
	  const errors = {}
		  
		  if (!values.email) {
			errors.email = 'User Name is Required'
		  } 
		  else if (values.email.length > 15) {
			errors.email = 'Must be 15 characters or less'
		  }
		  
		  if (!values.password) {
			errors.password = 'Password is Required'
		  } else if (values.password.length<6){
			errors.password = 'Password must have atleat 6 characters'
		  }
		  
		
		  return errors
	},
	LoginFromWarnings(values){
		  const warnings = {}
		  if (values.age < 19) {
			warnings.age = 'Hmm, you seem a bit young...'
		  }
		  return warnings
	},
	
	/* Registration form validations */
	ValidateRegisterForm(values){
	  const errors = {}
	  
		  if (!values.email) {
			errors.email = 'Email is Required'
		  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address'
		  }

		  
		  if (!values.password) {
			errors.password = 'Password is Required'
		  } else if (values.password.length<6){
			errors.password = 'Password must have atleat 6 characters'
		  }
		  
		  return errors
	},
	RegisterFromWarnings(values){
		  const warnings = {}
		  if (values.password==6) {
			warnings.password = 'Wow your password have reached 6 characters'
		  }
		  return warnings
	},
	async showloginResults(values) {
	
	  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
	}
} 

export default AppValidation;