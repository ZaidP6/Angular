import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url = 'http://localhost:3000/vehicle-list';

  constructor(private http: HttpClient) { 
  }

  getVehicleList(){
    this.http.get<[Vehicle]>('http://localhost:3000/vehicle-list')
  }
}
