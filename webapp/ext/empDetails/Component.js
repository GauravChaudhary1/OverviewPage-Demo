sap.ui.define(["sap/ovp/cards/custom/Component"], function (Component) {
	"use strict";

	/* component for custom card */
	return Component.extend("com.sap.ovp.ext.empDetails.Component", {
		// use inline declaration instead of component.json to save 1 round trip
		metadata: {
			properties: {
				"contentFragment": {
					"type": "string",
					"defaultValue": "com.sap.ovp.ext.empDetails.empDetails"
				},
				"headerFragment": {
					"type": "string",
					"defaultValue": "com.sap.ovp.ext.empDetails.empDetHead"
				},
				"footerFragment": {
					"type": "string",
					"defaultValue": ""
				}
			},

			version: "@version@",

			library: "sap.ovp",

			includes: [],

			dependencies: {
				libs: ["sap.m"],
				components: []
			},
			config: {},
			customizing: {
				"sap.ui.controllerExtensions": {
					"sap.ovp.cards.generic.Card": {
						controllerName: "com.sap.ovp.ext.empDetails.empDetails"
					}
				}
			}
		}
	});
});