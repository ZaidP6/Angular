import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { People } from '../../interfaces/people';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit{
  listadoPersonajes :People[]=[];


  constructor(private peopleService:PeopleService){

  }
  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe((respuesta) => {
      this.listadoPersonajes = respuesta.results;
    });
    console.log(this.listadoPersonajes);
    
  }

  getPeopleId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2]; 
  }


}
