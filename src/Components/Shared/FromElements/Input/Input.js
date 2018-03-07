import React, { Component } from 'react';
class Input extends Component{
	
	componentWillMount(){
		this.get_login_form = this.extractdetails();
	}
	
	
	
	moniterinputchange(){
		console.log()
	}
	
	
	extractdetails(){
		var from_fields = this.props.loginfrom;
		var _get_form_fields='';
		if(from_fields){
			 _get_form_fields = from_fields.map((list)=>{
			 if(this.props.inputchange){
				  return  <div className="form-group" key={list.id}><div className="col-xs-12"><input type={list.type} onChange = {this.props.eventchange} id={list.id} name={list.name} className="form-control" placeholder={list.placeholder} /> <span className="help-block"></span></div></div>
			 }
			 else {
				  return  <div className="form-group" key={list.id}><div className="col-xs-12"><input type={list.type} id={list.id} name={list.name} className="form-control" placeholder={list.placeholder} /> <span className="help-block"></span></div></div>
			 }
			
			})
		}
		
		return _get_form_fields;
			
	}
	
	render(){
		return this.get_login_form;
	}
}
export default Input;
