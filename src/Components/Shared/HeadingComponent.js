import React, { Component } from 'react';
class HeadingComponent extends Component{
	render(){
		return <h1 className="h2 text-light text-center push-top-bottom animation-slideDown">
                <i className="fa fa-cube"></i> <strong>{this.props.pageheading}</strong>
            </h1>
	}
}
export default HeadingComponent;
