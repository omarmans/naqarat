import { inject, Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_STORAGE_KEY = 'naqarat_user';
  router = inject(Router);
  isLoggedIn = signal(false);
  currentUser = signal<User | null>(null);

  constructor() {
    this.checkLoginStatus();
  }

  private checkLoginStatus() {
    try {
      const stored = localStorage.getItem(this.USER_STORAGE_KEY);
      if (stored) {
        const user = JSON.parse(stored);
        this.currentUser.set(user);
        this.isLoggedIn.set(true);
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  }

  login(email: string, password: string): boolean {
    // هنا ممكن تعمل API call
    // دلوقتي هنعمل mock login
    const user: User = {
      name: ' User',
      email: email,
      phone: '01234567890',
    };

    this.currentUser.set(user);
    this.isLoggedIn.set(true);
    localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(user));

    return true;
  }

  register(
    name: string,
    email: string,
    phone: string,
    password: string
  ): boolean {
    const user: User = { name, email, phone };

    this.currentUser.set(user);
    this.isLoggedIn.set(true);
    localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(user));

    return true;
  }

  logout() {
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
    localStorage.removeItem(this.USER_STORAGE_KEY);
    this.router.navigate(['/login']);
  }
}
