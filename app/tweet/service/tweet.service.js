System.register(['../tweet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tweet_1;
    var TweetService;
    return {
        setters:[
            function (tweet_1_1) {
                tweet_1 = tweet_1_1;
            }],
        execute: function() {
            class TweetService {
                getTweets() {
                    return [
                        new tweet_1.Tweet('@windwardstudios', 'WindWardStudios', 'http://lorempixel.com/100/100/people/', 'Looking for a better company reporting or docgen app?', 0, false),
                        new tweet_1.Tweet('@angularjs_news', 'AngularJS News', 'http://lorempixel.com/100/100/people/', 'Right Relevance: Influencers, Articles and Conversations', 5, true),
                        new tweet_1.Tweet('@3rd_wave', 'UX & BootStrap', 'http://lorempixel.com/100/100/people/', '10 Reasons Why Projects Fail', 1, true)
                    ];
                }
            }
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map