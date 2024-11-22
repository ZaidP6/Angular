import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRequestTokenResponse } from '../models/create-request-token.interface';

const API_KEY = '4c92ea126ceabbca4fbdaa0e7e3696ca';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private http:HttpClient) { }

  //Step 1

  createRequestToken(): Observable<CreateRequestTokenResponse> {
    return this.http.get<CreateRequestTokenResponse>(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
    );
  }
}
