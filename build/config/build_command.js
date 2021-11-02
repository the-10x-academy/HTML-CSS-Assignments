// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.

// A cross-platform mechanism for determining how to run the build.
// There's no Quixote-specific configuration in this file.

(function() {
	"use strict";

	var UNIX_BUILD_COMMAND = "./jake.sh run";
	var UNIX_Test_COMMAND = "./jake.sh loose=true ";
	var WINDOWS_BUILD_COMMAND = "jake.bat run";
	var WINDOWS_Test_COMMAND = "jake loose=true";

	var os = require("os");

	exports.get = function() {
		return os.platform() === "win32" ? WINDOWS_BUILD_COMMAND : UNIX_BUILD_COMMAND;
	};
	exports.getTestCommand = function() {
		return os.platform() === "win32" ? WINDOWS_Test_COMMAND : UNIX_Test_COMMAND;
	};

}());