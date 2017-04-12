System.register(['angular2/core', 'angular2/common', '../validators/passwordField.validator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, passwordField_validator_1;
    var ChangePasswordFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordField_validator_1_1) {
                passwordField_validator_1 = passwordField_validator_1_1;
            }],
        execute: function() {
            let ChangePasswordFormComponent = class ChangePasswordFormComponent {
                constructor(fb) {
                    this.title = "Change Your Password";
                    this.form = fb.group({
                        oldpassword: ['', common_1.Validators.compose([common_1.Validators.required])],
                        newpassword: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(5)])],
                        confirmpassword: ['', common_1.Validators.compose([common_1.Validators.required, passwordField_validator_1.PasswordFieldValidator.matchFields])]
                    });
                }
                onSubmit() {
                    if (this.form.value.oldpassword != "1234") {
                        this.form.find('oldpassword').setErrors({
                            invalidOldPassword: true
                        });
                    }
                    else {
                        alert("password successfuly changed.");
                    }
                    console.log(this.form.value);
                }
            };
            ChangePasswordFormComponent = __decorate([
                core_1.Component({
                    selector: 'changepwd-form',
                    templateUrl: 'app/changepwd-form/template/changepwd-form.template.html',
                    styles: [`
        .panel-heading{
            font-weight: bold;
            font-size: large;
        }
        .ng-touched.ng-invalid {
            border : 1px solid red;
        }
    `]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder])
            ], ChangePasswordFormComponent);
            exports_1("ChangePasswordFormComponent", ChangePasswordFormComponent);
        }
    }
});
//# sourceMappingURL=changepwd-form.component.js.map