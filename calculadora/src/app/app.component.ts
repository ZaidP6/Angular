import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;

  onSuma(): void {
    this.resultado = this.operandoA + this.operandoB;
  }

  onResta(): void{
    this.resultado = this.operandoA - this.operandoB;
  }
}
