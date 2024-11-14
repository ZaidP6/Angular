import { Component, OnInit } from '@angular/core';
import { PopFilmsService } from '../../services/pop-films.service';
import { error } from 'console';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  popularMovies : any[] = [];

  constructor(private service : PopFilmsService){}
  ngOnInit(): void {
    this.service.getPopularMovies().subscribe((data) => {
      this.popularMovies = data.results();
    },
    (error) => {
      console.error("No se puede mostrar la lista", error)
    }
  ),
  }
}
