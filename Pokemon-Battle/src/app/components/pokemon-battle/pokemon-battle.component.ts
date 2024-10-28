import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailResponse } from '../../models/pokemon-detail';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
})
export class PokemonBattleComponent implements OnInit {
  pokemon1Detalles: PokemonDetailResponse | null = null;
  pokemon2Detalles: PokemonDetailResponse | null = null;
  pokemon1Vida: number = 100;
  pokemon2Vida: number = 100;
  turn: number = 1;


  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    // Aquí puedes obtener los detalles de los Pokémon (puedes recibirlos como @Input)
  }

  atacar() {
    if (this.turn % 2 === 0) {
      this.pokemon2Vida = Math.max(0, this.pokemon2Vida - 40); // Resta vida sin que baje de 0
    } else {
      this.pokemon1Vida = Math.max(0, this.pokemon1Vida - 40);
    }
    this.turn++;
  }
}
