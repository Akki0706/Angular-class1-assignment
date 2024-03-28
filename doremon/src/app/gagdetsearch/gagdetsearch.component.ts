import { Component } from '@angular/core';
import { Gadgets } from '../gadget/gagdet';
import { Observable,of,debounceTime,distinctUntilChanged,switchMap } from 'rxjs';
import { Subject } from 'rxjs';
import { GadgetServiceService } from '../gadget-service.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gagdetsearch',
  standalone: true,
  imports: [NgFor,RouterModule,AsyncPipe],
  templateUrl: './gagdetsearch.component.html',
  styleUrl: './gagdetsearch.component.css'
})
export class GagdetsearchComponent {
  gadgets$!: Observable<Gadgets[]>;
  private searchTerms = new Subject<string>();

  constructor(private gadgetService: GadgetServiceService) {}

  search(word: string): void {
    this.searchTerms.next(word);
  }
  ngOnInit(): void {
    this.gadgets$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((word: string) => this.gadgetService.searchgadgets(word))
    );
  }

}
