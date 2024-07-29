import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    this.loadTheme();
  }

  setTheme(theme: 'light' | 'dark'): void {
    localStorage.setItem('theme', theme);
  }

  getTheme(): 'light' | 'dark' {
    return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
  }

  toggleTheme(): void {
    const currentTheme = this.getTheme();
    this.setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  private loadTheme(): void {
    this.setTheme(this.getTheme());
  }
}
