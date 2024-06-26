import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [NgIf,RouterOutlet,ReactiveFormsModule,NgbToastModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent {
  title = 'Create Form';

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
      AppName: ['',[Validators.required,Validators.minLength(4)]], 
      Description:['',[Validators.required]],
      ReleaseDate:['',[Validators.required]],
      Version:['',[Validators.required]],
      Genre:['',[Validators.required]]

    
    });
  }

  onsubmit(){
    console.log(this.appform.value);
    this.show=true;
    
  }
}
