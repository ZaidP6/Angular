import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: false,
  
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
 bienvenida = "Bienvenido a la Clase de Miguel";
 precio = 227.68;
}
