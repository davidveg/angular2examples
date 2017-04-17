
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class GitHubService {
    private _auth_token ="?access_token=0aa60eb3b4c6fcbed52892bc54fd53542d63ce85";
    private _base_url = "https://api.github.com/users/";
    private _url_followers = "/followers"

    constructor(private _http : Http){}

    getUser(username : string) : Observable <any> {
            return   this. _http.get(this._base_url + username + this._auth_token)
                    .map((res  : Response) => res.json());
    }

    getFollowers(username : string) : Observable<any> {
        return this._http.get(this._base_url + username + this._url_followers)
            .map((res : Response) => res.json());
    }

}