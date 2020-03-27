sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function(Controller, MessageToast, History, UIComponent) {
	"use strict";

	return Controller.extend("cromos.it.RelatorioClientes.controller.Create", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf cromos.it.RelatorioClientes.view.Create
		 */
			onInit: function() {
				
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.getRoute("create").attachPatternMatched(this._onCreateMatched, this);
				
		
			},
			
			_onCreateMatched: function (oEvent) {
			var m = this.getView().getModel();
			m.metadataLoaded().then(function(){
				var oContext = m.createEntry('/ClienteSet',
					{
						properties: {
							Telefone: '1234',
							Email: 'oi@email.com'
						}
					});

				this.getView().bindElement({
					path: oContext.getPath()
					//model: "",
				});
			}.bind(this));
		},
		
		onGravar: function(oEvent){
			var m = this.getView().getModel();
			this.getView().setBusy(true);
			
			m.submitChanges({
				success: function(oData){
					this.getView().setBusy(false);
					MessageToast.show("Cliente criado com sucesso");
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("object", {
						objectId: this.getView().getBindingContext().getObject().ID
					}, true);
					
				}.bind(this),
				error: function(){
					MessageToast.show("Aconteceu um erro");
					
					this.getView().setBusy(false);
				}
			
				
			});
		},
		
		onNavBack: function () {
			var m = this.getView().getModel();
			m.resetChanges();

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("worklist", {}, true);
			}

		},
		
		onCancelar: function(){
			this.onNavBack();
		}
			
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf cromos.it.RelatorioClientes.view.Create
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf cromos.it.RelatorioClientes.view.Create
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf cromos.it.RelatorioClientes.view.Create
		 */
		//	onExit: function() {
		//
		//	}

	});

});