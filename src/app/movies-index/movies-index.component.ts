import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'movies',
  templateUrl: './movies-index.component.html',
  styleUrls: ['./movies-index.component.scss']
})
export class MoviesIndexComponent implements OnInit {
  popularMovies: Array<Object>;
  searchQuery: string;
  pageindex: number;
  movie_count: number;
  pop_movie_count: number;


  constructor(
    public moviesService: MovieApiService
  ) { 
    this.pageindex=1;
    this.searchQuery='';
  }

  ngOnInit() {

    this.moviesService.getPopularMovies()
      .subscribe(
        response => {
          this.pop_movie_count=response.results.length;
          this.movie_count=this.pop_movie_count;
          this.popularMovies=response.results;
          this.moviesService.setSharedSearchResult(this.popularMovies);

        })
 }

  searchMovies(){
    if(this.searchQuery==undefined || this.searchQuery==""){
      this.pageindex=1;
      this.moviesService.setSharedSearchResult(this.popularMovies);
      this.movie_count=this.pop_movie_count;
    }
    else
      this.moviesService.searchMovies(this.searchQuery)
      .subscribe(response => {
        this.movie_count=response.results.length;
        this.pageindex=1;
        this.moviesService.setSharedSearchResult(response.results);
      }
      )

  }
  gotohome(){
    this.pageindex=1;
    this.searchQuery='';
    this.moviesService.setSharedSearchResult(this.popularMovies);
    this.movie_count=this.pop_movie_count;
    }

    nextpage(){
    this.pageindex++;
  }
  previouspage(){
    if(this.pageindex!=1)
    this.pageindex--;
  }



}
