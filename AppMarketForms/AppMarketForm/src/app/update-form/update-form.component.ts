import { NgIf } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgbToastModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  title = 'UpdateForm';

  appform!:FormGroup; 
  show:boolean=false

  get AppName(){
    return this.appform.get('AppName');
  }

  get Description(){
    return this.appform.get('Description');
  }
  get ReleaseDate(){
    return this.appform.get('ReleaseDate');
  }

  get Version(){
    return this.appform.get('Version');
  }

  get Genre(){
    return this.appform.get('Genre');
  }



  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.appform = this.formBuilder.group({
      AppName: ['FlipCart',[Validators.required,Validators.minLength(4)]], 
      Description:['Good App for Shopping',[Validators.required]],
      ReleaseDate:['02/04/2008',[Validators.required]],
      Version:['1.2',[Validators.required]],
      Genre:['Games',[Validators.required]],
      Visibility:['True',[Validators.required]],
      Rating:['4',[Validators.required]],
      Downloads:['2',[Validators.required]]


    
    });
  }

  onsubmit(){
   
    console.log(this.appform.value);
    this.show=true;
    this.appform.reset();
   
    
  }

}
