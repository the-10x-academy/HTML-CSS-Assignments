HTML/CSS Unit Test
===========

About the Code
-----------------

This code demonstrates CSS and JavaScript tests. It uses:
 
* [Karma](http://karma-runner.github.io) for cross-browser testing.
* [Mocha](https://mochajs.org/) for running tests.
* [Chai](http://chaijs.com/) for assertions.
* [Quixote](https://github.com/jamesshore/quixote) for testing CSS.

The sample application uses Nicole Sullivan's [media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) to display an icon with some text. Clicking the icon causes the text to appear and disappear.

Important files:

* [`src/assignment1_test.js`](src/assignment1_test.js): CSS tests

* [`src/index.html`](src/index.html): HTML code

* [`src/screen.css`](src/screen.css): CSS code

* [`build/config/karma.conf.js`](build/config/karma.conf.js): Karma configuration. Look for the `// QUIXOTE` comment to see how to make Karma serve CSS files.
  

Running the Tests
-----------------

Before running the tests:

1. Install [Node.js](http://nodejs.org/download/).
2. Install Quixote: `npm install quixote`
3. Install Jake: `npm install -g jake`
4. Install all required packages: `npm i`
5. Fixing audit issues: `npm audit fix`

To run the tests:

1. Start the Karma server: `npm run dev`

	1.1 Replace `./jake.sh karma` (Unix/Mac) and `./watch.sh` in package.json file 
```
"scripts": {
    "dev": "./jake.sh karma & ./watch.sh loose=true"
  },

```
Note: No change needed for Windows Environment

2. Open `http://localhost:9876` in one or more browsers.


To run the app:

1. Run application in terminal using: `./jake loose=true` for windows and  `./jake.sh loose=true` for  (Unix/Mac)
2. Open `http://localhost:8080` in a browser.
3. Run `./jake.sh loose=true` (Unix/Mac) or `jake loose=true` (Windows) every time you want to build and test. Alternatively, use `./watch.sh loose=true` (Unix/Mac) or `watch loose=true` (Windows) to automatically run `jake` whenever files change.



Contents
--------

This repository consists of the following directories:

* `build`: Build automation.
	* `build/config`: Build configuration.
	* `build/scripts`: Build scripts. Don't run them directly.
	* `build/util`: Modules used by the build scripts.
* `node_modules`: npm dependencies (used by the build).
* `src`: Front-end code.
* `vendor`: Client code dependencies.

In the repository root, you'll find the following scripts. For each script, there's a `.sh` version for Unix and Mac and a `.bat` version for Windows:

* `jake`: Build and test automation.
* `watch`: Automatically runs `jake` when any files change. Any arguments are passed through to jake.

For all these scripts, use `-T` to see the available build targets and their documentation. If no target is provided, the script will run `default`. Use `--help` for additional options.

The scripts have these additional options:

* `loose=true`: Disable strict browser and version checks.
* `capture=Firefox,Safari,etc`: Automatically launch, use, and quit the requested browsers. You can use this instead of running `./jake.sh karma` and manually starting the browsers yourself. Note that the browser name is case-sensitive. The Firefox launcher is included; if you need additional launchers, you'll need to install them; e.g., `npm install karma-safari-launcher`.



License
-------

MIT License. See `LICENSE.TXT`.