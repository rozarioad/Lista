sap.ui.define([
		"cromos/it/RelatorioClientes/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("cromos.it.RelatorioClientes.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);