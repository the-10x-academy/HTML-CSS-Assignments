// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.

// Example Quixote unit tests. We're using Mocha as our test framework and Chai for assertions.
// These tests check the our media object CSS, which is defined in `assignment2.css`.

(function () {
	"use strict";
  
	// Load an assertion library. You can use any assertion library you want. Here, we use a lightly-modified
	// version of Chai.
	var assert = require("../assert.js");
  
	// Load Quixote.
	var quixote = require("../../vendor/quixote.js");
  
	// Define a test suite using Mocha's standard `define` function.
	describe("Assignment-3", function () {
	  // Variables used by our tests. They're populated in the `before()` and `beforeEach()` functions.
	  var frame; // The Quixote test frame.
	  var container, frameDom; // The figure element inside the media object. (The icon.)
  
	  // Use Mocha's standard `before` function to set up our Quixote test frame before the tests run.
	  before(function (done) {
		// Create the frame and load our stylesheet.
		frame = quixote.createFrame(
		  {
			src: "/base/src/Assignment-3/assignment3.html", // the server under test must be proxied to localhost
			// The URL of our stylesheet. It's served by Karma and configured in `build/config/karma.conf.js`.
			stylesheet: "/base/src/Assignment-3/assignment3.css",
		  },
		  done
		); // This is an asynchronous operation, so we pass in Mocha's `done` callback.
	  });
  
	  // Use Mocha's standard `after` function to clean up our Quixote test frame after all the tests are done.
	  // We create and remove the test frame only once for the entire suite because it's a relatively expensive
	  // operation.
	  after(function () {
		frame.remove();
	  });
  
	  // Use Mocha's standard `beforeEach()` function to set up the HTML elements we'll use to test our
	  // media object CSS.
	  beforeEach(function (done) {
		frame.reload(done);
	  });
	  beforeEach(function () {
		// Reset Quixote's test frame to a pristine state. This ensures that any DOM changes we made in our
		// tests don't affect other tests. We do it in the `beforeEach()` function rather than `afterEach()`
		// to make debugging easier.
		frame.reset();
		frameDom = frame.toDomElement().contentDocument;
		container = frame.get("#container");
  
		// Get the media element's figure and content elements. Quixote gives us an object we can use to make
		// assertions about how the elements are styled.
	  });
  
	  // Our first test. We use Mocha's standard `it()` function to define the test. Here, we're checking that

	  it("container should have iframe for page", function () {
		assert.isTrue(
			frame.toDomElement().contentDocument.getElementsByTagName("iframe")
			  .length === 2
		  );
	  });
	  it("Page should have two Heading tags", function () {
		assert.isTrue(
		  frame.toDomElement().contentDocument.getElementsByTagName("h1")
			.length === 2
		);
	  });
	  it("Page should have two Paragraph tags'", function () {
		assert.isTrue(
		  frame.toDomElement().contentDocument.getElementsByTagName("p")
			.length === 2
		);
	  });
	  it("Page should have two Button tags", function () {
		assert.isTrue(
		  frame.toDomElement().contentDocument.getElementsByTagName("button")
			.length === 2
		);
	  });
	});
	function isExist(target) {
	  return target.length > 0 ? true : false;
	}
  })();
  