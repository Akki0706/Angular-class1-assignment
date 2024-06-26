import { Component } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';
import { Booking } from '../Interface';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [NgIf,NgFor,CommonModule,RouterModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent {
  BookingList?:Booking[];
  constructor(private bookingService:BookingServiceService){}
  ngOnInit(){
   this.getBookinglist();
  }
  getBookinglist(){
  
    return this.bookingService.getlist().subscribe(l=>this.BookingList=l);

  }

  delete(id:number){
    this.BookingList=this.BookingList?.filter(l=>l.id!=id);
    this.bookingService.cancelBooking(id).subscribe();
  }
 
}
