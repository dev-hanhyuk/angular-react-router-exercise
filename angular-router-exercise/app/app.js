'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('routerExercise', ['ui.router']);

// app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider, $stateProvider) {
//   $locationProvider.hashPrefix('!');
//   $routeProvider.otherwise({redirectTo: '/mainA'});
// }]);


app.config(function($stateProvider){
	$stateProvider
	.state('mainA', {
		url: '/mainA',
		template: `
		<div class="Main">
			<h1>This is Main A</h1>
			<ul>
				<li><a ui-sref="mainA.subA1">Sub A1</a></li>
				<li><a ui-sref="mainA.subA2">Sub A2</a></li>
			</ul>
			<ui-view></ui-view>
		</div>
		`
	})
	.state('mainA.subA1', {
		url: '/subA1',
		template: '<h2 class="Sub">This is Sub A1</h2>'
	})
	.state('mainA.subA2', {
		url: '/subA2',
		template: '<h2 class="Sub">This is Sub A2</h2>'
	})
	.state('mainB', {
		url: '/mainB',
		templateUrl: './components/mainB/mainB.template.html'
	})
	.state('mainB.subB1', {
		url: '/subB1',
		template: '<h2 class="Sub">This is sub B1</h2>'
	})
	.state('mainB.subB2', {
		url: '/subB2',
		template: '<h2 class="Sub">This is sub B2</h2>'
	})
})