import {Control} from 'angular2/common'


export class PasswordFieldValidator {
    static matchFields(control: Control) {
        if(control.value != control.root.value.newpassword){
             return { matchFields: true};
        }
        return null;
    }
}