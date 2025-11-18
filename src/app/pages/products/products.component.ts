import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { LanguageService } from '../../shared/services/language.service';
import { ProductService } from '../../shared/services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductService],
})
export class ProductsComponent {
  langService = inject(LanguageService);
  productService = inject(ProductService);
  cartService = inject(CartService);
  router = inject(Router);

  searchQuery = '';
  selectedCategory = 'all';
  filteredProducts = signal<Product[]>([]);

  constructor() {
    this.filterProducts();
  }

  filterProducts() {
    let filtered = this.productService.getAllProducts();

    if (this.selectedCategory !== 'all') {
      filtered = this.productService.getProductsByCategory(
        this.selectedCategory
      );
    }

    if (this.searchQuery.trim()) {
      filtered = this.productService.searchProducts(this.searchQuery);
    }

    this.filteredProducts.set(filtered);
  }

  addToCart(product: Product, event: Event) {
    event.stopPropagation();
    this.cartService.addToCart(product, 1);
    alert(
      this.langService.t(
        `تم إضافة ${product.nameAr} إلى السلة بنجاح!`,
        `${product.nameEn} added to cart successfully!`
      )
    );
  }
}
