import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root, Vehicle } from '../interfaces/vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'https://swapi.dev/api/vehicles/';

  constructor(private http: HttpClient) { 
  }

  getVehicleList(): Observable<Root> {
    // Hacemos una solicitud GET y devolvemos el Observable que emite la respuesta
    return this.http.get<Root>(this.apiUrl);
  }
}
