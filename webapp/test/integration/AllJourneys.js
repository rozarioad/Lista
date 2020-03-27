/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"undefined/RelatorioClientes/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"undefined/RelatorioClientes/test/integration/pages/Worklist",
	"undefined/RelatorioClientes/test/integration/pages/Object",
	"undefined/RelatorioClientes/test/integration/pages/NotFound",
	"undefined/RelatorioClientes/test/integration/pages/Browser",
	"undefined/RelatorioClientes/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: ".RelatorioClientes.view."
	});

	sap.ui.require([
		"undefined/RelatorioClientes/test/integration/WorklistJourney",
		"undefined/RelatorioClientes/test/integration/ObjectJourney",
		"undefined/RelatorioClientes/test/integration/NavigationJourney",
		"undefined/RelatorioClientes/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});