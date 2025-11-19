import { Injectable, signal, effect } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly CART_STORAGE_KEY = 'naqarat_cart';

  cartCount = signal(0);
  cartItems = signal<CartItem[]>([]);

  constructor() {
    this.loadCartFromStorage();

    // Auto-save to localStorage whenever cart changes
    effect(() => {
      const items = this.cartItems();
      localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(items));

      // Update count
      const total = items.reduce((sum, item) => sum + item.quantity, 0);
      this.cartCount.set(total);
    });
  }

  private loadCartFromStorage() {
    try {
      const stored = localStorage.getItem(this.CART_STORAGE_KEY);
      if (stored) {
        const items = JSON.parse(stored);
        this.cartItems.set(items);
      }
    } catch (error) {
      console.error('Error loading cart from storage:', error);
    }
  }

  addToCart(product: Product, quantity: number = 1) {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      this.cartItems.set([...currentItems]);
    } else {
      this.cartItems.set([...currentItems, { product, quantity }]);
    }
  }

  updateQuantity(productId: number, quantity: number) {
    const currentItems = this.cartItems();
    const item = currentItems.find((item) => item.product.id === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartItems.set([...currentItems]);
      }
    }
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems();
    this.cartItems.set(
      currentItems.filter((item) => item.product.id !== productId)
    );
  }

  clearCart() {
    this.cartItems.set([]);
    localStorage.removeItem(this.CART_STORAGE_KEY);
  }

  getTotal(): number {
    return this.cartItems().reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }
}
