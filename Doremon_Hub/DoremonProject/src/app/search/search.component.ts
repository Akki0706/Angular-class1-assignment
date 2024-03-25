import { Component } from '@angular/core';
import { MainServicesService } from '../main-services.service';
import { Observable,of } from 'rxjs';
import { character } from '../InterfaceInfo';
import { Subject,debounceTime,distinctUntilChanged,switchMap } from 'rxjs';
import { AsyncPipe,NgFor,NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor,NgIf,AsyncPipe,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private mainservice:MainServicesService,private location:Location){}
  private searchTerms=new Subject<string>();
  selected$!:Observable<any>;
  option:string="";
  search(term:string,opt:string){
    if(!term.trim()){
      return;
    }
    this.searchTerms.next(term);
    this.option=opt;
    console.log(this.option);
  }
  ngOnInit(){
   
      this.selected$=this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term:string)=>this.mainservice.searchdata(term,this.option))
      )
      console.log(this.selected$);
    
    
   
  }
  goback(){
    this.location.back();
  }

}
