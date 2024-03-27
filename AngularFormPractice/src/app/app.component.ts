import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { client } from './clientInterface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
tasks=['Components','Dependency Injection','Diretives','Pipes','Routing and Naving']
clientModel=new client('Mohan','Mohan123@gmail.com','8459852462','','weekdays',true)
}
