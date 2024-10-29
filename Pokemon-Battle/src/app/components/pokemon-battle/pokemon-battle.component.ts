import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailResponse } from '../../models/pokemon-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.css']
})
export class PokemonBattleComponent implements OnInit {
  myPokemon: PokemonDetailResponse | null = null;
  opponentPokemon: PokemonDetailResponse | null = null;
  myPokemonHp: number = 100;
  opponentPokemonHp: number = 100;
  turno: boolean = true; 

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId = Number(this.route.snapshot.paramMap.get('id'));

    this.pokemonService.getOnePokemon(pokemonId).subscribe(data => {
      this.myPokemon = data;
    });

    const randomId = Math.floor(Math.random() * 151) + 1; // Escoge un oponente al azar
    this.pokemonService.getOnePokemon(randomId).subscribe(data => {
      this.opponentPokemon = data;
    });
  }

  atacar() {
    if (this.turno) {
     
      this.opponentPokemonHp -= 10;
      this.turno = false;
    } else {
      
      this.myPokemonHp -= 10; 
      this.turno = true;
    }
  }
  
}
