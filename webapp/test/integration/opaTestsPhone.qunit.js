/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"sap/btp/sapui52/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});