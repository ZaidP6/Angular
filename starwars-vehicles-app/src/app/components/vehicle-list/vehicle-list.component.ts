import { Component } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent {
 listadoVehiculos:Vehicle []= [];


constructor(private vehicleService: VehicleService){

}


}
