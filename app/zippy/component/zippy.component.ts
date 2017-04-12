
import {Component, Input} from 'angular2/core'

@Component({
    selector: 'zippy',
    template:`
    <div class="panel panel-default">
    <div class="panel-heading" (click)="toggle()">
        <span>{{title}}</span>
        <i class="pull-right glyphicon"
            [ngClass] = "{
                'glyphicon-chevron-down':  !isExpanded,
                'glyphicon-chevron-up' : isExpanded
            }">
        </i>
    </div>
    <div *ngIf="isExpanded" class="panel-body">
        <ng-content></ng-content>
    </div>
    </div>
    `,
    styles: [`
        .panel-heading {
            font-size: large;
            cursor:pointer;
            font-weight: bold;
        }
    `]
})
export class ZippyComponent {
    @Input() title: string;
    isExpanded = false;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}