import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrl: './election.component.css'
})
export class ElectionComponent {
  listaPokemon: (Pokemon & { id: number, imageUrl: string })[] = [];
  pokemonSeleccionado: Pokemon | null = null;

  constructor(private pokemonService: PokemonService) {}

  seleccionarPokemon(pokemon: Pokemon | null): void {
    if (pokemon) { // Verificar que no sea null
      this.pokemonSeleccionado = pokemon;
      const pokemonId = this.pokemonService.getPokemonId(pokemon.url);
      this.pokemonService.setSelectedPokemon(Number(pokemonId));
    }
  }


  guardarPokemonSeleccionado(): void {
    console.log(this.pokemonSeleccionado); // Guardar el Pokémon seleccionado
  }

}
