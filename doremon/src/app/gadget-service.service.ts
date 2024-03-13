import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Gadgets } from './gadget/gagdet';
import { MyGadgets } from './mygagdet';
import { MsgServiceService } from './msg-service.service';

@Injectable({
  providedIn: 'root'
})
export class GadgetServiceService {

  constructor(private messageservice:MsgServiceService) { }
  getgadget():Observable<Gadgets[]>{
    this.messageservice.addmessage("Displaying Gadgets....")
    return of(MyGadgets);
  }
  getCharacter(id:number):Observable<Gadgets>{
    const gadgets=MyGadgets.find(gadet => gadet.toprank === id)!;
    this.messageservice.addmessage(`Gadget ${id}  is displayed....`)
    return of(gadgets);

  }

}
