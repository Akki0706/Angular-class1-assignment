
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from '../../../Interface/Interface';
import moment from 'moment';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DatePipe,
    MatInputModule,
ReactiveFormsModule,
    NgIf,FormsModule
  ],
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  form!: FormGroup;
  list: Task[] = [
    { id: 1, name: 'Task 1', startDate: new Date('2023-07-01'), endDate: new Date('2023-07-01'), startTime: '08:00', endTime: '12:00', duration: 4 },
    { id: 2, name: 'Task 2', startDate: new Date('2023-08-01'), endDate: new Date('2023-07-01'), startTime: '09:00', endTime: '11:00', duration: 2 }
  ];
  displayedColumns: string[] = ['name', 'startDate', 'startTime', 'endDate', 'endTime', 'duration', 'actions'];
  dataSource = new MatTableDataSource<Task>(this.list);
  editingTaskId: number | null = null;
  editingField: string | null = null;
  minEndDate: Date | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      startDate: [null, Validators.required],
      startTime: ['', Validators.required],
      endDate: [null, Validators.required],
      endTime: ['', Validators.required],
      duration: [{ value: '', disabled: true }]
    });

    this.form.get('startDate')?.valueChanges.subscribe((startDate) => {
      this.minEndDate = startDate; 
      this.form.get('endDate')?.setValue(null);  
    });

    this.form.valueChanges.subscribe(() => {
      this.calculateDuration();
    });
  }

  addTask() {
    if (this.form.valid) {
      const newTask: Task = {
        id: this.list.length + 1,
        name: this.form.get('name')?.value,
        startDate: this.form.get('startDate')?.value,
        startTime: this.form.get('startTime')?.value,
        endDate: this.form.get('endDate')?.value,
        endTime: this.form.get('endTime')?.value,
        duration: this.calculateDuration()
      };
      this.list.push(newTask);
      this.dataSource.data = this.list;
      this.form.reset();
    }
  }

  startEdit(taskId: number, field: string) {
    this.editingTaskId = taskId;
    this.editingField = field;
  }

  saveEdit(task: Task, field: string, value: any) {
    const index = this.list.findIndex(t => t.id === task.id);
    if (index > -1) {
      if (field === 'startDate' && task.endDate && value > task.endDate) {
        alert('End date cannot be before start date.');
        return;
      }
      if (field === 'endDate' && task.startDate && value < task.startDate) {
        alert('End date cannot be before start date.');
        return;
      }
  
      this.list[index] = { ...task, [field]: value };
      this.list[index].duration = this.calculateDurationForTask(this.list[index]);
 
      if (field === 'startDate') {
        this.minEndDate = value;
      }
    }
    this.dataSource.data = this.list;
    this.editingTaskId = null;
    this.editingField = null;
  }
  

  calculateDurationForTask(task: Task): number {
    const start = moment(task.startDate).startOf('day').add(task.startTime, 'hours');
    const end = moment(task.endDate).startOf('day').add(task.endTime, 'hours');
    return end.diff(start, 'hours');
  }

  calculateDuration(): number {
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;

    if (startDate && endDate) {
      const start = moment(startDate).startOf('day').add(this.form.get('startTime')?.value, 'hours');
      const end = moment(endDate).startOf('day').add(this.form.get('endTime')?.value, 'hours');

      if (start.isValid() && end.isValid()) {
        const duration = end.diff(start, 'hours');
        if (duration > 24) {
          alert('Duration cannot exceed 24 hours.');
          return 0;
        }
        return duration;
      }
    }
    return 0;
  }

  removeData(taskId: number) {
    const index = this.list.findIndex(task => task.id === taskId);
    if (index > -1) {
      this.list.splice(index, 1);
      this.dataSource.data = this.list;
    }

  }
}

