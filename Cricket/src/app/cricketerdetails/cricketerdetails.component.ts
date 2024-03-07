import { Component ,Input} from '@angular/core';
import { Cricketer } from '../cricketername/Cricket';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cricketerdetails',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './cricketerdetails.component.html',
  styleUrl: './cricketerdetails.component.css'
})
export class CricketerdetailsComponent {
@Input() FavCricketer? :Cricketer;
}
