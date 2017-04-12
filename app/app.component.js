System.register(['angular2/core', './course/component/course.component', './author/component/author.component', './favorite/component/favorite.component', './like/component/like.component', './like_stack/component/like.stack.component', './tweet/component/tweet.component', './zippy/component/zippy.component', './subscribe-form/component/subscribe-form.component', './signup-form/component/signup-form.component', './changepwd-form/component/changepwd-form.component'], function(exports_1, context_1) {
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
    var core_1, course_component_1, author_component_1, favorite_component_1, like_component_1, like_stack_component_1, tweet_component_1, zippy_component_1, subscribe_form_component_1, signup_form_component_1, changepwd_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (like_stack_component_1_1) {
                like_stack_component_1 = like_stack_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (subscribe_form_component_1_1) {
                subscribe_form_component_1 = subscribe_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (changepwd_form_component_1_1) {
                changepwd_form_component_1 = changepwd_form_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor() {
                    this.title = "Hello Angular";
                    this.post = {
                        title: "Title",
                        likes: 10,
                        isFavorite: false,
                        myVote: 0
                    };
                }
                onFavoriteChange($event) {
                    console.log($event);
                }
                onVote($event) {
                    console.log($event);
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `
               <!-- <h1>{{title}}</h1>
               <favorite [isFavorite]="post.isFavorite" (change)= "onFavoriteChange($event)"></favorite>
               <h2>Courses</h2>
               <courses></courses>
               <h2>Authors</h2>
               <authors></authors>
               <like [count] = "post.likes" [isFavorite] = "post.isFavorite" (change)= "onFavoriteChange($event)"></like>
               <br />
               <likestack [voteCount] = "post.likes" [myVote] = post.myVote (vote) = "onVote($event)" ></likestack>
               <tweet></tweet>
               <zippy title = "This is a Title !">
                    This is a body !
               </zippy>
                <zippy title = "This is another Title !">
                    This is another body !
               </zippy>

               <br />
               <subscribe-form>
               </subscribe-form>  
               <signup-form></signup-form> -->
               <changepwd-form></changepwd-form>
               `,
                    directives: [course_component_1.CourseComponent, author_component_1.AuthorComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, like_stack_component_1.LikeStackComponent, tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent, subscribe_form_component_1.SubscribeFormComponent, signup_form_component_1.SignUpFormComponent, changepwd_form_component_1.ChangePasswordFormComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map