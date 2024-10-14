import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent implements OnInit {

  //nombre!: string; 
  //De esta manera se esta diciendo que confíe en tí porque este 
  //atributo va a tener valor cuando de inicialice y por tanto no haría falta el constructor
  coches:{
    nombre: string;
    automatic: boolean;
    manual: boolean;
    precio: string;
    imagen: string; 
  }[]= [];
  

  constructor() {}

  ngOnInit(): void {
    this.coches = [
      {
        nombre: "Toyota GR",
        automatic: true,
        manual: true,
        precio: "156€/día",
        imagen: "https://www.buyatoyota.com/sharpr/bat/assets/img/vehicle-info/grcorolla/2023/hero_image_grcorolla.png"
      },
      {
        nombre: "Toyota GR",
        automatic: true,
        manual: false,
        precio: "156€/día",
        imagen: "https://www.buyatoyota.com/sharpr/bat/assets/img/vehicle-info/grcorolla/2023/hero_image_grcorolla.png"
      },
      {
        nombre: "Toyota GR",
        automatic: true,
        manual: true,
        precio: "156€/día",
        imagen: "https://www.buyatoyota.com/sharpr/bat/assets/img/vehicle-info/grcorolla/2023/hero_image_grcorolla.png"
      },
      {
        nombre: "Toyota GR",
        automatic: false,
        manual: true,
        precio: "156€/día",
        imagen: "https://www.buyatoyota.com/sharpr/bat/assets/img/vehicle-info/grcorolla/2023/hero_image_grcorolla.png"
      }
    ]
    
  }
}