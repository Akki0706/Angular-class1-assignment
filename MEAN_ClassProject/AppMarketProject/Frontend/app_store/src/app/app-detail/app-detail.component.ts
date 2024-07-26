import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApplicationInterface } from '../../../AppInterface';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-app-detail',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule,NgbCarouselModule],
  templateUrl: './app-detail.component.html',
  styleUrl: './app-detail.component.css'
})
export class AppDetailComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private appdetailService:AppServiceService,
    private location:Location,
    private route:ActivatedRoute){}
  
appdetails?:ApplicationInterface
getAppDetail():void{
const id1=Number(this.route.snapshot.paramMap.get('id'));
this.appdetailService.getAppDetail(id1).subscribe(appdetail => this.appdetails = appdetail);
}
ngOnInit(){
this.getAppDetail();
}
goBack():void{
this.location.back();
}
}
