import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  langService = inject(LanguageService);
  cartService = inject(CartService);
  isMenuOpen = signal(false);

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
    // this.scrollTop();
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    this.scrollTop();
  }
}
