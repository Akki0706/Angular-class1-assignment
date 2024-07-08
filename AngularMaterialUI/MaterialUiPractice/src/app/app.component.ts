import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { numericpipes } from './demo.pipe';
import { DemoComponent } from './demo/demo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, numericpipes, NgFor, NgIf,RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
