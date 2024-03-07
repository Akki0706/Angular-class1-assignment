import { Component } from '@angular/core';
import { CRICKETERS } from '../mycricket';
import { NgFor ,NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cricketer } from './Cricket';
import { CricketerdetailsComponent } from '../cricketerdetails/cricketerdetails.component';

@Component({
  selector: 'app-cricketername',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule,CricketerdetailsComponent],
  templateUrl: './cricketername.component.html',
  styleUrl: './cricketername.component.css'
})
export class CricketernameComponent {
    cricketername = CRICKETERS;
    selectedcricket?:Cricketer
    OnSelect(c:Cricketer):void{
this.selectedcricket=c;
    }
}
