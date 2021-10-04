sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'logaligroup/sapui5/model/models',
    'sap/ui/model/resource/ResourceModel'
], function(Controller,MessageToast,JSONModel,models,ResourceModel) {
    'use strict';
    return Controller.extend("logaligroup.sapui5.controller.App", {
        onInit: function() {
            const oData = {
                recipient: {
                    name:"World Odata"
                }
            };
            // set i18n model 
            const oModel = new JSONModel(oData);
//            this.getView().setModel(oModel);
            this.getView().setModel(models.createRecipient());
            const i18nModel = new ResourceModel({ bundleName : "logaligroup.sapui5.i18n.i18n"});
            this.getView().setModel(i18nModel, "i18n");

        },
        onShowHello: function() {
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient  = this.getView().getModel().getProperty("/recipient/name");
            let sMsg = oBundle.getText("helloMsg", [sRecipient,])
            MessageToast.show(sMsg + " desde el controlador");

        }
    });
});