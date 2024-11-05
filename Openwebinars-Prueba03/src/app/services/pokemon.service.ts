import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService{

  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}


  getListaPokemon():Observable<PokemonListResponse>{
    return this.http.get<PokemonListResponse>(this.apiUrl);
  }
}
