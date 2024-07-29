import { Component } from '@angular/core';

import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { NgIf } from '@angular/common';
import { ApplicationService } from '../../core/services/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationInterface } from '../../core/Interface/AppInterface';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
 title = 'UpdateForm';

  appform!:FormGroup; 
  show:boolean=false

  get app_name(){
    return this.appform.get('app_name');
  }

  get description(){
    return this.appform.get('description');
  }

  get img(){
    return this.appform.get('img')
  }



  constructor(private formBuilder: FormBuilder,
    private Appservice:ApplicationService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit() {
    this.appform = this.formBuilder.group({
      id:[''],
     app_name: ['',[Validators.required,Validators.minLength(4)]], 
      description:['',[Validators.required]],
     img:['',[Validators.required]]
    });

    const  id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.Appservice.getappdetail(id).subscribe((d)=>
    {
      this.appform.patchValue({
         id:d.id,
         app_name:d.app_name,
         description: d.description,
         img:d.img
      })
    })
  }

  onsubmit(){
   
    console.log(this.appform.value);
    this.show=true;

    this.Appservice.updateapp(this.appform.value as ApplicationInterface).subscribe(()=>{
      this.router.navigate(['/app'])
    }
  )
   
    
  }
}
