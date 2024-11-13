import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PopWebDesigned2Component } from './components/pop-web-designed2/pop-web-designed2.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PopWebDesigned2Component,
    HeaderComponent,
    SidebarComponent,
    MovieListComponent,
    MovieGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
