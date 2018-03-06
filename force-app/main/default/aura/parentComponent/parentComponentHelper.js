({
    //##############dummy methods
    ////////// in order for callbacks to work aura:method has to be called from parent component HELPER
    loadStrategyNamesDummy: function (cmp, event, helper) {

        var cmpEvent = $A.get("e.c:mdLoadStrategyNamesRequest");
        cmpEvent.setParams({
            "callback": function (strategyNames) {
                console.log(strategyNames);
                cmp.set("v.strategyNames", strategyNames);
            }
        });

        cmpEvent.fire();



    },

    getStrategyDummy: function (cmp, event, helper) {
        var cmpEvent = $A.get("e.c:mdGetStrategyRequest");
        cmpEvent.setParams({
            "strategyName": cmp.get("v.curStrategyName"),
            "callback": function (strategyXML) {
                console.log(strategyXML);
                cmp.set("v.curStrategyXML", strategyXML);
            }
        });

        cmpEvent.fire();
    },

    createOrUpdateStrategyDummy: function (cmp, event, helper) {
        var cmpEvent = $A.get("e.c:mdCreateOrUpdateStrategyRequest");
        cmpEvent.setParams({
            "strategyXML": cmp.get("v.curStrategyXML"),
            "callback": function () {
                alert('success');
            }
        });

        cmpEvent.fire();
    },

    deleteStrategyDummy: function (cmp, event, helper) {
        var cmpEvent = $A.get("e.c:mdDeleteStrategyRequest");
        cmpEvent.setParams({
            "strategyName": cmp.get("v.curStrategyName"),
            "callback": function () {
                alert('success');
            }
        });

        cmpEvent.fire();
    },
    renameStrategyDummy: function (cmp, event, helper) {
        var cmpEvent = $A.get("e.c:mdRenameStrategyRequest");
        cmpEvent.setParams({
            "strategyXML": cmp.get("v.curStrategyXML"),
            "newStrategyName": cmp.get("v.newStrategyName"),
            "callback": function () {
                alert('success');
            }
        });

        cmpEvent.fire();
    },
    copyStrategyDummy: function (cmp, event, helper) {
        var cmpEvent = $A.get("e.c:mdCopyStrategyRequest");
        cmpEvent.setParams({
            "strategyXML": cmp.get("v.curStrategyXML"),
            "newStrategyName": cmp.get("v.newStrategyName"),
            "callback": function () {
                alert('success');
            }
        });

        cmpEvent.fire();
    },

    //////end of dummies for debugging
})
