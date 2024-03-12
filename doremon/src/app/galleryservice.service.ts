import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { gallery } from './gallery/gallery';
import { Mygallery } from './mygallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryserviceService {

  
  constructor() { }
  getimages():Observable<gallery[]>{
    return of(Mygallery);
  }
}
