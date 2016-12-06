import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import './App.css';
import Layout from './components/layout';
import MainA from './components/maina';
import MainB from './components/mainb';
import SubA1 from './components/suba1';
import SubA2 from './components/suba2';


var app = (
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<Route path="mainA" component={MainA}>
				<Route path="subA1" component={SubA1}/>
				<Route path="subA2" component={SubA2}/>
			</Route>
			<Route path="mainB" component={MainB}/>
		</Route>
	</Router>
)

// Render when document is ready
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    app, document.getElementById('root')
  )
});
