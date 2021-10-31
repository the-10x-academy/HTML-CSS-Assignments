// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.

// Example Quixote unit tests. We're using Mocha as our test framework and Chai for assertions.
// These tests check the our media object CSS, which is defined in `assignment2.css`.

(function() {
	"use strict";

	// Load an assertion library. You can use any assertion library you want. Here, we use a lightly-modified
	// version of Chai.
	var assert = require("../assert.js");

	// Load Quixote.
	var quixote = require("../../vendor/quixote.js");

	// Define a test suite using Mocha's standard `define` function.
	describe("Assignment-1", function() {

		// Variables used by our tests. They're populated in the `before()` and `beforeEach()` functions.
		var frame;      // The Quixote test frame.
		var container, ul, li, h1, img;     // The figure element inside the media object. (The icon.)
		var content, ul_ele, img_ele, li_ele;    // The content element inside the media object. (The paragraph.)

		// Use Mocha's standard `before` function to set up our Quixote test frame before the tests run.
		before(function(done) {
			// Create the frame and load our stylesheet.
			frame = quixote.createFrame({
				src: "/base/src/Assignment-1/assignment1.html",     // the server under test must be proxied to localhost
				// The URL of our stylesheet. It's served by Karma and configured in `build/config/karma.conf.js`.
				stylesheet: "/base/src/Assignment-1/assignment1.css"
			}, done);   // This is an asynchronous operation, so we pass in Mocha's `done` callback.
		});

		// Use Mocha's standard `after` function to clean up our Quixote test frame after all the tests are done.
		// We create and remove the test frame only once for the entire suite because it's a relatively expensive
		// operation.
		after(function() {
			frame.remove();
		});

		// Use Mocha's standard `beforeEach()` function to set up the HTML elements we'll use to test our
		// media object CSS.
		beforeEach(function(done) {
			frame.reload(done);
		});
			  beforeEach(function() {
				
			// Reset Quixote's test frame to a pristine state. This ensures that any DOM changes we made in our
			// tests don't affect other tests. We do it in the `beforeEach()` function rather than `afterEach()`
			// to make debugging easier.
			frame.reset();
			ul_ele = frame.toDomElement().contentDocument.getElementsByTagName("ul");		// get the first <p> tag in this window
			img_ele = frame.toDomElement().contentDocument.getElementsByTagName("img");		// get the first <p> tag in this window
			li_ele = frame.toDomElement().contentDocument.getElementsByTagName("li");		// get the first <p> tag in this window
			content = quixote.elementFromDom(ul_ele);
			container = frame.get("#container");
			h1 = frame.get("h1");

	
			// Get the media element's figure and content elements. Quixote gives us an object we can use to make
			// assertions about how the elements are styled.
			
		});

		// Our first test. We use Mocha's standard `it()` function to define the test. Here, we're checking that
		// the `figure` element in our media element is positioned to the left.
		it("check container should have un-ordered list", function() {
			// Check that the left edge of the figure is the same as the left edge of the test frame's <body> element.
			 assert.isTrue(isExist(ul_ele));
		});
		it("check container should have un-ordered list item", function() {
			// Check that the left edge of the figure is the same as the left edge of the test frame's <body> element.
			assert.isTrue(isExist(li_ele));


		});
		it("check container should have image", function() {
			// Check that the left edge of the figure is the same as the left edge of the test frame's <body> element.
			assert.isTrue(isExist(img_ele));

		});
		it("check container should have heading", function() {
			// Check that the left edge of the figure is the same as the left edge of the test frame's <body> element.
			container.contains(h1);
		});
	});
	function isExist(target) {
		return target.length>0? true: false;
	}
}());