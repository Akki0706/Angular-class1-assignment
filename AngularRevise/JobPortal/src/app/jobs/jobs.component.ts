import { Component } from '@angular/core';
import { JobsInterface } from '../Myjob';
import { MainServiceService } from '../main-service.service';
import { NgFor } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgFor,RouterModule,RouterOutlet],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs: JobsInterface[] = [];

  constructor(private jobService: MainServiceService) {}

  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void {
    this.jobService.getJob().subscribe((job) => (this.jobs = job));
    console.log(this.jobs);
  }

  
  deleteJob(job:JobsInterface) {
    if(job.id!==undefined){
    this.jobs=this.jobs?.filter(l=>l!=job);
    this.jobService.deleteJob(job.id).subscribe();}
  }

}
