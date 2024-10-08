
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import moment from 'moment';
import { Task } from '../../Interface/Interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import {

  MatDialogContent,
  
} from '@angular/material/dialog';

@Component({
  selector: 'app-task-add-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogContent
    
  ],
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.css']
})
export class TaskAddDialogComponent {
  

  form: FormGroup;
  minEndDate: Date | null = null;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<TaskAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      startDate: [null, Validators.required],
      startTime: ['', Validators.required],
      endDate: [null, Validators.required],
      endTime: ['', Validators.required],
      duration: [{ value: '', disabled: true }],
    });

    this.form.get('startDate')?.valueChanges.subscribe((startDate) => {
      this.minEndDate = startDate;
      this.form.get('endDate')?.setValue(null);
    });

    this.form.valueChanges.subscribe(() => {
      this.calculateDuration();
    });
  }

  onStartDateChange(startDate: Date) {
    this.minEndDate = startDate;
    this.form.get('endDate')?.setValue(null);
  }

  calculateDuration(): string {
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;

    if (startDate && endDate) {
      const start = moment(startDate)
        .startOf('day')
        .add(moment.duration(this.form.get('startTime')?.value));
      const end = moment(endDate)
        .startOf('day')
        .add(moment.duration(this.form.get('endTime')?.value));

      if (start.isValid() && end.isValid()) {
        const duration = moment.duration(end.diff(start));
        const hours = Math.floor(duration.asHours());
        const minutes = duration.minutes();

        if (hours > 24) {
          alert('Duration cannot exceed 24 hours.');
          return '';
        }

        return `${hours} hours ${minutes} minutes`;
      }
    }
    return '';
  }

  addTask() {
    if (this.form.valid) {
      const newTask: Task = {
        id: this.data.length + 1,
        name: this.form.get('name')?.value,
        startDate: this.form.get('startDate')?.value,
        startTime: this.form.get('startTime')?.value,
        endDate: this.form.get('endDate')?.value,
        endTime: this.form.get('endTime')?.value,
        duration: this.calculateDuration(),
      };
      this.data.push(newTask);
      this.dialogRef.close();
      this.snackBar.open('Task added successfully!', 'Close', {
        duration: 3000,
      });
    }
  }
}
