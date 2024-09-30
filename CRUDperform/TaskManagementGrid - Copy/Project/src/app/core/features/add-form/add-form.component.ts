import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../Interface/Interface';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private taskService:TaskService,
    private router:Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      duration: [{ value: '', disabled: true }, [Validators.required]]
    });

    this.form.valueChanges.subscribe(values => {
      if (values.startDate && values.endDate) {
        this.calculateDuration(values.startDate,values.endDate);
      }
    });
  }

  calculateDuration(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = Math.abs(end.getTime() - start.getTime());
    return Math.round(diff / (1000 * 60 * 60));
  }

  onsubmit(){
    console.log(this.form.value);
   
    this.taskService.addData(this.form.value as Task).subscribe(()=>{
      this.router.navigate(['/task'])
    }
    )
    
  }
}
