import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './Interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{


  createDb(){
    const myBooking=[
      { id: 1,roomNumber: '210',startTime: '10:21 p.m',endTime: '06:25 a.m',Date:'03/05/2024' },
      {id: 2,roomNumber:'211',startTime: '11:22 p.m',endTime: '07:25 a.m',Date:'04/05/2024'},
      {id: 3,roomNumber: '212',startTime: '12:23 p.m',endTime: '08:25 a.m',Date:'05/05/2024'},
      {id: 4,roomNumber: '213',startTime: '08:24 p.m',endTime: '09:25 a.m',Date:'06/05/2024'}
    ]
    return {myBooking}
  }
  getId<T extends Booking>(checkinglength:T[]):number{
    return Number(checkinglength.length>0? Math.max(...checkinglength.map(t=>t.id))+1 :1);
  }
}
