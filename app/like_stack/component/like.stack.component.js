System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LikeStackComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let LikeStackComponent = class LikeStackComponent {
                constructor() {
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                upVote() {
                    if (this.myVote == 1)
                        return;
                    this.myVote++;
                    this.vote.emit({ myVote: this.myVote });
                }
                downVote() {
                    if (this.myVote == -1)
                        return;
                    this.myVote--;
                    this.vote.emit({ myVote: this.myVote });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], LikeStackComponent.prototype, "voteCount", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], LikeStackComponent.prototype, "myVote", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], LikeStackComponent.prototype, "vote", void 0);
            LikeStackComponent = __decorate([
                core_1.Component({
                    selector: 'likestack',
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
                }), 
                __metadata('design:paramtypes', [])
            ], LikeStackComponent);
            exports_1("LikeStackComponent", LikeStackComponent);
        }
    }
});
//# sourceMappingURL=like.stack.component.js.map