import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FreetimeComponent } from './freetime/freetime.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FreetimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FreeTime Assignment';
}
