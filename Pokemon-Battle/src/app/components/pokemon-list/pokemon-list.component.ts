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

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(response => {
      this.listaPokemon = response.results.map((pokemon, index) => {
        const id = this.pokemonService.getPokemonId(pokemon.url); // Obtiene el ID
        const imageUrl = this.pokemonService.getPokemonImage(Number(id)); // Genera la URL de imagen
        return { ...pokemon, id: Number(id), imageUrl };
      });
    });
  }


}
