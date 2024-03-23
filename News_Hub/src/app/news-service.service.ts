import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { NEWS } from './interface';
import { catchError,tap,map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
private newsurl = 'api/news';
constructor(private http:HttpClient){}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.log(error);
    return of(result as T);
  };
}
httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
  getNews(): Observable<NEWS[]> {
    return this.http
      .get<NEWS[]>(this.newsurl)
  }
  getOnenews(id: number): Observable<NEWS> {
    const url = `${this.newsurl}/${id}`;
    return this.http
      .get<NEWS>(url)
      .pipe(catchError(this.handleError<NEWS>('getOnenews id=${id}')));
  }
  updateNews(updatenews: NEWS): Observable<any> {
    return this.http
      .put(this.newsurl, updatenews, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updatenews')));
  }
  deleteNews(id: number): Observable<NEWS> {
    const url = `${this.newsurl}/${id}`;
    return this.http
      .delete<NEWS>(url, this.httpOptions)
      .pipe(catchError(this.handleError<NEWS>('deleteNews')));
  }

  addNews(addnews: NEWS): Observable<NEWS> {
    return this.http
      .post<NEWS>(this.newsurl, addnews, this.httpOptions)
      .pipe(catchError(this.handleError<NEWS>('addMember')));
  }
  searchNews(word: string): Observable<NEWS[]> {
    if (!word.trim()) {
      return of([]);
    }
    return this.http
      .get<NEWS[]>(`${this.newsurl}/?title=${word}`)
      .pipe(catchError(this.handleError<NEWS[]>('searchNews', [])));
  }
}
