import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Room } from './roomInterface';
import { Booking } from './bookingInterface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const Room=[
      {id:1,name:'Room1',capacity:2},
      {id:2,name:'Room2',capacity:5},
      {id:3,name:'Room3',capacity:6},
      {id:4,name:'Room4',capacity:3},
      {id:5,name:'Room5',capacity:4},
    ]

    const Booking=[
      { id: 1,roomId: 210,startTime: '02/05/2024',endTime: '03/05/2024' },
      { id: 2,roomId: 211,startTime: '04/05/2024',endTime: '05/05/2024' },
      { id: 3,roomId: 212,startTime: '05/05/2024',endTime: '06/05/2024' },
      { id: 4,roomId: 213,startTime: '06/05/2024',endTime: '07/05/2024' },
    ]
    return {Room,Booking}
  }
  getId<T extends Room|Booking>(checkinglength:T[]):number{
    return Number(checkinglength.length>0? Math.max(...checkinglength.map(t=>t.id))+1 :1);
  }


}
