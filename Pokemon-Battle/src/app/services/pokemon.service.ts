import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }


  getPokemonList():Observable<PokemonResponse>{
    return this.http<pokemonResponse>(this.apiUrl);
  }
}
