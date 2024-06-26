import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { JobsInterface } from './Myjob';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private url = 'api/Myjobs';

  getJob(): Observable<JobsInterface[]> {
    return this.http.get<JobsInterface[]>(this.url).pipe(
      catchError(this.handleError<JobsInterface[]>('getJob', []))
    );
  }

  getJobDetail(id:number):Observable<JobsInterface>{
    return this.http.get<JobsInterface>(`${this.url}/${id}`).pipe(
      catchError(this.handleError<JobsInterface>(`getJobDetail id=${id}`))
    );
  }

  deleteJob(id:number):Observable<JobsInterface>{
    return this.http.delete<JobsInterface>(`${this.url}/${id}`, this.httpOptions).pipe(
     
      catchError(this.handleError<JobsInterface>('deleteJob'))
    )
  }

  addJob(App:JobsInterface):Observable<JobsInterface>{
  
    return this.http.post<JobsInterface>(this.url,App,this.httpOptions).pipe(
      
      catchError(this.handleError<JobsInterface>('addJob'))
    );
  }
updateJob(App:JobsInterface):Observable<JobsInterface>{
  
  return this.http.put<JobsInterface>(this.url,App,this.httpOptions).pipe(
    
    catchError(this.handleError<JobsInterface>('updateJob'))
  );

}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

}
