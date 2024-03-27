import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { character, gadget } from './InterfaceInfo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const mycharacters=[
      { id: 1, name:'Doremon'},
  {id:  2, name:'Nobita'},
  {id: 3, name:'Gyan'},
  {id: 4, name:'Suniyo'},
  {id: 5, name:'Shizuka'}
    ]
    const mygadgets=[
      {id:1, toprank: 1, name:'Anywaydoor'},
  {id:2, toprank: 2, name:'bamboocopper'},
  { id:3,toprank:3, name:'biglight'},
  {id:4, toprank:4, name:'smalllight'},
  
    ]
    const mygallery=[
      {pathofimage:"https://wallpapers.com/images/hd/group-of-friend-pictures-svmcqweb3t4xlc69.jpg"},
      {pathofimage:"https://e1.pxfuel.com/desktop-wallpaper/880/741/desktop-wallpaper-cartoon-doraemon-group-doraemon-movie.jpg"},
      {pathofimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1UVTnLGUq-6La1bV1W6yH7Qk_wzlz25iPQ&usqp=CAU"},
      {pathofimage:"https://wallpapers.com/images/high/doraemon-anime-series-jyi51qfzj7w2aq1e.webp"},
      {pathofimage:"https://e1.pxfuel.com/desktop-wallpaper/850/921/desktop-wallpaper-doremon-group-computer-doraemon.jpg"},
      {pathofimage:"https://wallpapers.com/images/high/doraemon-in-outer-space-ylg89xqr55bpg3lt.webp"}
  
    ]
    return {mycharacters,mygadgets,mygallery};
  }
  getId<T extends character|gadget>(checkinglength:T[]):number{
    return Number(checkinglength.length>0? Math.max(...checkinglength.map(t=>t.id))+1 :1);
  }
  }

