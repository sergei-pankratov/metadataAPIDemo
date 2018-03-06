({
    doInit: function (component, event, helper) {

        var sessionId;
        var vfOrigin = "https://" + component.get("v.vfHost");
        window.addEventListener("message", function (event) {
            if (event.origin !== vfOrigin) {
                // Not the expected origin: Reject the message!
                return;
            }
            var sessionId = event.data;
            component.set("v.showVFPage", false);
            component.set("v.sessionId", sessionId);
        }, true);
    },
})
