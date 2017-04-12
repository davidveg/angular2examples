


import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'like',
    template: `
<i class="glyphicon glyphicon-heart"
    [class.highlighted] = "isFavorite"
    (click)="onClick()"> 
    <span>{{ count }} </span>
</i>
    `,
styles: [`
    .glyphicon-heart {
        color: #ccc;
         cursor: pointer;
    }
    .highlighted {
        color: deeppink;
    }
`]

})
export class LikeComponent {

    @Input() isFavorite = false;
    @Input() count = 0;

    onClick($event) {
        this.isFavorite = !this.isFavorite;
        this.count += this.isFavorite ? 1 : -1
    }
}