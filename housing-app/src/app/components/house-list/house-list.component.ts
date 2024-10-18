import { Component, OnInit } from '@angular/core';
import { House } from '../../interfaces/house';
import { HouseServiceService } from '../../services/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css'
})
export class HouseListComponent implements OnInit{
  listadoCasas:House[] = [];

  constructor(private houseService: HouseServiceService){

  }
  ngOnInit(): void {
    this.houseService.getHouseList().subscribe(respuesta => {
      this.listadoCasas = respuesta;
    });
  }

}
