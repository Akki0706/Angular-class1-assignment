import { Injectable } from '@angular/core';
import { Room } from './roomInterface';
import { Booking } from './bookingInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private roomsUrl = 'api/Room';  // URL to web api

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl);
  }
  
}
