import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Character } from './character/character';
import { Mycharacter } from './mycharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor() { }
  getcharacter():Observable<Character[]>{
    return of(Mycharacter);
  }
  getCharacter(id:number):Observable<Character>{
    const character=Mycharacter.find(character => character.id === id)!;
    return of(character);

  }
}
