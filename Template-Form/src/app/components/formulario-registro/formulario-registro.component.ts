import { Component } from '@angular/core';
import { UsuarioDto } from '../../models/usuario.dto';

@Component({
  selector: 'app-ormulario-registro',
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
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    if (this.usuario.dni) {
      const nifNumber = parseInt(this.usuario.dni, 10);
      this.letraDni = letras.charAt(nifNumber % 23);
    } else {
      this.letraDni = '';
    }
  }

  onRegister() {
    if (this.isValidForm()) {
      console.log(this.usuario);
    } else {
      alert('Revisa los campos: hay errores en el formulario');
    }
  }

  isValidForm(): boolean {
    const {
      nombre,
      apellidos,
      dni,
      email,
      telefono,
      sexo,
      conocimiento,
      password,
      confirmPassword,
      aceptarTerminos,
    } = this.usuario;
    const todosCampos = // .trim() es para asegurarse de que no queden cadenas vacías 
                        //como válidas
      nombre.trim() !== '' &&
      apellidos.trim() !== '' &&
      dni.trim() !== '' &&
      email.trim() !== '' &&
      telefono.trim() !== '' &&
      sexo.trim() !== '' &&
      conocimiento.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      aceptarTerminos;
    const passwordsCorrects = password === confirmPassword;
    return todosCampos && passwordsCorrects;
  }
}
