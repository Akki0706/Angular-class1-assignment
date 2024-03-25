import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { GadgetDetailsComponent } from './gadget-details/gadget-details.component';

export const routes: Routes = [
    {path:"" , redirectTo:"/gallery" ,pathMatch:'full'},
    {path:"character", component:CharacterComponent},
    {path:"gadgets",component:GadgetsComponent},
    {path:"gallery",component:GalleryComponent},
    {path:"character/:id" ,component:CharacterDetailsComponent},
    {path:"gadgets/:id" , component:GadgetDetailsComponent},
];
