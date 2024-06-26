import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './bookingInterface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingsUrl = 'api/Booking'; 

  constructor(private http: HttpClient) { }

  bookRoom(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.bookingsUrl, booking);
  }

  getBookingsForRoom(roomId: number): Observable<Booking[]> {
    const url = `${this.bookingsUrl}?roomId=${roomId}`;
    return this.http.get<Booking[]>(url);
  }

  cancelBooking(bookingId: number): Observable<void> {
    const url = `${this.bookingsUrl}/${bookingId}`;
    return this.http.delete<void>(url);
  }
}
