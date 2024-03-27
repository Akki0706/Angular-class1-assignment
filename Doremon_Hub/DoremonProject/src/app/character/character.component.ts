import { Component } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';
import { MainServicesService } from '../main-services.service';
import { RouterModule } from '@angular/router';
import { character } from '../InterfaceInfo';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgIf,RouterModule,NgFor],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  constructor(private mainservice:MainServicesService){}
  list?:character[];
  getCharacter(){
    return this.mainservice.getcharacter().subscribe(l=>this.list=l);
  }
  ngOnInit(){
     this.getCharacter();
  }
  delete(l:character){
    this.list=this.list?.filter(character=>character!=l);
    this.mainservice.deletecharacter(l.id).subscribe();
  }
  // addMember(name:string):void{
  //   name=name.trim();
  //   if(!name){
  //     return
  //   }
  //   this.mainservice.addMember({name} as character).subscribe(character => this.list.push(character));
  }



