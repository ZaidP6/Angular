import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './components/student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
