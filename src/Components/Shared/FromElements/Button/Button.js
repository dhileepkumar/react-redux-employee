import React, { Component } from 'react';

class Button extends Component{
	constructor(props){
		super(props);
		this.extractbutton = this.extractbutton.bind(this);
	}
	componentWillMount(){
		this._get_button_list=this.extractbutton();
	}
	
	extractbutton(){
		var _buttondetails ='';
		if(this.props.buttondetails){
			return _buttondetails = this.props.buttondetails.map((list, index)=>{
				return  <button  key={index} type={list.type} className="btn btn-effect-ripple  btn-primary"> <span dangerouslySetInnerHTML={{__html:list.icon}} /> {list.displaytext}</button>
				
			})
		}
		
		return _buttondetails;
	}
	
	render(){
		return  <div className="form-group form-actions"><div className="col-xs-4 text-right">
		{this._get_button_list}</div></div>
	}
}
export default Button;
