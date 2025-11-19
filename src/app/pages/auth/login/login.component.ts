import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../shared/services/language.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  langService = inject(LanguageService);
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  authMode = signal<'login' | 'register'>('login');

  loginData = {
    email: '',
    password: '',
  };

  registerData = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  handleLogin(event: Event) {
    event.preventDefault();

    if (this.authService.login(this.loginData.email, this.loginData.password)) {
      alert(this.langService.t('تم تسجيل الدخول بنجاح!', 'Login successful!'));

      // Check for returnUrl
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([returnUrl]);
    }
  }

  handleRegister(event: Event) {
    event.preventDefault();

    if (
      this.authService.register(
        this.registerData.name,
        this.registerData.email,
        this.registerData.phone,
        this.registerData.password
      )
    ) {
      alert(
        this.langService.t(
          'تم إنشاء الحساب بنجاح!',
          'Account created successfully!'
        )
      );

      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([returnUrl]);
    }
  }
}
