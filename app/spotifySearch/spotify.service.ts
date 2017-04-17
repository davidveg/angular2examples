import {Injectable, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Artist} from './spotifyArtist'
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private _url = "https://api.spotify.com/v1/search?type=artist&q=";
    constructor(private _http: Http){}

    searchArtists(searchTerm : string) : Observable <any> {
                var searchURL = URL + searchTerm;
                return this._http.get(this._url + searchTerm)
                        .map((res: Response) => res.json())
                        .map((res : Artist) => res.artists.items)
    }
}