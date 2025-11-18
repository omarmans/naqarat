import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  currentPage = signal('home');

  navigateTo(page: string) {
    this.currentPage.set(page);
    window.scrollTo(0, 0);
  }
}
