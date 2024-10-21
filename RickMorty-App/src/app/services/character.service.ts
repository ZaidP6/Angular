import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterListResponse } from '../models/personaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor  (private http:HttpClient){ }

  getCharactersList():Observable<CharacterListResponse>{
    return this.http.get<CharacterListResponse>(this.apiUrl);
  }
}
