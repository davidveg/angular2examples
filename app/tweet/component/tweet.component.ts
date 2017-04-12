

import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {TweetService} from '../service/tweet.service'
import {LikeComponent} from '../../like/component/like.component'
@Component({
    selector: 'tweet',
    template: `
    <h2>{{ title }}</h2>
    <ul class="media-list" *ngFor="#item of tweets">
        <li class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="{{item.imageUrl}}" alt="{{item.id}}">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{item.name}} <span class="gray_heading">{{item.id}}</span></h4>
                <h5>{{ item.content }}</h5>
                <div class="text_like">
                    <like [count] = "item.totalLikes" [isFavorite] = "item.liked" (change)= "onLikeChange($event)"></like>
                </div>
            </div>
        </li>
    </ul>
    `,
    styles: [`
        .media-body {
            text-weight : bold;
        }
        .media-object {
            border-radius: 15px;
        }
        .gray_heading {
            color: #ccc;
        }
        .text_like {
            font-size: large;
        }
    `],
    providers: [TweetService],
    directives: [LikeComponent]
})
export class TweetComponent {
    title = "Tweets";
    tweets;
    @Output() chanage = new EventEmitter();
    
    constructor(tweetService : TweetService){
        this.tweets = tweetService.getTweets();
    }

    onLikeChange($event) {
        console.log($event);
    }

}