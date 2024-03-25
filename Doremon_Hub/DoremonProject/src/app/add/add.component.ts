import { Component } from '@angular/core';
import { MainServicesService } from '../main-services.service';
import { NgFor,NgIf } from '@angular/common';
import { Location } from '@angular/common';
import { character } from '../InterfaceInfo';
import { gadget } from '../InterfaceInfo';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(private mainservice:MainServicesService,
    private location:Location){}
  add(opt:string,name:string,imgpath:string){

      name=name.trim();
      imgpath=imgpath.trim();
      
      if(!name||!opt||!imgpath){
        return;
      }
    if(opt=="characters"){
      const Talent=name;
      this.mainservice.addchar({name} as character).subscribe(()=>this.goback());
    }
    if(opt=="gadgets"){
      const work=name;
      this.mainservice.addgad({name} as gadget).subscribe(()=>this.goback());
    }
    
  }
  goback(){
    this.location.back();
  }

}
