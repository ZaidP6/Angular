import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent implements OnInit{

  listaPersonajes : Personaje[] = [];



  constructor(private  characterService:CharacterService){}
  ngOnInit(): void {
    this.characterService.getCharactersList().subscribe((respuesta) => {
      this.listaPersonajes = respuesta.results;
    });
  }


}
