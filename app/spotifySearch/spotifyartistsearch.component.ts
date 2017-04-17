import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http'
import {FORM_PROVIDERS, FormBuilder, Validators, ControlGroup} from 'angular2/common'
import {SpotifyService} from './spotify.service'
import {Artist} from './spotifyArtist'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'spotify-search-artists',
    template: `
    <form [ngFormModel] = "searchForm">
        <div class="form-group">
            <label for="search">Search For Artists on Spotify</label> 
            <input id="search" ngControl="search" type="text" class="form-control" placeholder="Search for artists...">
        </div>
    </form>
    <div *ngFor="#result of results | async">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4><a href="{{result.uri}}">{{result.name}}</a></h4>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-6">
                        <img class="artists-img" [src]="result?.images[0]?.url" style="width: 100%; max-width: 150px;">
                    </div>
                    <div class="col-xs-6">
                        Total Followers : {{ result.followers.total}}<br/>
                        Populatiry Score: {{ result.popularity}}
                        <div>
                            <h5>Genres:</h5>
                            <ul *ngFor="#genre of result.genres">
                                <li>{{ genre }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div *ngIf="isLoading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    `,
    styles : [`
        .panel-default {
            max-width: 500px;
        }
        .artists-img{
            border-radius: 15%;
        }
        #search {
            max-width: 500px;
        }
    `],
    providers : [Http, FORM_PROVIDERS, HTTP_PROVIDERS, SpotifyService]
})
export class SpotifyArtistSearchComponent implements OnInit{ 
    
    searchForm : ControlGroup;
    results : Observable<any>
    isLoading = true;

    ngOnInit() {
        const URL = 'https://api.spotify.com/v1/search?type=artist&q=';
        this.searchForm = this._fb.group({
            'search': ['', Validators.compose([
                Validators.required
                ])]
        }); 

        this.results = this.searchForm.controls.search.valueChanges
            .filter(text => text.length > 4)
            .debounceTime(500)
            .distinctUntilChanged()
            .flatMap(res => this._spotifyService.searchArtists(this.searchForm.controls.search.value));
        
        this.results.subscribe(
            data => {
                    this.isLoading = false;
                    console.log(data);
            });
    }

    constructor(private _http: Http, private _fb: FormBuilder, private _spotifyService : SpotifyService){
    }
}