import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { Task } from '../../../Interface/Interface';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    DatePipe,
    MatInputModule
  ],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  form!: FormGroup;
  list: Task[] = [
    { id: 1, name: 'Task 1', startDate: new Date('2023-07-01T08:00:00'), endDate: new Date('2023-07-01T12:00:00'), duration: 4 },
    { id: 2, name: 'Task 2', startDate: new Date('2023-08-01T09:00:00'), endDate: new Date('2023-07-01T11:00:00'), duration: 2 }
  ];
  displayedColumns: string[] = ['name', 'startDate', 'duration', 'endDate', 'actions'];
  dataSource = new MatTableDataSource<Task>(this.list);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      duration: [{ value: '', disabled: true }]
    });

    this.form.valueChanges.subscribe(() => {
      this.calculateDuration();
    });
  }

  addData() {
    if (this.form.valid) {
      const { name, startDate, endDate } = this.form.value;
      const duration = this.calculateDuration();
      const task: Task = {
        id: Math.random(),
        name,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        duration
      };
      this.list.push(task);
      this.dataSource.data = this.list;
      this.form.reset();
    }
  }

  removeData(taskId: number) {
    this.list = this.list.filter(task => task.id !== taskId);
    this.dataSource.data = this.list;
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  applyFilter(event: any) {
    const filterValue = event.value;
    if (filterValue) {
      this.dataSource.data = this.list.filter(task =>
        task.startDate.toDateString() === filterValue.toDateString()
      );
    } else {
      this.dataSource.data = this.list;
    }
  }

  calculateDuration(): number {
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        return (end.getTime() - start.getTime()) / (1000 * 60 * 60);
      }
    }
    return 0;
  }

  onSubmit() {
    this.addData();
  }
}
