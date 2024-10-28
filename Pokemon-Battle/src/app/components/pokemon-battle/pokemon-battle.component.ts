import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailResponse } from '../../models/pokemon-detail';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.css']
})
export class PokemonBattleComponent implements OnInit {
  pokemon1: PokemonDetailResponse | null = null;
  pokemon2: PokemonDetailResponse | null = null;
  pokemon1Health = 100;
  pokemon2Health = 100;
  isPokemon1Turn = true;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getSelectedPokemon().subscribe(id => {
      if (id !== null) {
        this.pokemonService.getOnePokemon(id).subscribe(pokemon => this.pokemon1 = pokemon);
      }
      // Suponiendo que pokemon2 es aleatorio o predeterminado.
      this.pokemonService.getOnePokemon(4).subscribe(pokemon => this.pokemon2 = pokemon); // Ejemplo: Pokémon 4 (Charmander)
    });
  }

  atacar(): void {
    if (this.isPokemon1Turn && this.pokemon2Health > 0) {
      this.pokemon2Health -= 40; // Daño fijo de 40
      this.isPokemon1Turn = false;
    } else if (this.pokemon1Health > 0) {
      this.pokemon1Health -= 40;
      this.isPokemon1Turn = true;
    }
  }
}
