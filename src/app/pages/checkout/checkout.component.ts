import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { CartService } from '../../shared/services/cart.service';
import { LanguageService } from '../../shared/services/language.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
type PaymentMethod = 'cash' | 'card' | 'wallet' | 'instapay';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  langService = inject(LanguageService);
  cartService = inject(CartService);
  authService = inject(AuthService);
  router = inject(Router);

  selectedPayment = signal<PaymentMethod>('cash');

  shippingInfo = {
    name: '',
    phone: '',
    governorate: '',
    address: '',
    notes: '',
  };

  cardInfo = {
    number: '',
    expiry: '',
    cvv: '',
    name: '',
  };

  walletInfo = {
    provider: '',
    number: '',
  };

  instapayInfo = {
    phone: '',
  };

  isFormValid(): boolean {
    const basicValid =
      this.shippingInfo.name &&
      this.shippingInfo.phone &&
      this.shippingInfo.governorate &&
      this.shippingInfo.address;

    if (!basicValid) return false;

    switch (this.selectedPayment()) {
      case 'card':
        return !!(
          this.cardInfo.number &&
          this.cardInfo.expiry &&
          this.cardInfo.cvv &&
          this.cardInfo.name
        );
      case 'wallet':
        return !!(this.walletInfo.provider && this.walletInfo.number);
      case 'instapay':
        return !!this.instapayInfo.phone;
      case 'cash':
      default:
        return true;
    }
  }

  completeOrder() {
    if (!this.isFormValid()) {
      alert(
        this.langService.t(
          'برجاء إكمال جميع البيانات',
          'Please complete all fields'
        )
      );
      return;
    }

    // هنا تقدر تعمل API call لحفظ الطلب
    const order = {
      shipping: this.shippingInfo,
      payment: this.selectedPayment(),
      paymentDetails: this.getPaymentDetails(),
      items: this.cartService.cartItems(),
      total: this.cartService.getTotal(),
      date: new Date(),
    };

    console.log('Order:', order);

    alert(
      this.langService.t(
        'تم تأكيد طلبك بنجاح! سنتواصل معك قريباً',
        'Your order has been confirmed! We will contact you soon'
      )
    );

    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  getPaymentDetails() {
    switch (this.selectedPayment()) {
      case 'card':
        return { type: 'card', last4: this.cardInfo.number.slice(-4) };
      case 'wallet':
        return { type: 'wallet', provider: this.walletInfo.provider };
      case 'instapay':
        return { type: 'instapay', phone: this.instapayInfo.phone };
      case 'cash':
      default:
        return { type: 'cash' };
    }
  }
}
