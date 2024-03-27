import { Component } from '@angular/core';
import { MainServicesService } from '../main-services.service';
import { ActivatedRoute } from '@angular/router';
import { gadget } from '../InterfaceInfo';
import { NgIf } from '@angular/common';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gadget-details',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './gadget-details.component.html',
  styleUrl: './gadget-details.component.css'
})
export class GadgetDetailsComponent {
  constructor(private mainservice:MainServicesService,
    private route:ActivatedRoute,
    private location:Location){}
 selectedgadget?:gadget;

getGadgetdetail(){
  const myid=Number(this.route.snapshot.paramMap.get('id'));
  this.mainservice.getgadgetdetail(myid).subscribe(g=>this.selectedgadget=g);
  console.log(this.selectedgadget)
}
ngOnInit(){
  this.getGadgetdetail();
}
save(){
  if(this.selectedgadget){
    this.mainservice.updategadget(this.selectedgadget).subscribe(()=>this.goback());
  }
}
goback(){
  this.location.back();
}
}
