import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { ApplicationInterface } from '../../core/Interface/AppInterface';
import { ApplicationService } from '../../core/services/application.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe,NgFor,RouterModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  apps!: Observable<ApplicationInterface[]>;
  private searchapps = new Subject<string>();

  constructor(private Appservice: ApplicationService) {}

  search(word: string): void {
    this.searchapps.next(word);
  }

  ngOnInit(): void {
    this.apps = this.searchapps.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((word: string) => this.Appservice.searchApps(word))
    );
  }

}
