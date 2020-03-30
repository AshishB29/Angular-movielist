import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MovieApiService } from './movie-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-movies';

  constructor(private http: HttpClient, private moviesService: MovieApiService){}
 
}

