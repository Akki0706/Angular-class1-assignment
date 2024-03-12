import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Gadgets } from './gadget/gagdet';
import { MyGadgets } from './mygagdet';

@Injectable({
  providedIn: 'root'
})
export class GadgetServiceService {

  constructor() { }
  getgadget():Observable<Gadgets[]>{
    return of(MyGadgets);
  }
  getCharacter(id:number):Observable<Gadgets>{
    const gadgets=MyGadgets.find(gadet => gadet.toprank === id)!;
    return of(gadgets);

  }

}
