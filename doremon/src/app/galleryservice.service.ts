import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { gallery } from './gallery/gallery';
import { Mygallery } from './mygallery';
import { MsgServiceService } from './msg-service.service';
import { HttpClient } from '@angular/common/http';
import { catchError,tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GalleryserviceService {

  private url="api/mygallery"
  constructor(private messageservice:MsgServiceService,private http:HttpClient) { }
  getimages():Observable<gallery[]>{
   return this.http.get<gallery[]>(this.url).pipe(
    tap((_) => this.log('Gallery Fetched')),
    catchError(this.handleError<gallery[]>('getimages', []))
  );;
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageservice.addmessage(`Gallery Service: ${message}`);
  }
}
