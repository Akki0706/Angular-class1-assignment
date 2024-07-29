import { Component } from '@angular/core';
import { ApplicationService } from '../../core/services/application.service';
import { ActivatedRoute } from '@angular/router';
import { ApplicationInterface } from '../../core/Interface/AppInterface';
import { Location, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-details',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './search-details.component.html',
  styleUrl: './search-details.component.css'
})
export class SearchDetailsComponent {
  constructor(
    private Appservice:ApplicationService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  apps?: ApplicationInterface;

  ngOnInit(): void {
    this.getappdestail();
  }

  getappdestail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.Appservice.getappdetail(id).subscribe((n) => {
      this.apps = n;
    });
  }
  goBack(): void {
    this.location.back();
  }
 

}
