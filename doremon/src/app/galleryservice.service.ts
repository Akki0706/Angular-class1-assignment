import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { gallery } from './gallery/gallery';
import { Mygallery } from './mygallery';
import { MsgServiceService } from './msg-service.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryserviceService {

  
  constructor(private messageservice:MsgServiceService) { }
  getimages():Observable<gallery[]>{
    this.messageservice.addmessage("Dispalying gallery.....")
    return of(Mygallery);
  }
}
