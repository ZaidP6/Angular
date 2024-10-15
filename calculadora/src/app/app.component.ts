import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
  operando: string = "0";
  numAnterior: string = "";
  operador: string = "";
  operacion:string = ""
  resultado: string = "";
  opTerminada:boolean = false;

  onClear(){
    this.numAnterior ="";
    this.opTerminada = false;
    this.operacion = "";
    this.operando = "0";
    this.resultado = ""
  }

  onNumberClick(number:string){
    if(this.opTerminada){
      this.operando = number;
      this.opTerminada = false;
    } else {
      this.operando === "0" ? this.operando = number : this.operando += number;
    }
  }

  onOperadorClick(operador: string){
    this.operador = operador;
    this.numAnterior = this.operando;
    this.operando = "";
  }

  calculate(){
    let resultado:number = 0;
    let anterior = parseFloat(this.numAnterior);
    let actual = parseFloat(this.operando);

    switch(this.operador){
      case '+':
        resultado = anterior + actual;
        break;
      case '-':
        resultado = anterior - actual;
        break;
    }

    this.operacion = `${this.numAnterior} ${this.operador} ${this.operando} `;
    this.operando = resultado.toString();
    this.numAnterior = "";
    this.operador = "";
    this.opTerminada = true;
  }


}
