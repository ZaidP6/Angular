import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
 { path: 'vehicles', component: VehicleListComponent },
 { path: 'people', component: PeopleListComponent},
 { path: 'vehicle-detail', component:VehicleDetailComponent},
 { path: '',redirectTo:'/people',pathMatch:'full'},
 {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
