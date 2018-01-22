Angular Drum Machine
--------------------

Just a little experiment with [AngularJS](https://github.com/angular/angular.js
"AngularJS") and HTML5 Audio (via [howler.js](https://github.com/goldfire/howler.js "howler.js")). Currently using Angular 1.2.

At one point, there were plans to upgrade this to later versions of Angular and even to port it to React. But, as this was only ever a fun proof-of-concept project, I never found time for those upgrades. I'll still review/accept any PRs if someone wants to take a crack at it.

DEMO: [http://drums.dojosto.com](http://drums.dojosto.com)

![Drum Machine Screenshot](https://raw.github.com/dougjohnston/angular-drum-machine/master/screenshot.png)

Installation
============

Run `npm install` to install Bower, Grunt and other local dependencies.
From `public/assets`, run `bower install` to install runtime dependencies.

Run `grunt` to fire up a server at http://localhost:8080.

Testing
=======

Run `grunt test` to fire up Karma and watch for changes.
