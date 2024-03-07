import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CricketernameComponent } from './cricketername/cricketername.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CricketernameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practice';
}
