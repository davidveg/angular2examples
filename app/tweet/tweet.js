System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tweet;
    return {
        setters:[],
        execute: function() {
            class Tweet {
                constructor(id, name, imageUrl, content, totalLikes, liked) {
                    this.id = 0;
                    this.name = "undefined";
                    this.imageUrl = "undefined";
                    this.content = "undefined";
                    this.totalLikes = 0;
                    this.liked = false;
                    this.id = id;
                    this.name = name;
                    this.imageUrl = imageUrl + '?' + this.id;
                    this.content = content;
                    this.totalLikes = totalLikes;
                    this.liked = liked;
                }
            }
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=tweet.js.map