import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ApplicationInterface } from '../../../AppInterface';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgbToastModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  app1?: ApplicationInterface;
  updateForm!: FormGroup;
  show: boolean = false;
  get AppName() {
    return this.updateForm.get('AppName');
  }

  get description() {
    return this.updateForm.get('description');
  }

  get releasedate() {
    return this.updateForm.get('releasedate');
  }
  get version() {
    return this.updateForm.get('version');
  }
  get avgrating() {
    return this.updateForm.get('avgrating');
  }
  get downloadCount() {
    return this.updateForm.get('downloadCount');
  }
  get genre() {
    return this.updateForm.get('genre');
  }
  get visibility() {
    return this.updateForm.get('visibility');
  }
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private activatedrouter: ActivatedRoute,
    private appService: AppServiceService
  ) {}

  ngOnInit() {
    this.updateForm = this.fb.group({
      AppName: [''],
      description: [''],

      releasedate: [this.getCurrentDate()],
      version: [''],
      avgrating: [''],
      downloadCount: [''],
      genre: [''],
      visibility: [],
    });
    this.edit();
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().slice(0, 10);
  }
  edit(): void {
    const id1 = Number(this.activatedrouter.snapshot.paramMap.get('id'));
    if (id1) {
      this.appService. getAppDetail(id1).subscribe((i) => {
        this.app1 = i;
        this.updateForm.patchValue({
          AppName: this.app1?.app_name,
          description: this.app1?.description,
          releasedate: this.getCurrentDate(),
          version: this.app1?.version,
          genre: this.app1?.genre,
          visibility: this.app1?.visibility,
          downloadCount: this.app1?.downloadCount,
          avgrating: this.app1?.averageRating,
        });
      });
    }
  }
  save(): void {
    if (this.updateForm.valid) {
      const id1 = Number(this.activatedrouter.snapshot.paramMap.get('id'));
      if (id1) {
        const updateApplication = {
          id: id1,
          ...this.updateForm.value,
        };
        this.appService.updateApp(updateApplication).subscribe(() => {
          this.goBack();
          this.show = true;
        });
      }
    }
  }
  toggleVisibility(event: any) {
    this.updateForm.patchValue({
      visibility: event.target.checked,
    });
  }
  goBack(): void {
    this.location.back();
  }
  onSubmit() {
    console.log(this.updateForm.value);
    this.show = true;
    this.updateForm.reset();
  }
}
