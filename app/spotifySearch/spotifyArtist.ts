export class Artist {
    id : number;
    genres : string[];
    images : {width : string; height : string; uri : string}[]
    name : string;
    popularity: number;
    type : string;
    uri : string;
    followers : {href : any, total : number}
}