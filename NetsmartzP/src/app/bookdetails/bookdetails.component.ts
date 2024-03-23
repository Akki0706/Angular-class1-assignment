import { Component } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Books } from '../books/Books';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-bookdetails',
  standalone: true,
  imports: [NgIf],
  templateUrl: './bookdetails.component.html',
  styleUrl: './bookdetails.component.css'
})
export class BookdetailsComponent {
  // using book details here//
  bookdetails?:Books 
  constructor(private bookservice:BookServiceService , //Injecting book service through constructor//
     private route:ActivatedRoute){}//Activated route is used here to fetch the path of the books
     ngOnInit(){
      this.getdetails();
    }
  getdetails(){
    const id=Number(this.route.snapshot.paramMap.get('id'))!;
    this.bookdetails=this.bookservice.getdetails(id);
    this.bookservice.updateAvailability(id,false);
    console.log(this.bookdetails)
  }

}
