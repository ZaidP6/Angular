import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonListResponse } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrl: './election.component.css'
})
export class ElectionComponent implements OnInit {
  listaPokemon: Pokemon[] = []; // Ajustado a 'Pokemon[]' para coincidir con 'results' en la respuesta
  selectedPokemonId: number | null = null;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((response: PokemonListResponse) => {
      this.listaPokemon = response.results; // Accede a 'results' de la respuesta
    });
  }

  selectPokemon() {
    if (this.selectedPokemonId !== null) {
      this.router.navigate(['/pokemon-battle']);
    }
  }

}
