import { Routes } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';

export const routes: Routes = [
    {path:"",redirectTo:"/rooms",pathMatch:'full'},
    {path:"booking",component:BookingListComponent},
    {path:"rooms",component:RoomListComponent},
    {path:"book-room",component:BookingFormComponent}
];
