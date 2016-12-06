import React from 'react';
import SubB1 from './subb1';


export default class MainB extends React.Component {
	render(){
		return (
			<div className="Main">
				<h1>This is MainB</h1>
				<SubB1/>
				{this.props.children}
			</div>
		)
	}
}
