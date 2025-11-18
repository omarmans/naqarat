import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { LanguageService } from '../../shared/services/language.service';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  providers: [ProductService],
})
export class MainPageComponent {
  langService = inject(LanguageService);
  productService = inject(ProductService);
  router = inject(Router);
}
