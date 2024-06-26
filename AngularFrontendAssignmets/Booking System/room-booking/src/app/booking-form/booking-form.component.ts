import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule, Location, NgFor, NgIf } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingServiceService } from '../booking-service.service';
import { Booking } from '../Interface';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [NgIf, RouterOutlet, ReactiveFormsModule, NgbToastModule, CommonModule, NgFor],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  bookingForm!: FormGroup;
  show = false;

  constructor(private fb: FormBuilder,
              private bookingService: BookingServiceService,
              private location: Location) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomNumber: ['', Validators.required],
      StartTime: ['', Validators.required],
      EndTime: ['', Validators.required],
      Date: ['', Validators.required]
    });
  }

  add(roomNumber: string, StartTime: string, EndTime: string, Date: string) {
    StartTime = StartTime.trim();
    EndTime = EndTime.trim();
    Date = Date.trim();
    const roomNum = Number(roomNumber);

    const booking: Booking = {
      id: 0, 
      roomNumber:roomNum,
      StartTime,
      EndTime,
      Date
    };

    this.bookingService.addBooking(booking).subscribe(() => {
      this.show = true;
      this.bookingForm.reset();
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.add(
        this.bookingForm.get('roomNumber')?.value,
        this.bookingForm.get('StartTime')?.value,
        this.bookingForm.get('EndTime')?.value,
        this.bookingForm.get('Date')?.value
      );
    }
  }

  goback() {
    this.location.back();
  }
}
