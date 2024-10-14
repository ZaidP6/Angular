import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  preguntas = [
    {
      pregunta: "¿Quién es el alter ego de Iron Man?",
      opciones: ["Tony Stark","Bruce Banner","Steve Rogers", "Peter Parker"],
      correcta: "Tony Stark"
    },
    {
      pregunta: "¿Cómo se llama el martillo de Thor?",
      opciones: ["Mjolnir", "Stormbreaker", "Excalibur","Thunderbolt"],
      correcta: "Mjolnir"
    }
  ]
  constructor(){}

  getPreguntas(){
    return this.preguntas;
  }
}
