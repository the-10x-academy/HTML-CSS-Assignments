HTML/CSS Unit Test
===========

About the Code
-----------------

This code demonstrates CSS and JavaScript tests. It uses:
 
* [Karma](http://karma-runner.github.io) for cross-browser testing.
* [Mocha](https://mochajs.org/) for running tests.
* [Chai](http://chaijs.com/) for assertions.
* [Quixote](https://github.com/jamesshore/quixote) for testing CSS.


Important files:

* [`src/Assignment[number]_test.js`](src/Assignment[number]_test.js): CSS tests

* [`src/Assignment[number]].html`](src/Assignment[number].html): HTML code

* [`src/Assignment[number].css`](src/Assignment[number].css): CSS code

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

1. Run application using live Server VsCode extension.

Note: Install Live server extension for VsCode if not installed

2. Select/Highlight the `src` folder by clicking once. 

3. click on `Go Live` option in righ-bottom corner of Vscode. 

Note: If `Go Live` option not visible, please disable and then enable the Live server extension in VsCode.

4. Open Web App in browser using correct path of HTML for relevant Assignment. For Example

To run Assignment 1, Url would be:
 http://127.0.0.1:5500/{Relative path}/src/Assignment-1/assignment1.html


5. Run `node_modules/.bin/karma run -- --grep="Assignment-1"` every time you want to build and test `Assignemnt 1`. 

6. Run `node_modules/.bin/karma run -- --grep="Assignment-2"` every time you want to build and test `Assignemnt 2`. 

7. Run `node_modules/.bin/karma run -- --grep="Assignment-3"` every time you want to build and test `Assignemnt 3`. 

8. Run `node_modules/.bin/karma run -- --grep="Assignment-4"` every time you want to build and test `Assignemnt 4`. 

9. Run `node_modules/.bin/karma run -- --grep="Assignment-5"` every time you want to build and test `Assignemnt 5`.

10. Run `node_modules/.bin/karma run -- --grep="Assignment-6"` every time you want to build and test `Assignemnt 6`. 


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