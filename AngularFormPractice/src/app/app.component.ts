import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { client } from './clientInterface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,FormsModule,CommonModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
tasks=['Components','Dependency Injection','Diretives','Pipes','Routing and Naving']
taskHasError=true;
clientModel=new client('Akki','Akki123@gmail.com',8459852462,'default','weekdays',true)
validateTask(value:string){
  if(value==='default'){
    this.taskHasError=true;
  }else{
    this.taskHasError=false;
  }
}
onSubmit(){
  console.log(this.clientModel)
}
}
