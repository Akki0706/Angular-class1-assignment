import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { GadgetComponent } from './gadget/gadget.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { GadgetDetailsComponent } from './gadget-details/gadget-details.component';


export const routes: Routes = [
    {path:"character",component:CharacterComponent},
    {path:"gadgets",component:GadgetComponent},
    {path:"gallery",component:GalleryComponent},
    {path:"", redirectTo:"/gallery",pathMatch:"full"},
    {path:"characterId/:id" ,component:CharacterDetailsComponent},
    {path:"gadgetId/:id",component:GadgetDetailsComponent}

];
