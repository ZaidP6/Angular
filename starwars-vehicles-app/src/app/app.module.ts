import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(), provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
