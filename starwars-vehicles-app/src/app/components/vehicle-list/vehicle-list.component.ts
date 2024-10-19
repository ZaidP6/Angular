import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit {
  listadoVehiculos: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {

    this.vehicleService.getVehicleList().subscribe((respuesta) => {
      this.listadoVehiculos = respuesta.results;
    });
    console.log(this.listadoVehiculos);
  }


  getVehicleId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2]; 
  }
}
