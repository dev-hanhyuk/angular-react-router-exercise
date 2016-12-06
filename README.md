# Simple router implementation of angular.js and react.js
Router implementation and comparison between angular.js and react.js

[Slides: click here to check out the slide presentation](http://slides.com/hanhyukcho/deck-1-2-3#/)

### Contents
* SPA(Single Page Application) & Routing frameworks
* Implementation process: [ui-router] & 'react-router'
* browserHistory

<br />
# SPA(Single Page Application) & Routing frameworks
## Single Page Application
The introduction of AJAX(Asynchronous Javascript And XML) makes it possible for users to experience more dynamic and faster web applications. However, every event happens on a single page, which caused website navigation challenges, such as bookmark and backbutton issues (Each AJAX request/change on the SPA doesn't affect the web browsers' navigation bar...).

## Routing frameworks
Users can update and specifies the browser's URL, and create bookmarks using routing frameworks.

<br />
# Implementation process overall
1. Installation and module injection
2. Route(state) set-up, nesting routes
3. Link to another: <Link to> / <ui-sref>
4. Redirect

## Use starter kits!
[Angular seed](https://github.com/angular/angular-seed) <br />
[react-create-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)

## [ui-router] & 'react-router'
                            |   [ui-router]                          | 'react-router'
----------------------------|----------------------------------------|------------------------------------------
1-1. Installation|npm install --save angular-ui-router|npm install --save react-router
1-2. Load script|In HTML<br /><script src="staticDir/angular-ui-router/release/angular-ui-router.min.js"></script>| N/A
1-3. Dependency injection|const app = angular.module('name_of_app', ['ui-router'])|import  { Router, Route, browserHistory } from  'react-router'
