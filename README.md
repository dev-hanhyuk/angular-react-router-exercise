# Simple router implementation of angular.js and react.js
Router implementation and comparison between angular.js and react.js

[Slides: click here to check out the slide presentation](http://slides.com/hanhyukcho/deck-1-2-3#/)

### Contents
* SPA(Single Page Application) & Routing frameworks
* Implementation process overview: [ui-router] & 'react-router'
* [ui-router]
* 'react-router'
* browserHistory

<br />
# SPA(Single Page Application) & Routing frameworks
## Single Page Application
The introduction of AJAX(Asynchronous Javascript And XML) makes it possible for users to experience more dynamic and faster web applications. However, every event happens on a single page, which caused website navigation challenges, such as bookmark and backbutton issues (Each AJAX request/change on the SPA doesn't affect the web browsers' navigation bar...).

## Routing frameworks
Users can update and specifies the browser's URL, and create bookmarks using routing frameworks.

<br />
# Implementation process overview
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
1-1. Installation | npm install --save angular-ui-router |  npm install --save react-router
1-2. Load script(in HTML) | ```<script src="angular-ui-router.min.js"></script>```  |  N/A
1-3. Dependency injection | ```const app = angular.module('_name_of_app_', ['ui-router'])```  | ```import  { Router, Route, browserHistory } from  'react-router'```
2. State configuration | $stateProvider | ```<Router>, <Route>```
3. Link set-up |  ```<a ui-sref="state_name">Goto State</a>```  | ```<Link to="/path_to_link">Goto Link</Link>```

<br />
# [ui-router]
## 1. Module install and dependency injection
### 1-1. npm install: 
```npm install --save angular ui-router```<br />
### 1-2. Load script file in the HTML body
```HTML
<script src="_path_to_ui_router_/angular-ui-router/release/angular-ui-router.min.js"></script>
```
### 1-3. Dependency injection
```javascript
const app = angular.module('_name_of_app_', ['ui-router']);
```

## 2. State config by using $stateProvider service
###use '.' separater to make nested states(ui-view)

```javascript
app.config(function($stateProvider){
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: './components/main/main.template.html' 
        })
        .state('main.sub', {
            url: '/sub',
            template: '<h1>This is sub-page</h1>'
        }); //main.sub is a nested state
});
```
## 3. ui-sref
