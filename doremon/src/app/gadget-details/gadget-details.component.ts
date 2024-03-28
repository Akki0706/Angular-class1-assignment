import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { Gadgets } from '../gadget/gagdet';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GadgetServiceService } from '../gadget-service.service';


@Component({
  selector: 'app-gadget-details',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './gadget-details.component.html',
  styleUrl: './gadget-details.component.css'
})
export class GadgetDetailsComponent {
  gadget?:Gadgets;
  constructor( private gadgetservice:GadgetServiceService,
    private route:ActivatedRoute,
    private location:Location){}
  
  
  getGadget():void{
    const id=Number(this.route.snapshot.paramMap.get('id'))!;
    console.log(id);
    this.gadgetservice.getGaddetail(id).subscribe(gadget => this.gadget = gadget);
  }
  ngOnInit(){
    this.getGadget();
  }
  goBack():void{
    this.location.back();
  }
  save(){
    if(this.gadget){
      this.gadgetservice.updategadget(this.gadget).subscribe(()=>this.goBack());
    }
  }
}
