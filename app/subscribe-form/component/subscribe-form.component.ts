import {Component} from 'angular2/core'

@Component({
    selector : 'subscribe-form',
    templateUrl: 'app/subscribe-form/template/subscribe-form.template.html',
    styles : [`
        .ng-touched.ng-invalid {
            border : 1px solid red;
        }
    `]
})
export class SubscribeFormComponent {
    title = "Formulario"; 
    onSubmit(form) {
        console.log(form);
    }

}