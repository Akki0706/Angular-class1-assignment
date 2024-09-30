import { Routes } from '@angular/router';
import { TaskComponent } from './core/Shared/Components/task/task.component';
import { AddFormComponent } from './core/features/add-form/add-form.component';

export const routes: Routes = [
{path:'task',component:TaskComponent},
{path:"",redirectTo:"/task",pathMatch:"full"},
{path:'addform',component:AddFormComponent}

];
