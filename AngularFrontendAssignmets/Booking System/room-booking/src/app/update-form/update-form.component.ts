import { Component } from '@angular/core';
import { Booking } from '../Interface';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingServiceService } from '../booking-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule, Location, NgIf } from '@angular/common';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {
  updateForm!: FormGroup;
  selecteditem!: Booking;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingServiceService,
    private location: Location,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      roomNumber: ['', Validators.required],
      StartTime: ['', Validators.required],
      EndTime: ['', Validators.required],
      Date: ['', Validators.required]
    });

    this.edit();
  }

  edit(): void {
    const id = Number(this.activatedroute.snapshot.paramMap.get('id'));

    this.bookingService.getlistbyid(id).subscribe(item => {
      this.selecteditem = item;

      this.updateForm.patchValue({
        roomNumber: this.selecteditem.roomNumber,
        StartTime: this.selecteditem.StartTime,
        EndTime: this.selecteditem.EndTime,
        Date: this.selecteditem.Date
      });
    });
  }

  update(roomNumber: string, StartTime: string, EndTime: string, Date: string): void {
    const id = Number(this.activatedroute.snapshot.paramMap.get('id'));
  

    this.bookingService.updateBooking({ id, roomNumber, StartTime, EndTime, Date } as Booking)
      .subscribe(() => {
        this.goback();
      });
  }

  goback(): void {
    this.location.back();
  }
}
