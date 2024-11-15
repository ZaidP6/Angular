import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_KEY = '4c92ea126ceabbca4fbdaa0e7e3696ca';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzkyZWExMjZjZWFiYmNhNGZiZGFhMGU3ZTM2OTZjYSIsIm5iZiI6MTczMTY2Nzk4NS41Njg0ODg2LCJzdWIiOiI2NzMxYmUwNjdlZjJjMzFkNzhlZGFiZjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5BGQdjBLo4-I1JsQE9zaFOoXmk-VFhcIyh6AspmhX50';

@Injectable({
  providedIn: 'root'
})
export class PopFilmsService {

  private apiUrl = 'https://api.themoviedb.org/'; 

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${API_KEY}`);
  }

  // Método para buscar películas por nombre
  searchMovies(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${ACCESS_TOKEN}`
    });
    return this.http.get(`${this.apiUrl}/search/movie?query=${query}`, { headers });
  }
}
