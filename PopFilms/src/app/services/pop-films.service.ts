import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopFilmsService {

  private apiUrl = 'https://api.themoviedb.org/'; // URL base de TMDb
  private token = '4c92ea126ceabbca4fbdaa0e7e3696ca'; // Reemplaza con tu token

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get(`${this.apiUrl}/movie/popular`, { headers });
  }

  // Método para buscar películas por nombre
  searchMovies(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get(`${this.apiUrl}/search/movie?query=${query}`, { headers });
  }
}
