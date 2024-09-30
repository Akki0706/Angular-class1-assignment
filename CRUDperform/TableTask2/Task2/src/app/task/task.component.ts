import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  moment from 'moment';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  taskForm: FormGroup;
  tasks: Task[] = [];
  displayedColumns!:['name','startDate','endDate','startTime','endTime']

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.taskForm.valid) {
      const startDateTime = moment(`${this.taskForm.value.startDate} ${this.taskForm.value.startTime}`);
      const endDateTime = moment(`${this.taskForm.value.endDate} ${this.taskForm.value.endTime}`);
      
      const duration = moment.duration(endDateTime.diff(startDateTime));
      const totalHours = duration.asHours();

      if (totalHours > 24 || startDateTime.isAfter(endDateTime)) {
        alert('Invalid date or time range');
        return;
      }

      const task: Task = {
        id: 0,
        name: this.taskForm.value.name,
        startDate: this.taskForm.value.startDate,
        endDate: this.taskForm.value.endDate,
        startTime: this.taskForm.value.startTime,
        endTime: this.taskForm.value.endTime,
        totalHours
      };

      this.taskService.addTask(task);
      this.tasks = this.taskService.getTasks();
      this.taskForm.reset();
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

}
