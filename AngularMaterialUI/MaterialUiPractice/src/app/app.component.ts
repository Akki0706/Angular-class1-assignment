import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThousandPipe } from './thousand.pipe'; // Ensure the path is correct
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, ThousandPipe, NgFor, NgIf,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
