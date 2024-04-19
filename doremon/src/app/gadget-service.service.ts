import { Injectable } from '@angular/core';
import { Observable,of,catchError,tap } from 'rxjs';
import { Gadgets } from './gadget/gagdet';
import { MyGadgets } from './mygagdet';
import { MsgServiceService } from './msg-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GadgetServiceService {
  private gadgetUrl='http://localhost:5000/gadgets';
  httpOptions={
    headers:new HttpHeaders({'Content-Type': 'application/json'}),
  }

  constructor(private messageservice:MsgServiceService,
    private http : HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(error);
        return of(result as T);
      };
    }
  
    private log(message: string) {
      this.messageservice.addmessage(`Gadget Service: ${message}`);
    }

    getgadget(): Observable<Gadgets[]> {
      return this.http.get<Gadgets[]>(this.gadgetUrl).pipe(
        tap((_) => this.log('Gadgets Fetched')),
        catchError(this.handleError<Gadgets[]>('getgadget', []))
      );
    }
    getGaddetail(id1: number): Observable<Gadgets> {
      const url = `${this.gadgetUrl}/${id1}`;
      return this.http.get<Gadgets>(url).pipe(
        tap((_) => this.log(`Gadget Fetched: ${id1}`)),
        catchError(this.handleError<Gadgets>(`getGaddetail ${id1}`))
      );
    }
    updategadget(gadget: Gadgets): Observable<any> {
       const url = `${this.gadgetUrl}/${gadget.gad_id}`;
      return this.http.put(url, gadget, this.httpOptions).pipe(
        tap((_) => this.log('Updated Gadget')),
        catchError(this.handleError<Gadgets>('updategadget gadget'))
      );
    }
  
    addgadget(gad: Gadgets): Observable<Gadgets> {
      return this.http
        .post<Gadgets>(this.gadgetUrl, gad, this.httpOptions)
        .pipe(
          tap((newMember: Gadgets) =>
            this.log(`added gadget with id=${newMember.gad_id}`)
          ),
          catchError(this.handleError<Gadgets>('addMember'))
        );
    }
    deleteGad(id: number): Observable<Gadgets> {
      const url = `${this.gadgetUrl}/${id}`;
      return this.http.delete<Gadgets>(url, this.httpOptions).pipe(
        tap((_) => this.log(`Deleted Gadgets id=${id}`)),
        catchError(this.handleError<Gadgets>('deleteMember'))
      );
    }
      searchgadgets(word: string): Observable<Gadgets[]> {
        if (!word.trim()) {
          return of([]);
        }
        return this.http
          .get<Gadgets[]>(`${this.gadgetUrl}/search?name=${word}`)
          .pipe(
            tap((x) =>
              x.length
                ? this.log(`Found members matching ${word}`)
                : this.log(`No members matching ${word}`)
            ),
            catchError(this.handleError<Gadgets[]>('searchMembers', []))
          );
      }


}
