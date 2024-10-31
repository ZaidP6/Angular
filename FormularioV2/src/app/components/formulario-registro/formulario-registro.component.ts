import { Component } from '@angular/core';
import { UsuarioDto } from '../../models/usuario.dto';

@Component({
  selector: 'app-formulario-registro',
  standalone: false,

  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css',
})
export class FormularioRegistroComponent {
  usuario: UsuarioDto = new UsuarioDto(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    false
  );
  letraDni: string = '';

  calculateDniLetter() {
    const dni = this.usuario.dni;
    if (dni.length === 8 && !isNaN(Number(dni))) {
      const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
      this.letraDni = letras[parseInt(dni) % 23];
    } else {
      this.letraDni = '';
    }
  }

  onRegister() {
    if (this.usuario.password == this.usuario.confirmPassword) {
      console.log(this.usuario);
    } else {
      alert('Revisa los campos: hay errores en el formulario');
    }
  }
}
