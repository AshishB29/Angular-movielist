import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service'
import { MoviesIndexComponent } from '../movies-index/movies-index.component'
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'movies-search-result',
  templateUrl: './movie-search-result.component.html',
  styleUrls: ['./movie-search-result.component.scss']
})
export class MovieSearchResultComponent implements OnInit {

  constructor(
    public moviesService: MovieApiService,
    public movieIndex : MoviesIndexComponent
  ) { 

  }

  ngOnInit() {
  }
  nextpage()
  {
    this.movieIndex.pageindex++;
  }
  previouspage()
  {
    if(this.movieIndex.pageindex!=1)
    this.movieIndex.pageindex--;
  }

  public removeSearchResults() {
    this.moviesService.setSharedSearchResult([]);
  }
}
