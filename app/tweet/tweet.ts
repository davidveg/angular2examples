
export class Tweet {
    id = 0;
    name = "undefined";
    imageUrl = "undefined";
    content = "undefined";
    totalLikes = 0;
    liked = false;

    constructor(id, name: string, imageUrl: string, content: string , totalLikes, liked: boolean) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl + '?' + this.id;
        this.content = content;
        this.totalLikes = totalLikes;
        this.liked = liked;
    }
}