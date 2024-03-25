import { Component } from '@angular/core';
import { MainServicesService } from '../main-services.service';
import { gadget } from '../InterfaceInfo';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-gadgets',
  standalone: true,
  imports: [RouterModule,NgIf,NgFor],
  templateUrl: './gadgets.component.html',
  styleUrl: './gadgets.component.css'
})
export class GadgetsComponent {
  constructor(private mainservice:MainServicesService){}
  list?:gadget[];
  getGadget(){
    this.mainservice.getgadget().subscribe(l=>this.list=l);
  }
  ngOnInit(){
    this.getGadget();
  }
  delete(l:gadget){
    this.list=this.list?.filter(gadget=>gadget!=l);
    this.mainservice.deletegadget(l.toprank).subscribe();
  }

}
