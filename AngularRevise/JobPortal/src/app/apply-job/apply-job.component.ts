import { Component } from '@angular/core';
import { JobsInterface } from '../Myjob';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { Location, NgIf } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apply-job',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule,RouterModule,RouterOutlet,NgbToastModule],
  templateUrl: './apply-job.component.html',
  styleUrl: './apply-job.component.css'
})
export class ApplyJobComponent {
  
  jobs: JobsInterface[] = [];
  jobForm!: FormGroup;
  show: boolean = false;

  get CompanyName() {
    return this.jobForm.get('CompanyName');
  }

  get position () {
    return this.jobForm.get('position');
  }

  get Stipend() {
    return this.jobForm.get('Stipend');
  }

  get Location() {
    return this.jobForm.get('Location');
  }

  get LastDate() {
    return this.jobForm.get('LastDate');
  }

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private jobService: MainServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.jobForm = this.fb.group({
      CompanyName: ['', [Validators.required, Validators.minLength(3)]],
      position: ['', [Validators.required, Validators.minLength(5)]],
      Stipend: ['', [Validators.required]],
     location: ['', [Validators.required]],
     LastDate: ['', [Validators.required]],
    });
  }

  

 

  add() {
    if (this.jobForm.valid) {
      const {
       CompanyName,
       position,
       Stipend,
       location,
       LastDate
      } = this.jobForm.value;
      this.jobService
        .addJob({
          id:0,
          CompanyName: CompanyName,
          position,
          Stipend,
          location,
          LastDate
     
        })
        .subscribe((job: JobsInterface) => {
          this.jobs.push(job);
          this.show = true;
          this.jobForm.reset({
           
          });
          this.router.navigate(['/jobs']);
        });
    }
  }

  goback(): void {
    this.location.back();
  }

  onSubmit() {
    this.add();
  }
}
