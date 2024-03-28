import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { Character } from '../character/character';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterServiceService } from '../character-service.service';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  
  character?:Character;
constructor( private characterservice:CharacterServiceService,
  private route:ActivatedRoute,
  private location:Location){}

getCharacter():void{
  const id=Number(this.route.snapshot.paramMap.get('id'))!;
  console.log(id)
  this.characterservice.getChardetail(id).subscribe(character => this.character = character);
}
ngOnInit(){
  this.getCharacter();
}
goBack():void{
  this.location.back();
}
save(){
  if(this.character){
    this.characterservice.updatecharacter(this.character).subscribe(() => this.goBack());
  }
}

}
