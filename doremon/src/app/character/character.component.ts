import { Component } from '@angular/core';
import { Character } from './character';
import { NgFor } from '@angular/common';
import { CharacterServiceService } from '../character-service.service';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor,CharacterDetailsComponent,RouterModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
Mycharacter?:Character[];
constructor(private characterservice:CharacterServiceService){}
ngOnInit(){
  this.getCharacter();
}
getCharacter(){
  this.characterservice.getcharacter().subscribe(charactervar=>this.Mycharacter=charactervar);
}
}
