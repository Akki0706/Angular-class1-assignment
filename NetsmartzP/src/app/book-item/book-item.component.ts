import { Component ,Input} from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  // Taking input of title,author and availability here 
  @Input() title?:string;
  @Input() author?:string;
  @Input() available?:boolean;
}
