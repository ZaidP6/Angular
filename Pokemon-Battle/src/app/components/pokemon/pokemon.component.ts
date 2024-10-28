import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: false,
  
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  

pokemonList :Pokemon[] = [];
turno: boolean = true;
pokemon: Pokemon = this.pokemonList.map.call.name.match;




getPokemonId(url: string): string {
  const parts = url.split('/');
  return parts[parts.length - 2]; 
}

}
