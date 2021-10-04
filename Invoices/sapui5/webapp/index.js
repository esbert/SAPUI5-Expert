sap.ui.define([
    'sap/m/Text',
    'sap/ui/core/mvc/XMLView'
], function (Text, XMLView) {
    alert("UI5 is Ready ");
    XMLView.create({
        viewName:"logaligroup.sapui5.view.App"
    }).then(function (oView) {
       oView.placeAt("content"); 
    });
 /**
    new Text({
        text: "Hello World !!!"
    }).placeAt("content");


 */   
 
});