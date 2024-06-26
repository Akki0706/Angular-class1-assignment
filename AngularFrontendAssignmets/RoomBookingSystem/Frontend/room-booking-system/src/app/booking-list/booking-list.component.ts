import { Component, OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from '../bookingInterface';
import { CommonModule, DatePipe } from '@angular/common';
@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule,DatePipe],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnChanges {
  @Input() roomId?: number;
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['roomId'] && this.roomId !== undefined) {
      this.getBookingsForRoom(this.roomId);
    }
  }

  getBookingsForRoom(roomId: number): void {
    this.bookingService.getBookingsForRoom(roomId).subscribe(bookings => this.bookings = bookings);
  }

  cancelBooking(bookingId: number): void {
    this.bookingService.cancelBooking(bookingId).subscribe(() => {
      this.bookings = this.bookings.filter(booking => booking.id !== bookingId);
    });
  }
}
