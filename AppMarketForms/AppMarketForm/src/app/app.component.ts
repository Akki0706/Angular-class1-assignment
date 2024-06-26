import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,NgIf,NgbToastModule,RouterModule,NgbNavModule,NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  active = 'top';
}
 