import { Routes } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';

export const routes: Routes = [
    {path:"",redirectTo:"/book-room",pathMatch:'full'},
    {path:"booking",component:BookingListComponent},
    {path:"book-room",component:BookingFormComponent},
    {path:"update/:id",component:UpdateFormComponent}
];
