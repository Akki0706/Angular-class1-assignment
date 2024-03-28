import { Component } from '@angular/core';
import { Character } from './character';
import { NgFor } from '@angular/common';
import { CharacterServiceService } from '../character-service.service';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { RouterModule } from '@angular/router';
import { CharactersearchComponent } from '../charactersearch/charactersearch.component';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor,CharacterDetailsComponent,RouterModule,CharactersearchComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
Mycharacter:Character[]=[];
constructor(private characterservice:CharacterServiceService){}
ngOnInit(){
  this.getCharacter();
}
getCharacter(){
  this.characterservice.getCharacter().subscribe(charactervar=>this.Mycharacter=charactervar);
  console.log(this.Mycharacter);
}
add(name:string):void{
  name=name.trim();
  if(!name){
    return;
  }
  this.characterservice.addchar({name} as Character ).subscribe(charactervar => this.Mycharacter.push(charactervar));
}
delete(char:Character):void{
  this.Mycharacter=this.Mycharacter?.filter((m)=>m!=char);
  this.characterservice.deletechar(char.id).subscribe();
}
}
