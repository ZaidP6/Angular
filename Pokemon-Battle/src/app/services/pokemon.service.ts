import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonListResponse } from '../models/pokemon';
import { PokemonDetailResponse } from '../models/pokemon-detail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private selectedPokemon = new BehaviorSubject<number | null>(null);

  constructor(private http: HttpClient) {}

  setSelectedPokemon(pokemonId: number) {
    this.selectedPokemon.next(pokemonId);
  }

  getSelectedPokemon(): Observable<number | null> {
    return this.selectedPokemon.asObservable();
  }

  getPokemonList(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(this.apiUrl);
  }

  getOnePokemon(id: number): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`${this.apiUrl}${id}`);
  }

  getPokemonImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getPokemonId(url: string): number {
    const parts = url.split('/');
    return Number(parts[parts.length - 2]);
  }
}
