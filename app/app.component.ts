import {Component} from 'angular2/core';
import {CourseComponent} from './course/component/course.component';
import {AuthorComponent} from './author/component/author.component';
import {FavoriteComponent} from './favorite/component/favorite.component';
import {LikeComponent} from './like/component/like.component'
import {LikeStackComponent} from './like_stack/component/like.stack.component'
import {TweetComponent} from './tweet/component/tweet.component'
import {ZippyComponent} from './zippy/component/zippy.component'
import {SubscribeFormComponent} from './subscribe-form/component/subscribe-form.component'
import {SignUpFormComponent} from './signup-form/component/signup-form.component'
import {ChangePasswordFormComponent} from './changepwd-form/component/changepwd-form.component'
@Component({
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
    directives: [CourseComponent, AuthorComponent, FavoriteComponent, LikeComponent, LikeStackComponent, TweetComponent, ZippyComponent, SubscribeFormComponent, SignUpFormComponent, ChangePasswordFormComponent]
})
export class AppComponent { 
    title = "Hello Angular";

    post = {
        title: "Title",
        likes : 10,
        isFavorite: false,
        myVote: 0
    }

    onFavoriteChange($event) {
        console.log($event);
    }

    onVote($event) {
        console.log($event);
    }
}