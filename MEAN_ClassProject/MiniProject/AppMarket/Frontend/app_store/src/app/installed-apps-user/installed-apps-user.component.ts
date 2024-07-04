import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { ApplicationInterface } from '../../../AppInterface';
import { NgFor } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-installed-apps-user',
  standalone: true,
  imports: [NgFor,RouterModule,RouterOutlet,NgbRatingModule],
  templateUrl: './installed-apps-user.component.html',
  styleUrl: './installed-apps-user.component.css',
  styles: `
			i {
				position: relative;
				display: inline-block;
				font-size: 2.5rem;
				padding-right: 0.1rem;
				color: #d3d3d3;
			}

			.filled {
				color: red;
				overflow: hidden;
				position: absolute;
				top: 0;
				left: 0;
			}
		`,
})
export class InstalledAppsUserComponent {

  rating = 3.5;
  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
  apps: ApplicationInterface[] = [];

  constructor(private appService: AppServiceService) {}

  ngOnInit(): void {
    this.getApp();
  }

  getApp(): void {
    this.appService.getApp().subscribe((app) => (this.apps = app));
  }

  
  deleteApp(app:ApplicationInterface) {
    if(app.id!==undefined){
    this.apps=this.apps?.filter(l=>l!=app);
    this.appService.deleteApp(app.id).subscribe();}
  }


}
