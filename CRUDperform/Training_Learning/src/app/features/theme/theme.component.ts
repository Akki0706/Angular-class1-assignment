import { Component } from '@angular/core';
import { ApplicationService } from '../../core/services/application.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [   MatSlideToggleModule,MatButtonToggleModule ,MatSlideToggle],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {
  isDarkTheme: boolean;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.getTheme() === 'dark';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme;
  }
}
