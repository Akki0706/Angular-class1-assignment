import { Routes } from '@angular/router';
import { UpdateFormComponent } from './update-form/update-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
export const routes: Routes = [
    {path:'update',component:UpdateFormComponent},
    {path:'create',component:CreateFormComponent}

];
