sap.ui.define([
    'sap/ui/model/json/JSONModel'
], function (JSONModel) {
    'use strict';

    return {
        createRecipient: function () {
            const oData = {
                recipient: {
                    name: "Modelo Principal World Odata"
                }
            };
            return new JSONModel(oData);
        }
    }
});