import { Routes } from '@angular/router';
import { TaskComponent } from './core/Shared/Components/task/task.component';


export const routes: Routes = [
{path:'task',component:TaskComponent},
{path:"",redirectTo:"/task",pathMatch:"full"}

];
