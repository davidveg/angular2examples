System.register(['angular2/core', 'angular2/http', 'angular2/common', './spotify.service', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/filter', 'rxjs/add/observable/fromEvent', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/distinctUntilChanged'], function(exports_1, context_1) {
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
    var core_1, http_1, common_1, spotify_service_1;
    var SpotifyArtistSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (spotify_service_1_1) {
                spotify_service_1 = spotify_service_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {}],
        execute: function() {
            let SpotifyArtistSearchComponent = class SpotifyArtistSearchComponent {
                constructor(_http, _fb, _spotifyService) {
                    this._http = _http;
                    this._fb = _fb;
                    this._spotifyService = _spotifyService;
                    this.isLoading = true;
                }
                ngOnInit() {
                    const URL = 'https://api.spotify.com/v1/search?type=artist&q=';
                    this.searchForm = this._fb.group({
                        'search': ['', common_1.Validators.compose([
                                common_1.Validators.required
                            ])]
                    });
                    this.results = this.searchForm.controls.search.valueChanges
                        .filter(text => text.length > 4)
                        .debounceTime(500)
                        .distinctUntilChanged()
                        .flatMap(res => this._spotifyService.searchArtists(this.searchForm.controls.search.value));
                    this.results.subscribe(data => {
                        this.isLoading = false;
                        console.log(data);
                    });
                }
            };
            SpotifyArtistSearchComponent = __decorate([
                core_1.Component({
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
                    styles: [`
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
                    providers: [http_1.Http, common_1.FORM_PROVIDERS, http_1.HTTP_PROVIDERS, spotify_service_1.SpotifyService]
                }), 
                __metadata('design:paramtypes', [http_1.Http, common_1.FormBuilder, spotify_service_1.SpotifyService])
            ], SpotifyArtistSearchComponent);
            exports_1("SpotifyArtistSearchComponent", SpotifyArtistSearchComponent);
        }
    }
});
//# sourceMappingURL=spotifyartistsearch.component.js.map