import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartCount = signal(0);
  cartItems = signal<Array<{ product: Product; quantity: number }>>([]);

  addToCart(product: Product, quantity: number = 1) {
    this.cartCount.set(this.cartCount() + quantity);

    const existingItem = this.cartItems().find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
      this.cartItems.set([...this.cartItems()]);
    } else {
      this.cartItems.set([...this.cartItems(), { product, quantity }]);
    }
  }

  removeFromCart(productId: number) {
    const item = this.cartItems().find((item) => item.product.id === productId);
    if (item) {
      this.cartCount.set(this.cartCount() - item.quantity);
      this.cartItems.set(
        this.cartItems().filter((item) => item.product.id !== productId)
      );
    }
  }

  clearCart() {
    this.cartCount.set(0);
    this.cartItems.set([]);
  }
}
