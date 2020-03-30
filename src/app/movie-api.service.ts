import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private apikey = 'api_key=d818cb3bab573581302dae997d878138';
  private baseUrl = 'https://api.themoviedb.org/3/';
  private movie = 'movie/'
  public sharedSearchResult: Array<Object> = [];
//  public basemovies: Array<Object> = [];
  
  
  //https://api.themoviedb.org/3/movie/popular?api_key=d818cb3bab573581302dae997d878138
  //https://www.themoviedb.org/search?query=avengers&apikey=d818cb3bab573581302dae997d878138
  //https://api.themoviedb.org/3/search/movie?query=avengers&api_key=0324eb4b8130330ff1662244a7f60777
  constructor(public http: HttpClient) { 
    console.log('Movie-Api-Service started')
  }

 
  
  public getPopularMovies() {
    return this.http.get(this.baseUrl + this.movie + 'popular?' + this.apikey)
    .pipe(map((results: Response) => JSON.parse(JSON.stringify(results))));
  }

  public getSharedSearchResult() {
    return this.sharedSearchResult;
  }
  public setSharedSearchResult(searchResult) {
    this.sharedSearchResult = searchResult;
  }
  public searchMovies(query) {
    return this.http.get(this.baseUrl + 'search/movie'+ '?query=' + query  + '&'+ this.apikey)
      .pipe(map((results: Response) => JSON.parse(JSON.stringify(results))));
  }

 

  public sharedSearchMovies(searchQuery) {
    var response=this.searchMovies(searchQuery);
    response.subscribe(response=>{
      this.setSharedSearchResult(response.results);
    
    });

  }
}
