(function () {
	"use strict";

	/* controller for custom card  */

	sap.ui.controller("com.sap.ovp.ext.approvals.approval", {

		onInit: function () {
			this.oComponentData = this.getOwnerComponent().getComponentData();
			this.oModel = this.getOwnerComponent().getComponentData().model;
			this.maxRows = this.oComponentData.settings.maxrows;
			this.oModel.setSizeLimit(this.maxRows);
			this._setCardHeaderTexts();
		},

		onAfterRendering: function () {

		},

		onExit: function () {

		},
		_setCardHeaderTexts: function () {
			this.byId("card02Original--ovpHeaderTitle").setText(this.oComponentData.settings.title);
			this.byId("card02Original--SubTitle-Text").setText(this.oComponentData.settings.subTitle);
			var that = this;
			// 			var text = that.maxRows + " of " + 8;
			// 			this.byId("card02Original--ovpHeaderCount").setText(text);
			this.oModel.read("/pendingTasksSet/$count", {
				async: true,
				success: function (oData, response) {
					if (Number(response.body) > this.maxRows) {
						var text = that.maxRows + " of " + response.body;
						this.byId("card02Original--ovpHeaderCount").setText(text);
					}
				}.bind(this)
			});
		},
		formatCounts: function (records) {
			var record = records + " Waiting Approvals";
			return record;
		},
		handlePress: function (sUrl) {
			if (sUrl !== "") {
				sap.m.URLHelper.redirect(sUrl, true);
			} else {
				var oCrossNavigation = sap.ushell.Container.getService("CrossApplicationNavigation");
				oCrossNavigation.toExternal({
					target: {
						shellHash: "Action-tortademo"
					}
				})
			}
		}

	});
})();