import { Component } from '@angular/core';
import { character } from '../InterfaceInfo';
import { MainServicesService } from '../main-services.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor,NgIf,Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  constructor(private mainservice:MainServicesService,
    private activatedroute:ActivatedRoute,
    private location:Location){}
  selectedcharacter?:character;
  getCharacterdetail(){
    const id=Number(this.activatedroute.snapshot.paramMap.get('id'));
    this.mainservice.getcharacterdetail(id).subscribe(ch=>this.selectedcharacter=ch);
  }
  ngOnInit(){
    this.getCharacterdetail();
  }
  save(){
    if(this.selectedcharacter){
      this.mainservice.updatecharacter(this.selectedcharacter).subscribe(()=>this.goback());
    }
  }
  goback(){
     this.location.back();
  }

}
