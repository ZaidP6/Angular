import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  listaPokemon: (Pokemon & { id: number, imageUrl: string })[] = [];
  pokemonSeleccionado: Pokemon | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(response => {
      this.listaPokemon = response.results.map(pokemon => {
        const id = this.pokemonService.getPokemonId(pokemon.url);
        const imageUrl = this.pokemonService.getPokemonImage(Number(id));
        return { ...pokemon, id: Number(id), imageUrl };
      });
    });
  }

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
