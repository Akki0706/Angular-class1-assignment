import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Booking } from './Interface';
import { HttpHeaders } from '@angular/common/http';
import { catchError,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private url = 'api/myBooking';

  getlist(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.url).pipe(
      catchError(this.handleError<Booking[]>('getlist', []))
    );
  }

  getlistbyid(id:number):Observable<Booking>{
    return this.http.get<Booking>(`${this.url}/${id}`).pipe(
      catchError(this.handleError<Booking>(`getlistbyid id=${id}`))
    );
  }

  cancelBooking(id:number):Observable<Booking>{
    return this.http.delete<Booking>(`${this.url}/${id}`, this.httpOptions).pipe(
     
      catchError(this.handleError<Booking>('cancelBooking'))
    )
  }

  addBooking(Booking:Booking):Observable<Booking>{
  
    return this.http.post<Booking>(this.url,Booking,this.httpOptions).pipe(
      
      catchError(this.handleError<Booking>('addBooking'))
    );
  }
updateBooking(Booking:Booking):Observable<Booking>{
  
  return this.http.put<Booking>(this.url,Booking,this.httpOptions).pipe(
    
    catchError(this.handleError<Booking>('updateBooking'))
  );

}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }


}
