


import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector : 'likestack',
    template: `
        <div class="container">
        <i class="glyphicon glyphicon-menu-up vote-button" 
        [class.highlighted] = "myVote == 1"
        (click) = "upVote()"></i>
        <span class="counter">{{ voteCount + myVote }}</span>
        <i class="glyphicon glyphicon-menu-down vote-button" 
        [class.highlighted] = "myVote == -1"
        (click) = "downVote()"></i>
        </div>
    `,
    styles: [`
        .container {
            width: 20px;
            text-align: center;
            color: #999;
            font-size: x-large;
        }
        .vote-button {
            cursor: pointer;
        }

        .counter {
            font-size: 1.2em;
            padding-left: 1px;
        }
        .highlighted {
            color: orange;
        }
    `]
})
export class LikeStackComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;
    @Output() vote = new EventEmitter();

    upVote() {
        if(this.myVote == 1)
            return;
        this.myVote++;
        this.vote.emit({ myVote: this.myVote})
    }

    downVote() {
        if(this.myVote == -1)
            return;
        this.myVote--;
        this.vote.emit({ myVote: this.myVote})
    }
}