import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '../interfaces/house';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseServiceService {

  constructor(private http:HttpClient) { }

  getHouseList():Observable<House[]>{
    return this.http.get<House[]>('http://localhost:3000/house-list')
  }
}
