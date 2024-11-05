import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  
  listaPokemon:(Pokemon & { id: number, imageUrl: string })[] = [];
  
  constructor(private pokemonService:PokemonService){}

  ngOnInit(): void {
   /* 
    this.pokemonService.getListaPokemon().subscribe(respuesta => {
      this.listaPokemon = respuesta.results.map((pokemon, index =>{
        
      }))
    })
   */
  }
}
