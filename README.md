
**Warning: This is work in progress, APIs are subject to changes 
until Jocly is released as version 1.0.0**

Jocly is a library and set of tools to integrate boards games into Web environments.
It comes with a large collection of abstract strategy games, 2D and 3D user interface,
artificial intelligence to play against.

Demos
-----

[Controlled interface](https://mi-g.github.io/jocly/examples/browser/control.html) for playing Chess.
Click _**Other Jocly games**_ to switch to other games.

Simple human vs computer: [Classic chess](https://mi-g.github.com/jocly/examples/browser/simple.html?classic-chess),
[Circular chess](https://mi-g.github.com/jocly/examples/browser/simple.html?circular-chess),
[Multi layers chess](https://mi-g.github.com/jocly/examples/browser/simple.html?raumschach),
[Hexagonal chess](https://mi-g.github.com/jocly/examples/browser/simple.html?glinski-chess),
[Chinese chess](https://mi-g.github.com/jocly/examples/browser/simple.html?xiangqi),
[Middle-age chess](https://mi-g.github.com/jocly/examples/browser/simple.html?courier-chess),
[Scrum](https://mi-g.github.com/jocly/examples/browser/simple.html?scrum)

Or see and try [all available games](https://mi-g.github.com/jocly/examples/browser/multiple.html)

Building
--------

- install the *node.js* environment (using [nvm](https://github.com/creationix/nvm) is probably a good idea)
- install *gulp*: `npm install -g gulp`
- install [git](https://git-scm.com/downloads)
- clone Jocly from *github*: `git clone https://github.com/mi-g/jocly.git`
- enter the `jocly` directory
- download required modules: `npm install`
- build: `gulp build`
- `dist/browser` contains the javascript library to build web applications, `dist/node` is the module to be used for node.js applications

Using Jocly in a Web page
-------------------------

After building Jocly, copy the `dist/browser/` directory as `jocly/` into your project filesystem.

Insert this line to your HTML source code:
````
<script src="jocly/jocly.js"></script>
````

You are now ready to use the Jocly API through the `Jocly` global object.

Using Jocly in a node.js application
------------------------------------

After building Jocly, the `dist/node/` directory as the Jocly module:

````Javascript
const Jocly = require("../jocly/dist/node");
````

Or, you can figure out how to use [`npm link`](https://docs.npmjs.com/cli/link) and just do:
````Javascript
const Jocly = require("jocly");
````

You are now ready to use the Jocly API through the `Jocly` entry point.

API Documentation
-----------------

Jocly offers two distinct APIs:
- the [Application API](https://github.com/mi-g/jocly/wiki/Application-API) to make Web applications
- the [Game API](https://github.com/mi-g/jocly/wiki/Game-API) to create games to run with Jocly features
