import { Injectable } from '@angular/core';
import { JobsInterface } from './Myjob';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const Myjobs=[
     { id:1,CompanyName:'Flipcart',position:'Software Engineer',Stipend:20000,location:'Pune',LastDate:25/6/2024},
     { id:2,CompanyName:'Amazon',position:'Software Engineer',Stipend:20000,location:'Pune',LastDate:25/6/2024},
     { id:3,CompanyName:'RazorPay',position:'Software Engineer',Stipend:20000,location:'Pune',LastDate:25/6/2024},
     { id:4,CompanyName:'Microsoft',position:'Software Engineer',Stipend:20000,location:'Pune',LastDate:25/6/2024},
     { id:5,CompanyName:'Google',position:'Software Engineer',Stipend:20000,location:'Pune',LastDate:25/6/2024}
    ]
    return {Myjobs}
  }
  getId<T extends JobsInterface>(checkinglength: T[]): number {
    return Number(
      checkinglength.length > 0
        ? Math.max(...checkinglength.map(t => t.id ?? 0)) + 1
        : 1
    );
  }
}
