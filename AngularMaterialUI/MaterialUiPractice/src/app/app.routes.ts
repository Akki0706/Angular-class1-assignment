import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
   
    {path:'about', component: DemoComponent, canActivate: [authGuard]},
    {path:'**',component:DemoComponent}
];
