import { Component } from '@angular/core';
import { Gadgets } from './gagdet';
import { NgFor,NgIf } from '@angular/common';
import { GadgetServiceService } from '../gadget-service.service';
import { GadgetDetailsComponent } from '../gadget-details/gadget-details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gadget',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule,GadgetDetailsComponent],
  templateUrl: './gadget.component.html',
  styleUrl: './gadget.component.css'
})
export class GadgetComponent {
  MyGadget?:Gadgets[];
constructor(private gadgetservice:GadgetServiceService){}
ngOnInit(){
  this.getgadget();
}
getgadget(){
  this.gadgetservice.getgadget().subscribe(gadgetvar=>this.MyGadget=gadgetvar);
}

}
