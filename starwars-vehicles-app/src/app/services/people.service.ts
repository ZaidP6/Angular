import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'https://swapi.dev/api/people/';

  constructor(private http:HttpClient) { }


  getPeopleList(): Observable<Root>{
    return this.http.get<Root>(this.apiUrl);
  }
}
