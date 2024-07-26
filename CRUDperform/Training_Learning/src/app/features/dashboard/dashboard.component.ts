import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AuthServiceService } from '../../core/services/auth-service.service';
import { NgFor } from '@angular/common';
interface App {
  id: number;
  name: string;
  description: string;
  releaseDate: string;
  version: string;
}


@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[NgFor,MatPaginatorModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  apps: App[] = [
    { id: 1, name: 'FlipCart', description: 'E-Commerce Site', releaseDate: '2024-01-01', version: '1.0.0' },
    { id: 2, name: 'Amazon', description: 'E-Commerce Site', releaseDate: '2024-02-01', version: '1.1.0' },
    { id: 3, name: 'Ajio', description: 'E-Commerce Site', releaseDate: '2024-03-01', version: '1.2.0' },
    { id: 4, name: 'Paytm', description: 'E-Commerce Site', releaseDate: '2024-01-01', version: '1.0.0' },
    { id: 5, name: 'Phonepe', description: 'E-Commerce Site', releaseDate: '2024-02-01', version: '1.1.0' },
    { id: 6, name: 'Google Pay', description: 'E-Commerce Site', releaseDate: '2024-03-01', version: '1.2.0' },
  ];
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('logout');
  }
}
