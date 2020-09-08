/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"WebIDEGithubSAPTutorial/webidetutorial/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});