import { Component } from '@angular/core';
import { ToggleService } from '../../../Services/toggle.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDarkTheme: boolean = false;
  themeIcon: string = '';

  constructor(private toggleService: ToggleService) {}

  ngOnInit(): void {
    this.isDarkTheme = this.toggleService.getTheme() === 'dark';
    this.setIcon();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    const newTheme = this.isDarkTheme ? 'dark' : 'light';
    this.toggleService.setTheme(newTheme);
    this.setIcon();
  }

  setIcon(): void {
    this.themeIcon = this.isDarkTheme
      ? 'https://code.visualstudio.com/assets/icons/theme-light.svg'
      : 'https://code.visualstudio.com/assets/icons/theme-dark.svg';
  }


  isParagraphVisible: boolean = true;

  hideParagraph() {
    this.isParagraphVisible = false;
  }

}
