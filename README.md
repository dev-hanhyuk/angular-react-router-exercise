# Simple router implementation of angular.js and react.js
Router implementation and comparison between angular.js and react.js

[Slides: click here to check out the slide presentation](http://slides.com/hanhyukcho/deck-1-2-3#/)


* SPA(Single Page Application) & Routing frameworks
* Implementation process: [ui-router] & 'react-router'
* browserHistory

## SPA(Single Page Application) & Routing frameworks
### Single Page Application
The introduction of AJAX(Asynchronous Javascript And XML) makes it possible for users to experience more dynamic and faster web applications. However, every event happens on a single page, which caused website navigation challenges, such as bookmark and backbutton issues. (Each AJAX request/change on the SPA doesn't affect the web browsers' navigation bar...)

### Routing frameworks
Users can update and specifies the browser's URL, and create bookmarks using routing frameworks.


## Implementation process
1. Installation and module injection
2. Route(state) set-up, nesting routes
3. Link to another: <Link to> / <ui-sref>
4. Redirect
