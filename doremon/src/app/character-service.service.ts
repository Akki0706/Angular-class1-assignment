import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Character } from './character/character';
import { Mycharacter } from './mycharacter';
import { MsgServiceService } from './msg-service.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor(private messageservice:MsgServiceService) { }
  getcharacter():Observable<Character[]>{
    this.messageservice.addmessage("Displaying characters.......")
    return of(Mycharacter);
  }
  getCharacter(id:number):Observable<Character>{
    const character=Mycharacter.find(character => character.id === id)!;
    this.messageservice.addmessage(`character ${id} is displayed...`)
    return of(character);

  }
}
