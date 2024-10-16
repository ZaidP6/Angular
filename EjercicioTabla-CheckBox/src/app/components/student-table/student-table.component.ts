import { Component } from '@angular/core';
import { Student } from '../../student/student';


@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {
  

  columns = ['nAlumno', 'nombre', 'apellidos', 'nif', 'edad', 'cursoMat'];
  columnasDispo = [...this.columns];
  students = ALUMNO_TABLA;

  checkColumn(column: string) {
    let index = this.columnasDispo.indexOf(column);
    if (index >= 0) {
      this.columnasDispo.splice(index, 1);
    } else {
      this.columnasDispo.push(column);
    }
  }
}

const ALUMNO_TABLA: Student[] = [
  { nAlumno: '1', nombre: 'Juan', apellidos: 'Pérez', nif: '12345678A', edad: 19, cursoMat: 'DAM' },
  { nAlumno: '2', nombre: 'Ana', apellidos: 'García', nif: '87654321B', edad: 21, cursoMat: 'DAM' },
  { nAlumno: '3', nombre: 'Luis', apellidos: 'López', nif: '11223344C', edad: 22, cursoMat: 'DAM' },
  { nAlumno: '4', nombre: 'Marta', apellidos: 'Sánchez', nif: '22334455D', edad: 20, cursoMat: 'DAM' }
];
