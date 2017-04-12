System.register(['angular2/core', '../service/tweet.service', '../../like/component/like.component'], function(exports_1, context_1) {
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
    var core_1, tweet_service_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            let TweetComponent = class TweetComponent {
                constructor(tweetService) {
                    this.title = "Tweets";
                    this.chanage = new core_1.EventEmitter();
                    this.tweets = tweetService.getTweets();
                }
                onLikeChange($event) {
                    console.log($event);
                }
            };
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], TweetComponent.prototype, "chanage", void 0);
            TweetComponent = __decorate([
                core_1.Component({
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
                    providers: [tweet_service_1.TweetService],
                    directives: [like_component_1.LikeComponent]
                }), 
                __metadata('design:paramtypes', [tweet_service_1.TweetService])
            ], TweetComponent);
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map