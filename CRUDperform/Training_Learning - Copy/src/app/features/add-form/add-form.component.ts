import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApplicationService } from '../../core/services/application.service';
import { ApplicationInterface } from '../../core/Interface/AppInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [NgIf,RouterOutlet,ReactiveFormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  appform!:FormGroup; 
  show:boolean=false
  get app_name(){
    return this.appform.get('app_name');
  }

  get description(){
    return this.appform.get('description');
  }
  get img(){
    return this.appform.get('img');
  }

 


  constructor(private formBuilder: FormBuilder, 
    private Appservice:ApplicationService,
    private router:Router
  ) {}

  ngOnInit() {
    this.appform = this.formBuilder.group({
      app_name: ['',[Validators.required,Validators.minLength(4)]], 
      description:['',[Validators.required]],
    img:['',[Validators.required]],
     
    
    });
  }

  onsubmit(){
    console.log(this.appform.value);
    this.show=true;
    this.Appservice.addapp(this.appform.value as ApplicationInterface).subscribe(()=>{
      this.router.navigate(['/app'])
    }
    )
    
  }

}
