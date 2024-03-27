import { Injectable } from '@angular/core';
import { character,gadget,gallery } from './InterfaceInfo';
import { Observable,of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServicesService {
  constructor(private http:HttpClient) { }
  httpOptions={headers:new HttpHeaders({'Content-type':'json-description'})}
  private url1='api/mycharacters'
  private url2='api/mygadgets'
  private url3='api/mygallery'

  getcharacter():Observable<character[]>{
    return this.http.get<character[]>(this.url1);
  }
  getgadget():Observable<gadget[]>{
    return this.http.get<gadget[]>(this.url2);
  }
  getgallery():Observable<gallery[]>{
    return this.http.get<gallery[]>(this.url3);
  }
  getcharacterdetail(id:number):Observable<character>{
    return this.http.get<character>(`${this.url1}/${id}`);
  }
  getgadgetdetail(toprank:number):Observable<gadget>{
    return this.http.get<gadget>(`${this.url2}/${toprank}`);
  }
  searchdata(term:string,compo:string):Observable<any>{
      const newurl=`api/my${compo}`
      return this.http.get(`${newurl}/?name=${term}`)
    
  }
  addchar(character:character):Observable<character[]>{
  
      return this.http.post<character[]>(this.url1,character,this.httpOptions);
    
  }
  addgad(gadget:gadget):Observable<gadget[]>{
      return this.http.post<gadget[]>(this.url2,gadget,this.httpOptions);
  }
  deletecharacter(id:number):Observable<character>{
      return this.http.delete<character>(`${this.url1}/${id}`, this.httpOptions)
  }
  deletegadget(id:number):Observable<gadget>{
    return this.http.delete<gadget>(`${this.url1}/${id}`, this.httpOptions)
  }
  updatecharacter(character:character):Observable<any>{
    return this.http.put(this.url1,character,this.httpOptions);
  }
  updategadget(gadget:gadget):Observable<any>{
    return this.http.put(this.url2,gadget,this.httpOptions);
  }

}
