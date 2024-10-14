import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  puntaje: number = 0;
  totalPreguntas: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  reiniciarJuego() {
    this.router.navigate(['/preguntas']); 
  }
}
