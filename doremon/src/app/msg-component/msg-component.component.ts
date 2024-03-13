import { Component } from '@angular/core';
import { MsgServiceService } from '../msg-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-msg-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './msg-component.component.html',
  styleUrl: './msg-component.component.css'
})
export class MsgComponentComponent {
constructor(public messageservice:MsgServiceService){}
goback():void{
  this.messageservice.clearmessage();
}
}
