import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private authService: AuthServiceService) {}


  createRequestToken() {
    this.authService.createRequestToken().subscribe((response) => {
      localStorage.setItem('token', response.request_token);
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
