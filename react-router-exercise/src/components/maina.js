import React from 'react';
import { Link } from 'react-router';


export default class MainA extends React.Component {
	render(){
		return (
			<div className="Main">
				<h1>This is Main A</h1>
				<ul>
					<li><Link to="/mainA/subA1">Sub A1</Link></li>
					<li><Link to="/mainA/subA2">Sub A2</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}
