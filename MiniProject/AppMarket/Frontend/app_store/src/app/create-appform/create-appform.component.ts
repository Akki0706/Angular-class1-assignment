import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { ApplicationInterface } from '../../../AppInterface';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-create-appform',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterOutlet, RouterModule, NgbToastModule],
  templateUrl: './create-appform.component.html',
  styleUrls: ['./create-appform.component.css']
})
export class CreateAppformComponent {
  apps: ApplicationInterface[] = [];
  applicationForm!: FormGroup;
  show: boolean = false;

  get AppName() {
    return this.applicationForm.get('AppName');
  }

  get description() {
    return this.applicationForm.get('description');
  }

  get releasedate() {
    return this.applicationForm.get('releasedate');
  }

  get version() {
    return this.applicationForm.get('version');
  }

  get genre() {
    return this.applicationForm.get('genre');
  }

  get visibility() {
    return this.applicationForm.get('visibility');
  }

  get imageurl() {
    return this.applicationForm.get('imageurl');
  }

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private appService: AppServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.applicationForm = this.fb.group({
      AppName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      releasedate: [this.getCurrentDate(), [Validators.required]],
      version: ['1.0.0', [Validators.required]],
      genre: ['', [Validators.required]],
      visibility: [true, [Validators.required]],
      imageurl: [
        'https://example.com/default-image.png',
        [Validators.required],
      ], // Default image URL
    });
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().slice(0, 10);
  }

  toggleVisibility(event: any) {
    this.applicationForm.patchValue({
      visibility: event.target.checked,
    });
  }

  add() {
    if (this.applicationForm.valid) {
      const {
        AppName,
        description,
        releasedate,
        version,
        genre,
        visibility,
        imageurl,
      } = this.applicationForm.value;
      this.appService
        .addApp({
          app_name: AppName,
          description,
          release_date: releasedate,
          version,
          genre,
          visibility,
          imageurl, // Include image URL in the form data
        })
        .subscribe((app: ApplicationInterface) => {
          this.apps.push(app);
          this.show = true;
          this.applicationForm.reset({
            releasedate: this.getCurrentDate(),
            version: '1.0.0',
            visibility: true,
            imageurl: 'https://example.com/default-image.png',
          });
          this.router.navigate(['/home']);
        });
    }
  }

  goback(): void {
    this.location.back();
  }

  onSubmit() {
    this.add();
  }
}
