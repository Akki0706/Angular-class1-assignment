
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { of } from 'rxjs';
// import { ApplicationInterface } from '../../AppInterface';
// import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import { catchError } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class AppServiceService {

//   constructor(private http: HttpClient) { }

//   httpOptions = {
//     headers: new HttpHeaders({'Content-Type': 'application/json'})
//   };

//   private url = 'api/myApplication';

//   getApp(): Observable<ApplicationInterface[]> {
//     return this.http.get<ApplicationInterface[]>(this.url).pipe(
//       catchError(this.handleError<ApplicationInterface[]>('getApp', []))
//     );
//   }

//   getAppDetail(id:number):Observable<ApplicationInterface>{
//     return this.http.get<ApplicationInterface>(`${this.url}/${id}`).pipe(
//       catchError(this.handleError<ApplicationInterface>(`getAppDetail id=${id}`))
//     );
//   }

//   deleteApp(id:number):Observable<ApplicationInterface>{
//     return this.http.delete<ApplicationInterface>(`${this.url}/${id}`, this.httpOptions).pipe(
     
//       catchError(this.handleError<ApplicationInterface>('deleteApp'))
//     )
//   }

//   addApp(App:ApplicationInterface):Observable<ApplicationInterface>{
  
//     return this.http.post<ApplicationInterface>(this.url,App,this.httpOptions).pipe(
      
//       catchError(this.handleError<ApplicationInterface>('addApp'))
//     );
//   }
// updateApp(App:ApplicationInterface):Observable<ApplicationInterface>{
  
//   return this.http.put<ApplicationInterface>(this.url,App,this.httpOptions).pipe(
    
//     catchError(this.handleError<ApplicationInterface>('updateApp'))
//   );

// }
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error); 
//       return of(result as T);
//     };
//   }


  
// }
















import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ApplicationInterface } from '../../AppInterface';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { CommentInterface } from '../../commentInterface';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',authorization:`${localStorage.getItem('authorization')}`})

  };

  private url='http://localhost:3000/applications' 
  private url1='http://localhost:3000/applications/comment'
  private url2='http://localhost:3000/applications/downloads'

  getApp(): Observable<ApplicationInterface[]> {
    return this.http.get<ApplicationInterface[]>(this.url).pipe(
      catchError(this.handleError<ApplicationInterface[]>('getApp', []))
    );
  }

  getAppDetail(id:number):Observable<ApplicationInterface>{
    return this.http.get<ApplicationInterface>(`${this.url}/${id}`).pipe(
      catchError(this.handleError<ApplicationInterface>(`getAppDetail id=${id}`))
    );
  }

  deleteApp(id:number):Observable<ApplicationInterface>{
    return this.http.delete<ApplicationInterface>(`${this.url}/${id}`, this.httpOptions).pipe(
     
      catchError(this.handleError<ApplicationInterface>('deleteApp'))
    )
  }

  addApp(App:ApplicationInterface):Observable<ApplicationInterface>{
  
    return this.http.post<ApplicationInterface>(this.url,App,this.httpOptions).pipe(
      
      catchError(this.handleError<ApplicationInterface>('addApp'))
    );
  }
updateApp(App:ApplicationInterface):Observable<ApplicationInterface>{
  
  return this.http.put<ApplicationInterface>(this.url,App,this.httpOptions).pipe(
    
    catchError(this.handleError<ApplicationInterface>('updateApp'))
  );

}

//commnets

addcomment(comm:CommentInterface,id:string):Observable<CommentInterface>{
  
  return this.http.post<CommentInterface>(`${this.url1}/${id}`,comm,this.httpOptions).pipe(
    
    catchError(this.handleError<CommentInterface>('addcomment'))
  );

}

deletecomment(id:string):Observable<CommentInterface>{
  return this.http.delete<CommentInterface>(`${this.url1}/delete/${id}`, this.httpOptions).pipe(
   
    catchError(this.handleError<CommentInterface>('deletecomment'))
  )
}



//downloads
addtodownload(id:string):Observable<ApplicationInterface>{
  
  return this.http.post<ApplicationInterface>(`${this.url2}/${id}`,'',this.httpOptions).pipe(
    
    catchError(this.handleError<ApplicationInterface>('addtodownload'))
  );

}
getdownload():Observable<string[]>{
  return this.http.get<string[]>(this.url2,this.httpOptions).pipe(

   catchError(this.handleError<string[]>('getdownload'))
  );
}
deletedownload(id:string):Observable<string[]>{
  return this.http.delete<string[]>(`${this.url2}/${id}`, this.httpOptions).pipe(
   
    catchError(this.handleError<string[]>('deletedownload'))
  )
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }


  
}

