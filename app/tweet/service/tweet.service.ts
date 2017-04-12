
import {Tweet} from '../tweet'
export class TweetService {

    getTweets() : Tweet[]{
        return [
            new Tweet('@windwardstudios', 'WindWardStudios', 'http://lorempixel.com/100/100/people/', 'Looking for a better company reporting or docgen app?', 0, false),
            new Tweet('@angularjs_news', 'AngularJS News', 'http://lorempixel.com/100/100/people/', 'Right Relevance: Influencers, Articles and Conversations', 5, true),
            new Tweet('@3rd_wave', 'UX & BootStrap', 'http://lorempixel.com/100/100/people/', '10 Reasons Why Projects Fail', 1, true)
        ]
    }
}