import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { Gadgets } from '../gadget/gagdet';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterServiceService } from '../character-service.service';

@Component({
  selector: 'app-gadget-details',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './gadget-details.component.html',
  styleUrl: './gadget-details.component.css'
})
export class GadgetDetailsComponent {
  


}
