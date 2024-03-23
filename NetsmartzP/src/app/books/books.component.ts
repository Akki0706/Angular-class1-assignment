import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Books } from './Books';
import { RouterModule } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { BookItemComponent } from '../book-item/book-item.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgFor,RouterModule,BookItemComponent,RouterOutlet],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  MYBOOKS?:Books[]=[];// stores the details of books
  constructor(private bookservice:BookServiceService){}//injecting books service through constructor
  // // calling getting data function on initializaton
  ngOnInit(){
    this.getbook();
  }

   //getting data through service
  getbook(){
    this.MYBOOKS=this.bookservice.getdata();
  }
  
}
