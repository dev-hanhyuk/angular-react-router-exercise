import React from 'react';
import { Link } from 'react-router';
// import MainA from './mainA';
// import MainB from './mainB';

//Layout Component

export default class Layout extends React.Component {
	render(){
		return (
			<div className="Layout">
				<h1>This is Layout</h1>
				<ul>
					<li><Link to="/mainA">Main A</Link></li>
					<li><Link to="/mainB">Main B</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}