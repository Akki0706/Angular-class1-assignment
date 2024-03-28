import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {

  constructor() { }
  message:string[]=[];
  addmessage(messagess:string){
    this.message.push(messagess);
  }
  clearmessage(){
    this.message=[];
  }

}
