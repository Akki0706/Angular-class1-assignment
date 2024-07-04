import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThousandPipe } from './thousand.pipe'; // Ensure the path is correct
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, ThousandPipe, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
