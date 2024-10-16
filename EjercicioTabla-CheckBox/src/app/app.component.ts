import { Component } from '@angular/core';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EjercicioTabla-CheckBox';
  columns: {nombre:string, isVisible:boolean}[] = [
    {nombre:'nAlumno', isVisible: true},
    {nombre:'name', isVisible: true},
    {nombre:'apellidos', isVisible: true},
    {nombre:'nif', isVisible: true},
    {nombre:'edad', isVisible: true},
    {nombre:'cursoMat', isVisible: true}
  ]
  tabla: Student[] = ELEMENT_DATA;


  actualizaColumnas(nombreCol:string){
    let column = this.columns.find(col => col.nombre === nombreCol);
    if (column) {
      column.isVisible = !column.isVisible;
    }
  }

  getColumnasVisibles(): string[]{
    return this.columns.filter(col => col.isVisible).map(col => col.nombre);
  }

}

const ELEMENT_DATA: Student[] = [
  { nAlumno: '1', nombre: 'Juan', apellidos: 'Pérez', nif: '12345678A', edad: 19, cursoMat: 'DAM' },
  { nAlumno: '2', nombre: 'Ana', apellidos: 'García', nif: '87654321B', edad: 21, cursoMat: 'DAM' },
  { nAlumno: '3', nombre: 'Luis', apellidos: 'López', nif: '11223344C', edad: 22, cursoMat: 'DAM' },
  { nAlumno: '4', nombre: 'Marta', apellidos: 'Sánchez', nif: '22334455D', edad: 20, cursoMat: 'DAM' }
];
