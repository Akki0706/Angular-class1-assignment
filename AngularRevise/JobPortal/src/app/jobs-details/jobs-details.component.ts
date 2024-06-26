import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { ActivatedRoute } from '@angular/router';
import { JobsInterface } from '../Myjob';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jobs-details',
  standalone: true,
  imports: [],
  templateUrl: './jobs-details.component.html',
  styleUrl: './jobs-details.component.css'
})
export class JobsDetailsComponent {

  constructor(private jobdetailService:MainServiceService,
    private location:Location,
    private route:ActivatedRoute){}
  
jobdetails?:JobsInterface
getJobDetail():void{
const id1=Number(this.route.snapshot.paramMap.get('id'));
this.jobdetailService.getJobDetail(id1).subscribe(jobdetail => this.jobdetails = jobdetail);
}
ngOnInit(){
this.getJobDetail();
}
goBack():void{
this.location.back();
}

}
