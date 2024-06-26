import { Component } from '@angular/core';
import { Room } from '../roomInterface';
import { RoomService } from '../room.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from '../booking-list/booking-list.component';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule,BookingListComponent,BookingFormComponent],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  selectedRoomId?: number;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms);
  }

  selectRoom(roomId: number): void {
    this.selectedRoomId = roomId;
  }
 
}
