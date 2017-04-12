import {Input, Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {PasswordFieldValidator} from '../validators/passwordField.validator'
@Component({
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
})
export class ChangePasswordFormComponent {
    title = "Change Your Password";
    form: ControlGroup;

     constructor(fb: FormBuilder) {
         this.form = fb.group({
             oldpassword: ['', Validators.compose([Validators.required])],
             newpassword: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
             confirmpassword: ['', Validators.compose([Validators.required, PasswordFieldValidator.matchFields])]
         });
     }

     onSubmit() {
         if( this.form.value.oldpassword != "1234"){
            this.form.find('oldpassword').setErrors({
                invalidOldPassword: true
            });
         }else{
             alert("password successfuly changed.");
         }

        console.log(this.form.value);
     }
}