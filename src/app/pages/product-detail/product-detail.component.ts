import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';
import { LanguageService } from '../../shared/services/language.service';
import { NavigationService } from '../../shared/services/navigation.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [ProductService],
})
export class ProductDetailComponent {
  langService = inject(LanguageService);
  cartService = inject(CartService);
  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  product = signal<Product | null>(null);
  quantity = signal(1);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      const foundProduct = this.productService.getProductById(id);
      if (foundProduct) {
        this.product.set(foundProduct);
      } else {
        this.router.navigate(['/products']);
      }
    });
  }

  increaseQuantity() {
    this.quantity.set(this.quantity() + 1);
  }

  decreaseQuantity() {
    if (this.quantity() > 1) {
      this.quantity.set(this.quantity() - 1);
    }
  }

  addToCart() {
    const prod = this.product();
    if (prod) {
      this.cartService.addToCart(prod, this.quantity());
      alert(
        this.langService.t(
          `تم إضافة ${prod.nameAr} إلى السلة بنجاح!`,
          `${prod.nameEn} added to cart successfully!`
        )
      );
    }
  }
}
