import { Injectable } from '@angular/core';
import { Observable,catchError,of,tap } from 'rxjs';
import { Character } from './character/character';
import { Mycharacter } from './mycharacter';
import { MsgServiceService } from './msg-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  private characterUrl='http://localhost:5000/characters';
  httpOptions={headers:new HttpHeaders({'Content-type': 'application/json'}),};

  constructor(private messageservice:MsgServiceService,
    private http:HttpClient) { }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(error);
        return of(result as T);
      };
    }
  
    private log(message: string) {
      this.messageservice.addmessage(`Chararter Service: ${message}`);
    }

  
  getCharacter():Observable<Character[]>{
return this.http.get<Character[]>(this.characterUrl).pipe(
  tap((_)=> this.log('Fetched Character')),
  catchError(this.handleError<Character[]>('getCharacter',[]))
);
 }
 getChardetail(id1: number): Observable<Character> {
  const url = `${this.characterUrl}/${id1}`;
  return this.http.get<Character>(url).pipe(
    tap((_) => this.log(`Charater Fetched id = ${id1}`)),
    catchError(this.handleError<Character>(`getChardetail id=${id1}`))
  );
}
updatecharacter(char: Character): Observable<any> {
  const url = `${this.characterUrl}/${char.char_id}`;
  return this.http.put(url, char, this.httpOptions).pipe(
    tap((_) => this.log('Updated Character')),
    catchError(this.handleError<Character>('updatechar character'))
  );
}
addchar(char: Character): Observable<Character> {
  return this.http
    .post<Character>(this.characterUrl, char, this.httpOptions)
    .pipe(
      tap((newMember: Character) =>
        this.log(`added character with id=${newMember.char_id}`)
      ),
      catchError(this.handleError<Character>('addMember'))
    );
}
deletechar(id: number): Observable<Character> {
  const url = `${this.characterUrl}/${id}`;
  return this.http.delete<Character>(url, this.httpOptions).pipe(
    tap((_) => this.log(`Deleted Character id=${id}`)),
    catchError(this.handleError<Character>('deleteMember'))
  );
}
  searchcharacter(word: string): Observable<Character[]> {
    if (!word.trim()) {
      return of([]);
    }
    return this.http
      .get<Character[]>(`${this.characterUrl}/search?name=${word}`)
      .pipe(
        tap((x) =>
          x.length
            ? this.log(`Characters Found ${word}`)
            : this.log(`Characters not found ${word}`)
        ),
        catchError(this.handleError<Character[]>('searchMembers', []))
      );
}
}
