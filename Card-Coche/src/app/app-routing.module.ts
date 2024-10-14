import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponentComponent } from './components/car-component/car-component.component';

const routes: Routes = [
  { path: 'car', component: CarComponentComponent },  // Añade una ruta para el componente del coche
  { path: '', redirectTo: '/car', pathMatch: 'full' }, // Redirecciona a la ruta del coche por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
