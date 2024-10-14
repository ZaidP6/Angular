import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../preguntas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  preguntas: any[] = [];
  preguntaActualIndex: number = 0;
  puntaje: number = 0;
  seleccionada: string = '';
  mostrarResultado: boolean = false;

  constructor(private preguntasService: PreguntasService, private router: Router) {}

  ngOnInit(): void {
    this.preguntas = this.preguntasService.getPreguntas();
  }

  responder(opcion: string) {
    if (opcion === this.preguntas[this.preguntaActualIndex].correcta) {
      this.puntaje++;
    }
    this.preguntaActualIndex++;

    if (this.preguntaActualIndex >= this.preguntas.length) {
      this.mostrarResultado = true;
    }
  }

  reiniciarJuego() {
    this.router.navigate(['/preguntas']);
  }
}