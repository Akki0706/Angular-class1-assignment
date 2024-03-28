import { Component } from '@angular/core';
import { Gadgets } from './gagdet';
import { NgFor,NgIf } from '@angular/common';
import { GadgetServiceService } from '../gadget-service.service';
import { GadgetDetailsComponent } from '../gadget-details/gadget-details.component';
import { RouterModule } from '@angular/router';
import { GagdetsearchComponent } from '../gagdetsearch/gagdetsearch.component';

@Component({
  selector: 'app-gadget',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule,GadgetDetailsComponent,GagdetsearchComponent],
  templateUrl: './gadget.component.html',
  styleUrl: './gadget.component.css'
})
export class GadgetComponent {
  MyGadget:Gadgets[]=[];
constructor(private gadgetservice:GadgetServiceService){}
ngOnInit(){
  this.getgadget();
}
getgadget(){
  this.gadgetservice.getgadget().subscribe(gadgetvar=>this.MyGadget=gadgetvar);

}
addgadget(name: string): void {
  name = name.trim();
  if (!name) {
    return;
  }
  this.gadgetservice
    .addgadget({ name } as Gadgets)
    .subscribe((gadget) => this.MyGadget.push(gadget));
}
deletegad(gad: Gadgets): void {
  this.MyGadget = this.MyGadget.filter((m) => m != gad);
  this.gadgetservice.deleteGad(gad.id).subscribe();
}

}
