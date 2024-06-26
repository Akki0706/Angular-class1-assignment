import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { Booking } from '../bookingInterface';
@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent implements OnInit {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.bookingForm = this.fb.group({
      roomId: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      bookedBy: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const newBooking: Booking = this.bookingForm.value;
      this.bookingService.bookRoom(newBooking).subscribe();
    }
  }

  
}
