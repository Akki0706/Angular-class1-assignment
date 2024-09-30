import { Injectable } from '@angular/core';
import { Task } from './core/Interface/Interface';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{
 
  createDb(){
    const mytasks=[
      { id: 1, name: 'Task 1', startDate: new Date('2023-07-01T08:00:00'), endDate: new Date('2023-07-01T12:00:00'), duration: 4 },
      { id: 2, name: 'Task 2', startDate: new Date('2023-07-02T09:00:00'), endDate: new Date('2023-08-01T11:00:00'), duration: 2 },
      { id: 3, name: 'Task 3', startDate: new Date('2023-07-03T08:00:00'), endDate: new Date('2023-07-05T12:00:00'), duration: 4 },
      { id: 4, name: 'Task 4', startDate: new Date('2023-07-04T09:00:00'), endDate: new Date('2023-07-09T11:00:00'), duration: 2 },
      { id: 5, name: 'Task 5', startDate: new Date('2023-07-05T08:00:00'), endDate: new Date('2023-07-10T12:00:00'), duration: 4 },
      { id: 6, name: 'Task 6', startDate: new Date('2023-07-06T09:00:00'), endDate: new Date('2023-07-11T11:00:00'), duration: 2 }
    ]
  
 
    return {mytasks};
  }
 genId(items:Task[]):number{
  return items.length>0 ?Math.max(...items.map((item)=>item.id ?? 0))+1 :1;
 }
}
