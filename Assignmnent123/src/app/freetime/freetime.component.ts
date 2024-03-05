import { Component } from '@angular/core';
import { Freetime } from './freetime';
import { FormsModule } from '@angular/forms';
import { FREETIME } from '../myfreetime';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-freetime',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './freetime.component.html',
  styleUrl: './freetime.component.css'
})
export class FreetimeComponent {
freetimes = FREETIME;
}
