System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordFieldValidator;
    return {
        setters:[],
        execute: function() {
            class PasswordFieldValidator {
                static matchFields(control) {
                    if (control.value != control.root.value.newpassword) {
                        return { matchFields: true };
                    }
                    return null;
                }
            }
            exports_1("PasswordFieldValidator", PasswordFieldValidator);
        }
    }
});
//# sourceMappingURL=passwordField.validator.js.map