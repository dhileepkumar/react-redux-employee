import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BlockTitle extends Component{
	render(){
		return <div className="block-title">
                    <div className="block-options pull-right">
                        <Link to={this.props.pagelink} className="btn btn-effect-ripple btn-primary" data-toggle="tooltip" data-placement="left" title="Create new account"><i className="fa fa-plus"></i></Link>
                    </div>
                    <h2>{this.props.panneltitle}</h2>
                </div>
	}
}
export default BlockTitle;
