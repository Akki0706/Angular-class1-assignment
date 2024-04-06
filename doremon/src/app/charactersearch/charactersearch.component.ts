import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../character/character';
import { Subject } from 'rxjs';
import { CharacterServiceService } from '../character-service.service';
import {debounceTime,distinctUntilChanged,switchMap } from 'rxjs';
import { RouterModule } from '@angular/router';
import { AsyncPipe,NgFor } from '@angular/common';

@Component({
  selector: 'app-charactersearch',
  standalone: true,
  imports: [RouterModule,NgFor,AsyncPipe],
  templateUrl: './charactersearch.component.html',
  styleUrl: './charactersearch.component.css'
})
export class CharactersearchComponent {
  members$!: Observable<Character[]>;
  private searchTerms=new Subject<string>();
  constructor(private characterservice:CharacterServiceService){}
  search(word: string): void {
    this.searchTerms.next(word);
  }
  ngOnInit(): void {
    this.members$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((word: string) => this.characterservice.searchcharacter(word))
    );
    }
}
 