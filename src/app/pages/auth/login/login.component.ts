import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  langService = inject(LanguageService);
  router = inject(Router);
  authMode = signal<'login' | 'register'>('login');

  handleLogin(event: Event) {
    event.preventDefault();
    alert(this.langService.t('تم تسجيل الدخول بنجاح!', 'Login successful!'));
    this.router.navigate(['/']);
  }

  handleRegister(event: Event) {
    event.preventDefault();
    alert(
      this.langService.t(
        'تم إنشاء الحساب بنجاح!',
        'Account created successfully!'
      )
    );
    this.router.navigate(['/']);
  }
}
